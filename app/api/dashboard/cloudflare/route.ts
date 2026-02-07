import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import mockData from '@/data/mock/dashboard-metrics.json'

function isAuthenticated(req: NextRequest): boolean {
  const expected = process.env.DASHBOARD_PASSWORD
  if (!expected) return false
  const cookie = req.cookies.get('dashboard_auth')?.value
  return cookie === createHash('sha256').update(expected).digest('hex')
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiToken = process.env.CF_API_TOKEN
  const zoneId = process.env.CF_ZONE_ID

  if (!apiToken || !zoneId) {
    return NextResponse.json(mockData.cloudflare)
  }

  try {
    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    const query = `
      query {
        viewer {
          zones(filter: { zoneTag: "${zoneId}" }) {
            httpRequests1dGroups(
              limit: 30
              filter: {
                date_geq: "${thirtyDaysAgo.toISOString().slice(0, 10)}"
                date_leq: "${now.toISOString().slice(0, 10)}"
              }
              orderBy: [date_ASC]
            ) {
              date: dimensions { date }
              sum {
                requests
                bytes
                threats
                pageViews
                countryMap {
                  clientCountryName
                  requests
                }
              }
            }
          }
        }
      }
    `

    const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!res.ok) {
      return NextResponse.json(mockData.cloudflare)
    }

    const json = await res.json()
    const groups = json?.data?.viewer?.zones?.[0]?.httpRequests1dGroups || []

    let totalRequests = 0
    let totalBandwidth = 0
    let totalThreats = 0
    let totalPageviews = 0
    const countryMap = new Map<string, number>()

    const daily = groups.map(
      (g: {
        date: { date: string }
        sum: {
          requests: number
          bytes: number
          threats: number
          pageViews: number
          countryMap: Array<{ clientCountryName: string; requests: number }>
        }
      }) => {
        totalRequests += g.sum.requests
        totalBandwidth += g.sum.bytes
        totalThreats += g.sum.threats
        totalPageviews += g.sum.pageViews

        for (const c of g.sum.countryMap) {
          countryMap.set(
            c.clientCountryName,
            (countryMap.get(c.clientCountryName) || 0) + c.requests
          )
        }

        return { date: g.date.date, requests: g.sum.requests }
      }
    )

    const topCountries = Array.from(countryMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, requests]) => ({ name, requests }))

    return NextResponse.json({
      requests: totalRequests,
      bandwidth: totalBandwidth,
      threats: totalThreats,
      pageviews: totalPageviews,
      daily,
      topCountries,
    })
  } catch {
    return NextResponse.json(mockData.cloudflare)
  }
}

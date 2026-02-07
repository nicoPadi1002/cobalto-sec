import { NextRequest, NextResponse } from 'next/server'
import { createHash, createSign } from 'crypto'
import mockData from '@/data/mock/dashboard-metrics.json'

function isAuthenticated(req: NextRequest): boolean {
  const expected = process.env.DASHBOARD_PASSWORD
  if (!expected) return false
  const cookie = req.cookies.get('dashboard_auth')?.value
  return cookie === createHash('sha256').update(expected).digest('hex')
}

function base64url(data: string | Buffer): string {
  const buf = typeof data === 'string' ? Buffer.from(data) : data
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function getGscAccessToken(credentials: {
  client_email: string
  private_key: string
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  )

  const signInput = `${header}.${payload}`
  const signer = createSign('RSA-SHA256')
  signer.update(signInput)
  const signature = base64url(signer.sign(credentials.private_key))
  const jwt = `${signInput}.${signature}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  const tokenData = await tokenRes.json()
  return tokenData.access_token
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const credentialsJson = process.env.GSC_CREDENTIALS
  const siteUrl = process.env.GSC_SITE_URL

  if (!credentialsJson || !siteUrl) {
    return NextResponse.json(mockData.gsc)
  }

  try {
    const credentials = JSON.parse(credentialsJson)
    const accessToken = await getGscAccessToken(credentials)

    const now = new Date()
    const endDate = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000) // 3 days ago (GSC delay)
    const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)

    const encodedSite = encodeURIComponent(siteUrl)

    // Fetch totals and top queries in parallel
    const [totalsRes, queriesRes] = await Promise.all([
      fetch(
        `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10),
            dimensions: [],
          }),
        }
      ),
      fetch(
        `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10),
            dimensions: ['query'],
            rowLimit: 5,
          }),
        }
      ),
    ])

    const [totals, queries] = await Promise.all([totalsRes.json(), queriesRes.json()])

    const row = totals.rows?.[0]
    const topQueries = (queries.rows || []).map(
      (r: {
        keys: string[]
        clicks: number
        impressions: number
        ctr: number
        position: number
      }) => ({
        query: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: +(r.ctr * 100).toFixed(2),
        position: +r.position.toFixed(1),
      })
    )

    if (!row) {
      return NextResponse.json({
        clicks: 0,
        impressions: 0,
        ctr: 0,
        position: 0,
        topQueries: [],
        noData: true,
      })
    }

    return NextResponse.json({
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: +(row.ctr * 100).toFixed(2),
      position: +row.position.toFixed(1),
      topQueries,
    })
  } catch {
    return NextResponse.json(mockData.gsc)
  }
}

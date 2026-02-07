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

  const apiUrl = process.env.UMAMI_API_URL
  const username = process.env.UMAMI_USERNAME
  const password = process.env.UMAMI_PASSWORD
  const websiteId = process.env.UMAMI_WEBSITE_ID

  if (!apiUrl || !username || !password || !websiteId) {
    return NextResponse.json(mockData.umami)
  }

  try {
    // Get auth token
    const authRes = await fetch(`${apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (!authRes.ok) {
      return NextResponse.json(mockData.umami)
    }

    const { token } = await authRes.json()
    const headers = { Authorization: `Bearer ${token}` }

    const now = Date.now()
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000
    const params = `startAt=${thirtyDaysAgo}&endAt=${now}`

    // Fetch all data in parallel
    const [statsRes, pageviewsRes, topPagesRes, referrersRes, countriesRes] = await Promise.all([
      fetch(`${apiUrl}/api/websites/${websiteId}/stats?${params}`, { headers }),
      fetch(`${apiUrl}/api/websites/${websiteId}/pageviews?${params}&unit=day`, { headers }),
      fetch(`${apiUrl}/api/websites/${websiteId}/metrics?${params}&type=url&limit=5`, { headers }),
      fetch(`${apiUrl}/api/websites/${websiteId}/metrics?${params}&type=referrer&limit=5`, {
        headers,
      }),
      fetch(`${apiUrl}/api/websites/${websiteId}/metrics?${params}&type=country&limit=5`, {
        headers,
      }),
    ])

    const [stats, pageviews, topPages, referrers, countries] = await Promise.all([
      statsRes.json(),
      pageviewsRes.json(),
      topPagesRes.json(),
      referrersRes.json(),
      countriesRes.json(),
    ])

    const result = {
      visitors: stats.visitors?.value ?? stats.uniques?.value ?? 0,
      pageviews: stats.pageviews?.value ?? 0,
      bounceRate: stats.bounces?.value
        ? ((stats.bounces.value / (stats.visits?.value || 1)) * 100).toFixed(1)
        : 0,
      avgTime: stats.totaltime?.value
        ? Math.round(stats.totaltime.value / (stats.visits?.value || 1))
        : 0,
      daily: (pageviews.pageviews || []).map((d: { date: string; y: number }, i: number) => ({
        date: d.date || new Date(thirtyDaysAgo + i * 86400000).toISOString().slice(0, 10),
        visitors: (pageviews.sessions || [])[i]?.y ?? 0,
        pageviews: d.y ?? 0,
      })),
      topPages: (topPages || []).map((p: { x: string; y: number }) => ({
        path: p.x,
        views: p.y,
      })),
      referrers: (referrers || []).map((r: { x: string; y: number }) => ({
        name: r.x || '(direct)',
        views: r.y,
      })),
      countries: (countries || []).map((c: { x: string; y: number }) => ({
        name: c.x,
        views: c.y,
      })),
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json(mockData.umami)
  }
}

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

  const emailUrl = process.env.EMAIL_METRICS_URL

  if (!emailUrl) {
    return NextResponse.json(mockData.email)
  }

  try {
    const res = await fetch(emailUrl, { next: { revalidate: 300 } })
    if (!res.ok) {
      return NextResponse.json(mockData.email)
    }
    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(mockData.email)
  }
}

import { NextResponse } from 'next/server'

const R2_URL = 'https://pub-60494eebccb34036a63a5d8dbbb9f43d.r2.dev/honeypot-live.json'

export async function GET() {
  try {
    const res = await fetch(R2_URL, { next: { revalidate: 300 } })
    if (!res.ok) throw new Error(`R2 returned ${res.status}`)
    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch honeypot data' }, { status: 502 })
  }
}

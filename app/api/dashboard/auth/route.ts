import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()
    const expected = process.env.DASHBOARD_PASSWORD

    if (!expected) {
      return NextResponse.json({ error: 'Dashboard password not configured' }, { status: 500 })
    }

    if (password !== expected) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = hashPassword(expected)
    const res = NextResponse.json({ ok: true })
    res.cookies.set('dashboard_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return res
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}

export async function GET(req: NextRequest) {
  const expected = process.env.DASHBOARD_PASSWORD
  if (!expected) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  const cookie = req.cookies.get('dashboard_auth')?.value
  const expectedHash = hashPassword(expected)

  if (cookie === expectedHash) {
    return NextResponse.json({ authenticated: true })
  }

  return NextResponse.json({ authenticated: false }, { status: 401 })
}

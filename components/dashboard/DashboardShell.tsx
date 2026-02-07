'use client'

import { useState, useEffect, FormEvent } from 'react'
import WebTrafficSection from './WebTrafficSection'
import InfraSection from './InfraSection'
import EmailSection from './EmailSection'
import SeoSection from './SeoSection'
import LinkedInSection from './LinkedInSection'

export default function DashboardShell() {
  const [authenticated, setAuthenticated] = useState(false)
  const [checking, setChecking] = useState(true)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/auth')
      .then((r) => {
        if (r.ok) setAuthenticated(true)
      })
      .finally(() => setChecking(false))
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const res = await fetch('/api/dashboard/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        setAuthenticated(true)
      } else {
        setError('Password incorrecto')
      }
    } catch {
      setError('Error de conexión')
    } finally {
      setSubmitting(false)
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        >
          <h2 className="mb-6 text-center text-xl font-bold text-gray-100">Dashboard Access</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !password}
            className="mt-4 w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white transition-colors hover:bg-cyan-500 disabled:opacity-50"
          >
            {submitting ? 'Verificando...' : 'Acceder'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-red-400 uppercase">
          Private Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-100">Metrics Overview</h1>
        <p className="mt-1 text-gray-400">Last 30 days &mdash; Data refreshes every 5 minutes</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <WebTrafficSection />
        <InfraSection />
        <EmailSection />
        <SeoSection />
        <div className="lg:col-span-2">
          <LinkedInSection />
        </div>
      </div>
    </div>
  )
}

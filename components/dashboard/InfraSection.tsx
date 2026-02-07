'use client'

import { useState, useEffect } from 'react'
import MetricCard from './MetricCard'
import Sparkline from './Sparkline'

interface CloudflareData {
  requests: number
  bandwidth: number
  threats: number
  pageviews: number
  daily: Array<{ date: string; requests: number }>
  topCountries: Array<{ name: string; requests: number }>
}

function formatBytes(bytes: number): string {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`
  return `${(bytes / 1e3).toFixed(1)} KB`
}

export default function InfraSection() {
  const [data, setData] = useState<CloudflareData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/cloudflare')
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
        <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">
          Infrastructure
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-xl bg-gray-800/50" />
          ))}
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
        <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">
          Infrastructure
        </p>
        <p className="text-sm text-gray-400">No se pudieron cargar los datos.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">
        Infrastructure
      </p>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Requests" value={data.requests} />
        <MetricCard label="Bandwidth" value={formatBytes(data.bandwidth)} />
        <MetricCard label="Threats Blocked" value={data.threats} />
        <MetricCard label="Pageviews" value={data.pageviews} />
      </div>

      {data.daily.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Requests / day</p>
          <Sparkline data={data.daily.map((d) => d.requests)} />
        </div>
      )}

      {data.topCountries.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Top Countries</p>
          <div className="space-y-1">
            {data.topCountries.map((c, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-300">{c.name}</span>
                <span className="font-mono text-cyan-400">{c.requests.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

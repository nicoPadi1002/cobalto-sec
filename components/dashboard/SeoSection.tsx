'use client'

import { useState, useEffect } from 'react'
import MetricCard from './MetricCard'

interface GscData {
  clicks: number
  impressions: number
  ctr: number
  position: number
  topQueries: Array<{
    query: string
    clicks: number
    impressions: number
    ctr: number
    position: number
  }>
  noData?: boolean
}

export default function SeoSection() {
  const [data, setData] = useState<GscData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/gsc')
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
        <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">SEO</p>
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
        <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">SEO</p>
        <p className="text-sm text-gray-400">No se pudieron cargar los datos.</p>
      </div>
    )
  }

  if (data.noData) {
    return (
      <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
        <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">SEO</p>
        <div className="flex min-h-[120px] items-center justify-center text-center">
          <div>
            <p className="text-gray-400">Esperando datos de Google Search Console</p>
            <p className="mt-1 text-xs text-gray-500">
              Los datos pueden tardar 2-3 días en aparecer
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">SEO</p>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Clicks" value={data.clicks} />
        <MetricCard label="Impressions" value={data.impressions} />
        <MetricCard label="CTR" value={data.ctr} suffix="%" />
        <MetricCard label="Avg. Position" value={data.position} />
      </div>

      {data.topQueries.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Top Queries</p>
          <div className="space-y-2">
            {data.topQueries.map((q, i) => (
              <div key={i} className="rounded-lg bg-gray-800/50 p-2">
                <p className="truncate text-sm text-gray-200">{q.query}</p>
                <div className="mt-1 flex gap-3 font-mono text-xs text-gray-400">
                  <span>
                    <span className="text-cyan-400">{q.clicks}</span> clicks
                  </span>
                  <span>
                    <span className="text-cyan-400">{q.impressions}</span> imp
                  </span>
                  <span>
                    <span className="text-cyan-400">{q.ctr}%</span> CTR
                  </span>
                  <span>
                    pos <span className="text-cyan-400">{q.position}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

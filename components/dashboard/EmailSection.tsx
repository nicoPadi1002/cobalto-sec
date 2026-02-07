'use client'

import { useState, useEffect } from 'react'
import MetricCard from './MetricCard'

interface EmailData {
  totalLeads: number
  sent: number
  opened: number
  clicked: number
  openRate: number
  clickRate: number
  topTemplates: Array<{ name: string; sent: number; opened: number; clicked: number }>
}

export default function EmailSection() {
  const [data, setData] = useState<EmailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/email')
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
          Email Outreach
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
          Email Outreach
        </p>
        <p className="text-sm text-gray-400">No se pudieron cargar los datos.</p>
      </div>
    )
  }

  const funnelSteps = [
    { label: 'Leads', value: data.totalLeads },
    { label: 'Sent', value: data.sent },
    { label: 'Opened', value: data.opened },
    { label: 'Clicked', value: data.clicked },
  ]
  const maxFunnel = Math.max(...funnelSteps.map((s) => s.value), 1)

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">
        Email Outreach
      </p>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Open Rate" value={data.openRate} suffix="%" />
        <MetricCard label="Click Rate" value={data.clickRate} suffix="%" />
      </div>

      {/* Funnel */}
      <div className="mt-5">
        <p className="mb-3 text-xs font-medium text-gray-400">Funnel</p>
        <div className="space-y-2">
          {funnelSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-16 text-right text-xs text-gray-400">{step.label}</span>
              <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-gray-800">
                <div
                  className="absolute inset-y-0 left-0 rounded-md bg-gradient-to-r from-red-500 to-cyan-500"
                  style={{ width: `${(step.value / maxFunnel) * 100}%` }}
                />
                <span className="relative z-10 flex h-full items-center px-3 font-mono text-xs text-white">
                  {step.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Templates */}
      {data.topTemplates.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Top Templates</p>
          <div className="space-y-1">
            {data.topTemplates.map((t, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="max-w-[60%] truncate text-gray-300">{t.name}</span>
                <span className="font-mono text-xs text-cyan-400">
                  {t.sent}s / {t.opened}o / {t.clicked}c
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

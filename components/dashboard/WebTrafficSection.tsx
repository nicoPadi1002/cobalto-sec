'use client'

import { useState, useEffect } from 'react'
import MetricCard from './MetricCard'
import Sparkline from './Sparkline'

interface UmamiData {
  visitors: number
  pageviews: number
  bounceRate: number | string
  avgTime: number
  daily: Array<{ date: string; visitors: number; pageviews: number }>
  topPages: Array<{ path: string; views: number }>
  referrers: Array<{ name: string; views: number }>
  countries: Array<{ name: string; views: number }>
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function WebTrafficSection() {
  const [data, setData] = useState<UmamiData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/umami')
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <SectionSkeleton title="Web Traffic" />
  }

  if (error || !data) {
    return <SectionError title="Web Traffic" />
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">
        Web Traffic
      </p>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Visitors" value={data.visitors} />
        <MetricCard label="Pageviews" value={data.pageviews} />
        <MetricCard label="Bounce Rate" value={data.bounceRate} suffix="%" />
        <MetricCard label="Avg. Time" value={formatTime(data.avgTime)} />
      </div>

      {data.daily.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400">Visitors / day</p>
          <Sparkline data={data.daily.map((d) => d.visitors)} />
        </div>
      )}

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <DataTable title="Top Pages" rows={data.topPages.map((p) => [p.path, p.views])} />
        <DataTable title="Referrers" rows={data.referrers.map((r) => [r.name, r.views])} />
        <DataTable title="Countries" rows={data.countries.map((c) => [c.name, c.views])} />
      </div>
    </div>
  )
}

function DataTable({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-gray-400">{title}</p>
      <div className="space-y-1">
        {rows.map(([label, value], i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="max-w-[70%] truncate text-gray-300">{label}</span>
            <span className="font-mono text-cyan-400">{value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">{title}</p>
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-xl bg-gray-800/50" />
        ))}
      </div>
    </div>
  )
}

function SectionError({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <p className="mb-5 text-sm font-semibold tracking-widest text-red-400 uppercase">{title}</p>
      <p className="text-sm text-gray-400">No se pudieron cargar los datos.</p>
    </div>
  )
}

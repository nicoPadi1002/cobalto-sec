'use client'

import { useEffect, useState, useCallback } from 'react'
import LiveIndicator from './LiveIndicator'
import ActivityChart from './ActivityChart'
import AttackTable from './AttackTable'
import TopCredentials from './TopCredentials'
import mockData from '@/data/mock/honeypot-live.json'

interface HoneypotData {
  generatedAt: string
  stats: {
    totalSessions: number
    uniqueIPs: number
    countries: number
    malwareSamples: number
    ttyRecordings: number
    monitoringSince: string
  }
  activity24h: Array<{ hour: string; count: number }>
  recentAttacks: Array<{
    timestamp: string
    country: string
    countryName: string
    activity: string
  }>
  topCredentials: Array<{
    username: string
    password: string
    count: number
  }>
  topCommands: Array<{
    command: string
    count: number
  }>
  topCountries: Array<{
    code: string
    country: string
    count: number
  }>
}

const DATA_URL = process.env.NEXT_PUBLIC_HONEYPOT_DATA_URL
const REFRESH_INTERVAL = 60_000

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K+`
  return n.toLocaleString()
}

function daysSince(dateStr: string): number {
  const start = new Date(dateStr)
  const now = new Date()
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

export default function LiveDashboard() {
  const [data, setData] = useState<HoneypotData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    if (!DATA_URL) {
      // Use mock data with a fresh timestamp so LiveIndicator shows "Live"
      const mock = { ...mockData, generatedAt: new Date().toISOString() }
      setData(mock)
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/honeypot-data', { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json: HoneypotData = await res.json()
      setData(json)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar datos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [fetchData])

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
          <p className="mt-4 text-sm text-gray-500">Cargando datos del honeypot...</p>
        </div>
      </div>
    )
  }

  if (error && !data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="rounded-xl border border-red-500/30 bg-red-50 p-8 text-center dark:bg-red-950/20">
          <p className="font-semibold text-red-600 dark:text-red-400">Error al cargar datos</p>
          <p className="mt-2 text-sm text-red-500">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!data) return null

  const statCards = [
    {
      value: formatNumber(data.stats.totalSessions),
      label: 'Sesiones SSH',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      value: formatNumber(data.stats.uniqueIPs),
      label: 'IPs Únicas',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
    {
      value: String(data.stats.countries),
      label: 'Países',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      value: String(data.stats.malwareSamples),
      label: 'Malware Samples',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    {
      value: String(daysSince(data.stats.monitoringSince)),
      label: 'Días Activo',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      value: String(data.stats.ttyRecordings),
      label: 'Grabaciones TTY',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
            Monitor en tiempo real
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            HoneyAI — Live Threat Monitor
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Honeypot SSH en producción desde Diciembre 2025
          </p>
        </div>
        <LiveIndicator generatedAt={data.generatedAt} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {statCards.map((stat, i) => (
          <div
            key={i}
            className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
          >
            <svg
              className="mx-auto mb-2 h-5 w-5 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
            </svg>
            <p className="font-mono text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl dark:text-cyan-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Activity Chart */}
      <ActivityChart data={data.activity24h} />

      {/* Two-column: Attacks + Credentials/Commands/Countries */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AttackTable attacks={data.recentAttacks} />
        <TopCredentials
          credentials={data.topCredentials}
          commands={data.topCommands}
          countries={data.topCountries}
        />
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-400 dark:text-gray-600">
        Datos recolectados por HoneyAI, un honeypot SSH en producción. Las IPs de los atacantes no
        se muestran públicamente. Actualizado automáticamente cada 60 segundos.
      </p>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import mockData from '@/data/mock/honeypot-live.json'

interface HoneypotStats {
  totalSessions: number
  uniqueIPs: number
  countries: number
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K+`
  return n.toLocaleString()
}

function buildStats(s: HoneypotStats) {
  return [
    {
      value: formatNumber(s.totalSessions),
      label: 'Sesiones SSH',
      description: 'Ataques capturados en producción',
    },
    {
      value: formatNumber(s.uniqueIPs),
      label: 'IPs Únicas',
      description: 'Atacantes únicos identificados',
    },
    { value: String(s.countries), label: 'Países', description: 'Origen geográfico de ataques' },
  ]
}

export default function StatsStrip() {
  const [stats, setStats] = useState(() => buildStats(mockData.stats))
  const [animated, setAnimated] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/honeypot-data', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        setStats(buildStats(json.stats))
      } catch {
        // proxy unavailable or rewrite not configured — keep mock fallback
      }
    }
    load()
  }, [])

  // IntersectionObserver adds a one-shot fade-in when the grid enters view.
  // If it doesn't fire (reduced-motion, viewport quirk), content stays visible anyway.
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative -mx-4 overflow-hidden px-4 py-16 sm:-mx-6 sm:px-6 sm:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-950" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-sm tracking-widest text-red-500 uppercase dark:text-red-400">
            [ datos reales · sistemas en producción ]
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10 ${
                animated ? 'animate-count-up' : ''
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="font-pixel min-h-[3rem] text-2xl leading-tight text-amber-600 sm:min-h-[4rem] sm:text-3xl dark:text-amber-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* CTA + Trust badges */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <Link
            href="/live"
            className="inline-flex items-center gap-2 rounded-lg border border-amber-500/50 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-600 transition-all hover:border-amber-500 hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/10 dark:text-amber-400 dark:hover:border-amber-400 dark:hover:shadow-amber-400/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Monitor en Tiempo Real
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="flex flex-wrap justify-center gap-3">
            {['Infraestructura Propia', 'Open Source', 'Datos Reales'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
              >
                <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

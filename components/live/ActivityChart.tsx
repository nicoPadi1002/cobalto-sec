interface ActivityChartProps {
  data: Array<{ hour: string; count: number }>
}

export default function ActivityChart({ data }: ActivityChartProps) {
  const max = Math.max(...data.map((d) => d.count))

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10">
      <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
        Actividad 24h
      </p>
      <div className="flex items-end gap-[3px] sm:gap-1" style={{ height: '160px' }}>
        {data.map((entry, i) => {
          const pct = max > 0 ? (entry.count / max) * 100 : 0
          return (
            <div
              key={i}
              className="group relative flex h-full flex-1 flex-col items-center justify-end"
            >
              <div
                className="w-full rounded-t bg-gradient-to-t from-red-500 to-cyan-500 transition-opacity group-hover:opacity-80"
                style={{ height: `${pct}%`, minHeight: pct > 0 ? '2px' : '0px' }}
              />
              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 font-mono text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-700">
                {entry.count}
              </div>
            </div>
          )
        })}
      </div>
      {/* X-axis labels */}
      <div className="mt-2 flex">
        {data.map((entry, i) => (
          <div key={i} className="flex-1 text-center">
            {i % 6 === 0 && (
              <span className="font-mono text-[10px] text-gray-400">{entry.hour.slice(0, 2)}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

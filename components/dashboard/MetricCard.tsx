interface MetricCardProps {
  label: string
  value: string | number
  suffix?: string
  prefix?: string
}

export default function MetricCard({ label, value, suffix, prefix }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10">
      <p className="text-sm font-semibold text-gray-100">{label}</p>
      <p className="mt-2 font-mono text-3xl text-cyan-400">
        {prefix}
        {typeof value === 'number' ? value.toLocaleString() : value}
        {suffix && <span className="ml-1 text-lg text-cyan-400/60">{suffix}</span>}
      </p>
    </div>
  )
}

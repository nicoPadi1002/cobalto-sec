interface SparklineProps {
  data: number[]
  height?: number
  className?: string
}

export default function Sparkline({ data, height = 60, className = '' }: SparklineProps) {
  if (data.length < 2) return null

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 300
  const padding = 2

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * (width - padding * 2) + padding
      const y = height - ((v - min) / range) * (height - padding * 2) - padding
      return `${x},${y}`
    })
    .join(' ')

  const fillPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${className}`}
      preserveAspectRatio="none"
    >
      <polygon points={fillPoints} fill="rgb(6 182 212 / 0.1)" />
      <polyline points={points} fill="none" stroke="rgb(6 182 212)" strokeWidth="2" />
    </svg>
  )
}

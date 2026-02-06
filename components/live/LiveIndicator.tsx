interface LiveIndicatorProps {
  generatedAt: string
}

export default function LiveIndicator({ generatedAt }: LiveIndicatorProps) {
  const elapsed = Date.now() - new Date(generatedAt).getTime()
  const isLive = elapsed < 10 * 60 * 1000 // < 10 minutes

  if (isLive) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/30 dark:text-green-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Live
      </span>
    )
  }

  const minutes = Math.floor(elapsed / 60_000)
  const label = minutes < 60 ? `${minutes}m ago` : `${Math.floor(minutes / 60)}h ago`

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <span className="h-2 w-2 rounded-full bg-gray-400" />
      {label}
    </span>
  )
}

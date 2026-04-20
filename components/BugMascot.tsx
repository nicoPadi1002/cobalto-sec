'use client'

import { Icon } from '@iconify/react'

type Mode = 'idle' | 'squashed' | 'static'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizePx: Record<Size, number> = {
  sm: 20,
  md: 40,
  lg: 80,
  xl: 140,
}

export default function BugMascot({
  mode = 'idle',
  size = 'md',
  className = '',
  withLabel = false,
  ariaLabel,
}: {
  mode?: Mode
  size?: Size
  className?: string
  withLabel?: boolean
  ariaLabel?: string
}) {
  const px = sizePx[size]

  const wrapperClass =
    mode === 'idle' ? 'animate-bug-walk' : mode === 'squashed' ? 'bug-squashed' : ''

  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={ariaLabel ?? 'bug mascot'}
      role="img"
    >
      <span className={wrapperClass} style={{ display: 'inline-flex', lineHeight: 0 }}>
        <Icon icon="ph:bug-beetle-duotone" width={px} height={px} />
      </span>
      {withLabel && (
        <span className="font-pixel text-[9px] tracking-tight whitespace-nowrap opacity-70">
          bug@cobalto-sec
        </span>
      )}
    </div>
  )
}

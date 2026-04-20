'use client'

type Mode = 'idle' | 'squashed' | 'static'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizePx: Record<Size, number> = {
  sm: 20,
  md: 40,
  lg: 80,
  xl: 140,
}

// Inline beetle SVG — no runtime fetch, 100% reliable render.
// Inspired in Phosphor Bug Beetle Duotone: head + elytra + 6 legs + 2 antennae.
function BeetleSvg({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      aria-hidden="true"
    >
      {/* Elytra (cuerpo) — duotone fill atenuado */}
      <path d="M60 108 Q60 212, 128 220 Q196 212, 196 108 Z" fill="currentColor" opacity="0.25" />
      {/* Head — duotone */}
      <ellipse cx="128" cy="66" rx="34" ry="26" fill="currentColor" opacity="0.35" />

      {/* Outlines (principal) */}
      <g
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Head contour */}
        <ellipse cx="128" cy="66" rx="34" ry="26" />
        {/* Body contour */}
        <path d="M60 108 Q60 212, 128 220 Q196 212, 196 108 Z" />
        {/* Pronotum junction (línea entre cabeza y cuerpo) */}
        <line x1="60" y1="108" x2="196" y2="108" />
        {/* Antenas */}
        <line x1="100" y1="44" x2="72" y2="18" />
        <line x1="156" y1="44" x2="184" y2="18" />
        {/* Patas izquierda (3) */}
        <line x1="60" y1="128" x2="22" y2="110" />
        <line x1="60" y1="160" x2="16" y2="162" />
        <line x1="78" y1="198" x2="40" y2="218" />
        {/* Patas derecha (3) */}
        <line x1="196" y1="128" x2="234" y2="110" />
        <line x1="196" y1="160" x2="240" y2="162" />
        <line x1="178" y1="198" x2="216" y2="218" />
      </g>

      {/* Central elytra split (línea divisora del caparazón) */}
      <line
        x1="128"
        y1="108"
        x2="128"
        y2="214"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Ojos */}
      <circle cx="116" cy="64" r="3.5" fill="currentColor" opacity="0.9" />
      <circle cx="140" cy="64" r="3.5" fill="currentColor" opacity="0.9" />
    </svg>
  )
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
        <BeetleSvg size={px} />
      </span>
      {withLabel && (
        <span className="font-pixel text-[9px] tracking-tight whitespace-nowrap opacity-70">
          bug@cobalto-sec
        </span>
      )}
    </div>
  )
}

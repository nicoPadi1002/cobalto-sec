import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

// Pure-CSS fade-in wrapper. No IntersectionObserver, no client-side JS.
// The content is always rendered to the DOM — the animation is a progressive
// enhancement that runs on mount. If animations are disabled (reduced-motion
// or CSS fails), content stays visible.
export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <div className={`cs-fade-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

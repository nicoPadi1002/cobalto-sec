'use client'

import { useEffect, useState } from 'react'

function applyCrt(on: boolean) {
  document.documentElement.dataset.crt = on ? 'on' : ''
  localStorage.setItem('crtMode', on ? '1' : '0')
}

export default function CrtToggle() {
  const [active, setActive] = useState(false)

  // Mount: restore from localStorage + global hotkey listener
  useEffect(() => {
    const saved = localStorage.getItem('crtMode') === '1'
    setActive(saved)
    document.documentElement.dataset.crt = saved ? 'on' : ''

    function onKeydown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return
      }
      if (e.key === '`' || e.key === '~') {
        e.preventDefault()
        setActive((prev) => {
          const next = !prev
          applyCrt(next)
          return next
        })
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [])

  const toggle = () => {
    setActive((prev) => {
      const next = !prev
      applyCrt(next)
      return next
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      title="Toggle CRT mode (hotkey: ~)"
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors ${
        active
          ? 'text-amber-500 dark:text-amber-400'
          : 'text-gray-500 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400'
      }`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          active ? 'bg-amber-500 shadow-[0_0_6px_currentColor]' : 'bg-gray-400 dark:bg-gray-700'
        }`}
      />
      [ crt · {active ? 'on' : 'off'} ]
      <span className="ml-1 text-gray-400 dark:text-gray-600">press ~</span>
    </button>
  )
}

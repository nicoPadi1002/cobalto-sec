'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavDropdownProps {
  title: string
  items: { href: string; title: string }[]
}

const NavDropdown = ({ title, items }: NavDropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = items.some((item) => pathname.startsWith(item.href))

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`link-underline flex items-center gap-1 font-medium whitespace-nowrap ${
          isActive
            ? 'text-red-500 dark:text-red-400'
            : 'text-red-500 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300'
        }`}
      >
        {title}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-950">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-500 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-red-400"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavDropdown

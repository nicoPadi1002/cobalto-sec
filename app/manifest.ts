// app/manifest.ts
import type { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function manifest(): MetadataRoute.Manifest {
  const name = siteMetadata.title || 'Cobalto-Sec'
  const short = 'Cobalto-Sec'
  const base = (siteMetadata.siteUrl || 'https://cobalto-sec.tech').replace(/\/+$/, '')

  return {
    name,
    short_name: short,
    description: siteMetadata.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0ea5e9',
    theme_color: '#0ea5e9',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
    screenshots: [
      // Podés sumar capturas más adelante
    ],
  }
}

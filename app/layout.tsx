import Script from 'next/script'
// app/layout.tsx
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk, JetBrains_Mono, Press_Start_2P } from 'next/font/google'
// Umami analytics injected directly via next/script in <head>
import { SearchProvider, type SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import type { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: { default: siteMetadata.title, template: `%s | ${siteMetadata.title}` },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'es_AR',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: { 'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/icon.png' }],
  },
  manifest: '/manifest.webmanifest',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cobalto-Sec',
  url: 'https://cobalto-sec.tech',
  logo: 'https://cobalto-sec.tech/static/images/og-default.png',
  founder: { '@type': 'Person', name: 'Nicolás Padilla' },
  contactPoint: { '@type': 'ContactPoint', email: 'nicolas@cobalto-sec.tech' },
  sameAs: ['https://github.com/nicoPadi1002', 'https://linkedin.com/in/nicopadilla-sec/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${jetbrains_mono.variable} ${press_start_2p.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          defer
          src="https://analytics.cobalto-sec.tech/script.js"
          data-website-id="10dd27da-b625-49ce-900a-8033a98167ed"
          strategy="afterInteractive"
        />
      </head>
      <body className="relative bg-[#f5f0e8] pl-[calc(100vw-100%)] text-black antialiased dark:bg-[#0a0908] dark:text-white">
        {/* CRT grid background — graph paper + amber phosphor dots */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* Layer 1: grid lines (warm gray) */}
          <svg
            className="absolute inset-0 h-full w-full text-gray-800 opacity-[0.08] dark:text-gray-500 dark:opacity-[0.12]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="crt-grid"
                x="0"
                y="0"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crt-grid)" />
          </svg>

          {/* Layer 2: amber phosphor dots at intersections */}
          <svg
            className="absolute inset-0 h-full w-full text-amber-600 opacity-[0.18] dark:text-amber-500 dark:opacity-[0.22]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="crt-dots"
                x="0"
                y="0"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="0" cy="0" r="1" fill="currentColor" />
                <circle cx="48" cy="0" r="1" fill="currentColor" />
                <circle cx="0" cy="48" r="1" fill="currentColor" />
                <circle cx="48" cy="48" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crt-dots)" />
          </svg>

          {/* Layer 3: radial glow from top-center (amber phosphor flood) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,176,0,0.08), transparent 60%)',
            }}
          />

          {/* Layer 4: vignette (darker corners) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 100% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 100%)',
            }}
          />
        </div>

        <ThemeProviders>
          <div className="relative z-10">
            <SectionContainer>
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
              </SearchProvider>
              <Footer />
            </SectionContainer>
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}

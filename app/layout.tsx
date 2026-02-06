import Script from 'next/script'
// app/layout.tsx
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
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
      className={`${space_grotesk.variable} ${jetbrains_mono.variable} scroll-smooth`}
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
      <body className="relative bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        {/* Circuit pattern background */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]">
          <svg width="200%" height="200%" className="animate-circuit-drift">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                {/* Horizontal lines */}
                <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" />

                {/* Vertical lines */}
                <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" />

                {/* Corner connections */}
                <line x1="20" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <line x1="70" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="80" x2="30" y2="80" stroke="currentColor" strokeWidth="0.5" />
                <line x1="70" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />

                {/* Circuit nodes (small circles) */}
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                <circle cx="80" cy="20" r="1.5" fill="currentColor" />
                <circle cx="20" cy="80" r="1.5" fill="currentColor" />
                <circle cx="80" cy="80" r="1.5" fill="currentColor" />
                <circle cx="50" cy="50" r="1" fill="currentColor" />

                {/* Diagonal traces */}
                <line x1="30" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.3" />
                <line x1="50" y1="50" x2="70" y2="80" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#circuit)"
              className="text-gray-900 dark:text-red-500"
            />
          </svg>
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

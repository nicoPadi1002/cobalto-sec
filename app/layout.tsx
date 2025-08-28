import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'
import siteMetadata from 'data/siteMetadata'

export const metadata = {
  metadataBase: new URL('https://cobalto-sec.tech'),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  alternates: { canonical: 'https://cobalto-sec.tech' },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: 'https://cobalto-sec.tech',
    siteName: siteMetadata.title,
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/static/images/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  )
}

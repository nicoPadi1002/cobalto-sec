import { genPageMetadata } from 'app/seo'
import LiveDashboard from '@/components/live/LiveDashboard'

export const metadata = genPageMetadata({
  title: 'Live Threat Monitor',
  description:
    'Monitor en tiempo real del honeypot HoneyAI. Sesiones SSH, ataques, credenciales, comandos y países de origen actualizados automáticamente.',
})

const liveJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'HoneyAI Live Threat Monitor',
  url: 'https://cobalto-sec.tech/live',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  description:
    'Real-time dashboard showing SSH honeypot attack data including sessions, credentials, commands, and geographic origin.',
  author: {
    '@type': 'Person',
    name: 'Nicolas Padilla',
    url: 'https://cobalto-sec.tech',
  },
}

export default function LivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(liveJsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <LiveDashboard />
      </main>
    </>
  )
}

import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactForm'

export const metadata = genPageMetadata({
  title: 'Servicios',
  description:
    'Servicios de seguridad ofensiva: scan gratuito, auditoría express y auditoría completa. Pentesting profesional con resultados en 48h.',
})

const tiers = [
  {
    name: 'Scan Gratuito',
    price: 'Gratis',
    priceNote: 'Sin compromiso',
    description: 'Escaneo externo de tu dominio con score de seguridad A-F.',
    features: [
      'Escaneo de superficie externa',
      'Score de seguridad A-F',
      'Reporte básico por email',
      'Sin acceso a sistemas internos',
    ],
    cta: 'Escaneá tu dominio',
    ctaHref: '#contacto',
    highlighted: false,
  },
  {
    name: 'Auditoría Express',
    price: 'USD $200',
    priceNote: 'Precio fijo',
    description: 'Scan completo con reporte PDF y call de 30 minutos. Entrega en 48-72h.',
    features: [
      'Todo lo del Scan Gratuito',
      'Escaneo de puertos y servicios',
      'Análisis de vulnerabilidades conocidas',
      'Reporte PDF detallado',
      'Call de 30 min para explicar hallazgos',
      'Entrega en 48-72h',
    ],
    cta: 'Pedí tu auditoría',
    ctaHref: '#contacto',
    highlighted: true,
  },
  {
    name: 'Auditoría Completa',
    price: 'USD $500+',
    priceNote: 'Según alcance',
    description:
      'Auditoría integral: ASM, DNS, credenciales filtradas, reporte ejecutivo y call de 1h.',
    features: [
      'Todo lo de Auditoría Express',
      'Attack Surface Management (ASM)',
      'Análisis DNS y configuración email',
      'Búsqueda de credenciales filtradas',
      'Reporte ejecutivo + técnico',
      'Call de 1h con plan de remediación',
    ],
    cta: 'Contactar para cotización',
    ctaHref: '#contacto',
    highlighted: false,
  },
]

const methodology = [
  {
    step: '01',
    title: 'Reconocimiento',
    description: 'Mapeo de superficie de ataque y enumeración de activos.',
  },
  {
    step: '02',
    title: 'Análisis',
    description: 'Identificación y clasificación de vulnerabilidades por severidad.',
  },
  {
    step: '03',
    title: 'Explotación',
    description: 'Validación de impacto real con pruebas controladas.',
  },
  {
    step: '04',
    title: 'Reporte',
    description: 'Hallazgos priorizados con plan de remediación accionable.',
  },
]

const faqs = [
  {
    question: '¿Qué incluye el scan gratuito?',
    answer:
      'Un escaneo no intrusivo de tu dominio desde el exterior. Evaluamos puertos expuestos, certificados SSL, headers de seguridad y configuraciones visibles públicamente. Recibís un score de A a F con las áreas a mejorar.',
  },
  {
    question: '¿Necesito dar acceso a mis sistemas?',
    answer:
      'Para el Scan Gratuito y la Auditoría Express, no. Solo necesitamos tu dominio. Para la Auditoría Completa, puede requerirse acceso limitado dependiendo del alcance acordado.',
  },
  {
    question: '¿Cuánto tiempo toma recibir el reporte?',
    answer:
      'La Auditoría Express se entrega en 48-72 horas. La Auditoría Completa depende del alcance, pero generalmente entre 5-10 días hábiles. El Scan Gratuito se envía en menos de 24 horas.',
  },
  {
    question: '¿Los precios incluyen impuestos?',
    answer:
      'Los precios son en USD y no incluyen impuestos locales. Para clientes en Argentina, se puede facturar en pesos al tipo de cambio del momento.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicios de Seguridad Ofensiva',
  provider: {
    '@type': 'Organization',
    name: 'Cobalto-Sec',
    url: 'https://cobalto-sec.tech',
  },
  description: 'Pentesting, auditorías de seguridad y consultoría ofensiva profesional.',
  areaServed: 'Global',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planes de auditoría',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Scan Gratuito',
        price: '0',
        priceCurrency: 'USD',
        description: 'Escaneo externo con score de seguridad A-F.',
      },
      {
        '@type': 'Offer',
        name: 'Auditoría Express',
        price: '200',
        priceCurrency: 'USD',
        description: 'Scan completo + reporte PDF + call 30min. Entrega 48-72h.',
      },
      {
        '@type': 'Offer',
        name: 'Auditoría Completa',
        price: '500',
        priceCurrency: 'USD',
        description: 'ASM + DNS/email + credenciales filtradas + reporte ejecutivo + call 1h.',
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Servicios de Seguridad Ofensiva
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Identifico vulnerabilidades en tu infraestructura antes de que un atacante las
            encuentre. Metodología profesional, resultados accionables.
          </p>
        </header>

        {/* Differentiators strip */}
        <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { value: '81K+', label: 'Ataques analizados' },
            { value: '24/7', label: 'Infraestructura propia' },
            { value: '48h', label: 'Resultados entregados' },
            { value: '17%', label: 'Empresas con Grade F' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-gray-900/50"
            >
              <p className="font-mono text-xl font-bold text-cyan-600 sm:text-2xl dark:text-cyan-400">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                  tier.highlighted
                    ? 'border-red-500 bg-white shadow-lg shadow-red-500/10 dark:border-red-500 dark:bg-gray-900 dark:shadow-red-500/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                  <p className="mt-3">
                    <span className="font-mono text-3xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{tier.priceNote}</p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {tier.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  className={`block rounded-lg px-6 py-3 text-center text-base font-semibold transition-all ${
                    tier.highlighted
                      ? 'bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20'
                      : tier.price === 'Gratis'
                        ? 'border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'
                        : 'bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Metodología</h2>
          <div className="grid gap-4 sm:grid-cols-4">
            {methodology.map((phase) => (
              <div
                key={phase.step}
                className="rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
              >
                <p className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
                  {phase.step}
                </p>
                <p className="mt-1 font-semibold">{phase.title}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                  {faq.question}
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto" className="scroll-mt-24">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight">Contacto</h2>
              <p className="mx-auto mt-2 max-w-lg text-gray-600 dark:text-gray-400">
                Contame sobre tu proyecto y te respondo en menos de 24 horas.
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

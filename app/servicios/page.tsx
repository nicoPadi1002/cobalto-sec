import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata = genPageMetadata({
  title: 'Servicios de Ciberseguridad para Empresas',
  description:
    'Pentesting, auditoria de ciberseguridad y monitoreo continuo para PYMEs. Metodologia PTES + OWASP, precios claros y entregables accionables.',
})

const services = [
  {
    title: 'Pentesting para Empresas',
    href: '/servicios/pentesting-para-empresas',
    description:
      'Evaluacion ofensiva que valida explotabilidad real de vulnerabilidades. Reporte ejecutivo + tecnico, plan de remediacion y retest incluido.',
    price: 'Desde USD 490',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Auditoria de Ciberseguridad',
    href: '/servicios/auditoria-ciberseguridad-pymes',
    description:
      'Evaluacion de controles tecnicos y organizativos. Mapa de brechas, matriz de madurez y roadmap 30/60/90 dias para cerrar gaps.',
    price: 'Desde USD 590',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Monitoreo Continuo',
    href: '/precios',
    description:
      'Seguimiento mensual de tu superficie de riesgo. Revisiones periodicas, mini-retest y backlog priorizado para no volver a cero.',
    price: 'USD 390/mes',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <header className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Servicios profesionales
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Seguridad ofensiva para empresas que no quieren esperar al incidente
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          El problema no es falta de herramientas. Es falta de visibilidad accionable. En CobaltoSec
          combinamos metodologia PTES + OWASP + CVSS v4.0 para que tu equipo sepa que corregir
          primero y por que.
        </p>
      </header>

      {/* Problem */}
      <section className="mb-16">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <h2 className="mb-4 text-xl font-bold">
            La situacion que vemos en la mayoria de las PYMEs
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              'Tienen antivirus, firewall y backups, pero no una validacion ofensiva real.',
              'Reciben alertas sueltas de herramientas, pero no una priorizacion ejecutable.',
              'No saben si estan "mas o menos bien", solo si "no hubo incidente todavia".',
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1 shrink-0 text-red-500">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">Nuestros servicios</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
            >
              <div className="mb-4 inline-flex w-fit rounded-lg bg-red-50 p-2.5 text-red-500 dark:bg-red-950/30 dark:text-red-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold group-hover:text-red-500 dark:group-hover:text-red-400">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <p className="mt-4 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                {service.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Methodology teaser */}
      <section className="mb-16 text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Metodologia clara, no marketing</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-600 dark:text-gray-400">
          Usamos PTES para estructurar el engagement, OWASP WSTG para guiar pruebas web y CVSS v4.0
          para priorizar por impacto real. El resultado es un backlog ejecutable, no un PDF para
          archivar.
        </p>
        <Link
          href="/metodologia"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Ver metodologia completa
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* CTA */}
      <section id="contacto" className="scroll-mt-24">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Consulta sobre tu caso</h2>
            <p className="mx-auto mt-2 max-w-lg text-gray-600 dark:text-gray-400">
              Contanos tu contexto y te proponemos alcance, tiempos y entregables concretos.
            </p>
          </div>
          <div className="mx-auto max-w-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

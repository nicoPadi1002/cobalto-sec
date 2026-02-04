import Link from 'next/link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Servicios',
  description:
    'Servicios de seguridad ofensiva: pentesting, auditorías de seguridad, vulnerability assessment y consultoría.',
})

const services = [
  {
    title: 'Penetration Testing',
    description:
      'Simulación de ataques reales contra tu infraestructura para identificar vulnerabilidades antes de que sean explotadas. Cobertura completa de web apps, APIs e infraestructura.',
    scope: [
      'Aplicaciones Web',
      'APIs REST/GraphQL',
      'Infraestructura de Red',
      'Cloud (AWS, Azure, GCP)',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: 'Security Audits',
    description:
      'Revisión exhaustiva de código fuente, configuraciones y arquitectura de seguridad. Identificación de debilidades con recomendaciones priorizadas por riesgo.',
    scope: ['Code Review', 'Configuration Review', 'Architecture Review', 'Compliance Assessment'],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Vulnerability Assessment',
    description:
      'Escaneo sistemático y análisis de vulnerabilidades en tu superficie de ataque. Reportes detallados con clasificación por severidad y plan de remediación.',
    scope: [
      'Escaneo de Infraestructura',
      'Análisis de Superficie de Ataque',
      'Priorización por Riesgo',
      'Plan de Remediación',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
  },
  {
    title: 'Security Consulting',
    description:
      'Asesoramiento estratégico en seguridad para tu organización. Diseño de arquitecturas seguras, definición de políticas y capacitación de equipos.',
    scope: [
      'Arquitectura de Seguridad',
      'Políticas y Procedimientos',
      'Threat Modeling',
      'Capacitación de Equipos',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Servicios</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Seguridad ofensiva profesional. Identifico vulnerabilidades en tu infraestructura antes de
          que un atacante las encuentre.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
          >
            <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-500 dark:bg-red-950/30 dark:text-red-400">
              {service.icon}
            </div>

            <h2 className="text-xl font-bold tracking-tight">{service.title}</h2>

            <p className="mt-3 text-gray-700 dark:text-gray-300">{service.description}</p>

            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                Alcance
              </p>
              <ul className="space-y-1">
                {service.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Metodología</h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { step: '01', title: 'Reconocimiento', description: 'Mapeo de superficie de ataque' },
            { step: '02', title: 'Análisis', description: 'Identificación de vulnerabilidades' },
            { step: '03', title: 'Explotación', description: 'Validación de impacto real' },
            { step: '04', title: 'Reporte', description: 'Hallazgos y remediación' },
          ].map((phase) => (
            <div
              key={phase.step}
              className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
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

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-2xl font-bold tracking-tight">Protegé tu infraestructura</h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-600 dark:text-gray-400">
          Contactame para discutir las necesidades de seguridad de tu organización y cómo puedo
          ayudarte a fortalecer tus defensas.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:nicolas.cobaltosec@gmail.com"
            className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
          >
            Contactar
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            Ver Proyectos
          </Link>
        </div>
      </section>
    </main>
  )
}

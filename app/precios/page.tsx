import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'Precios de Pentesting y Auditoria para PYMEs | Planes claros en USD',
  description:
    'Consulta precios de servicios de ciberseguridad para pymes: Quick Exposure, Pentest PyME y Continuo. Alcance, entregables, SLA y FAQ de contratacion.',
})

const tiers = [
  {
    name: 'Quick Exposure',
    price: 'USD 490',
    priceNote: 'Precio fijo',
    description: 'Diagnostico inicial rapido para saber si hay exposiciones obvias y urgentes.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    features: [
      'Evaluacion de 1 dominio o superficie externa',
      'Hallazgos prioritarios con evidencia breve',
      'Acciones inmediatas sugeridas (72h y 7d)',
      'Resumen ejecutivo de riesgo',
      'Call de devolucion de 30 minutos',
      'Entrega en 72h habiles',
    ],
    notIncluded: ['Retest formal', 'Cobertura multi-dominio', 'Implementacion de cambios'],
    sla: '72h habiles',
    highlighted: false,
    cta: 'Elegir Quick Exposure',
  },
  {
    name: 'Pentest PyME',
    price: 'USD 1,490',
    priceNote: 'Precio fijo',
    description: 'Evaluacion profunda con metodologia PTES + OWASP y cierre con retest.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      '1 dominio principal + subdominios criticos',
      'Metodologia PTES + OWASP WSTG',
      'Validacion manual de hallazgos criticos',
      'Reporte ejecutivo + tecnico detallado',
      'Matriz CVSS v4.0 + contexto de negocio',
      'Plan de remediacion por fases',
      '1 retest incluido',
      'Soporte de aclaraciones 15 dias',
    ],
    notIncluded: ['Alcance ilimitado fuera de acuerdo', 'Ejecucion de remediacion en produccion'],
    sla: '10 dias habiles',
    highlighted: true,
    cta: 'Elegir Pentest PyME',
  },
  {
    name: 'Continuo',
    price: 'USD 390',
    priceNote: 'por mes',
    description: 'Seguimiento mensual para no volver al punto cero cada trimestre.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: [
      'Monitoreo externo continuo de superficie',
      'Revisiones periodicas de exposiciones',
      'Mini-retest mensual sobre correcciones',
      'Reporte mensual ejecutivo con tendencia',
      'Backlog priorizado por criticidad',
      'Call mensual de seguimiento',
    ],
    notIncluded: ['Proyectos especiales sin acuerdo adicional'],
    sla: 'Entrega mensual fija',
    highlighted: false,
    cta: 'Elegir Continuo',
  },
]

const comparison = [
  { feature: 'Evaluacion inicial de exposicion', quick: 'Si', pyme: 'Si', continuo: 'Si' },
  {
    feature: 'Validacion manual de hallazgos criticos',
    quick: 'Parcial',
    pyme: 'Si',
    continuo: 'Si (en ciclo)',
  },
  { feature: 'Reporte ejecutivo', quick: 'Si', pyme: 'Si', continuo: 'Si' },
  {
    feature: 'Reporte tecnico detallado',
    quick: 'Basico',
    pyme: 'Si',
    continuo: 'Resumen mensual',
  },
  { feature: 'Plan de remediacion', quick: 'Basico', pyme: 'Si', continuo: 'Si (seguimiento)' },
  { feature: 'Retest', quick: 'No', pyme: 'Si (1 ciclo)', continuo: 'Si (mensual)' },
  {
    feature: 'Soporte de aclaraciones',
    quick: '5 dias',
    pyme: '15 dias',
    continuo: 'Durante vigencia',
  },
  { feature: 'Cadencia recurrente', quick: 'No', pyme: 'No', continuo: 'Si' },
]

const faqs = [
  {
    q: 'Los precios incluyen IVA?',
    a: 'No. Los valores publicados son netos y se adiciona IVA cuando corresponde por condicion fiscal y pais de contratacion.',
  },
  {
    q: 'Que formas de pago aceptan?',
    a: 'Transferencia bancaria y medios acordados segun pais/facturacion. Se detalla en propuesta formal antes de iniciar.',
  },
  {
    q: 'Que pasa si necesito mas alcance?',
    a: 'Se cotiza extension de alcance de forma transparente (por activos, complejidad y ventana). No se avanza sin aprobacion previa.',
  },
  {
    q: 'Hay garantia?',
    a: 'En servicios con retest incluido, garantizamos validacion de hallazgos corregidos dentro del alcance acordado. No existe garantia de "riesgo cero" porque ningun proveedor serio puede prometer eso.',
  },
  {
    q: 'Puedo pasar de un plan a otro?',
    a: 'Si. Muchos clientes inician con Quick Exposure y luego escalan a Pentest PyME o Continuo segun prioridades y resultados.',
  },
]

export default function PreciosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Precios
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Precios claros para seguridad real
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Elegi el plan segun tu necesidad. Sin propuestas ambiguas, sin costos ocultos.
        </p>
      </header>

      {/* Pricing Cards */}
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
                  Recomendado
                </span>
              )}

              <div className="mb-6">
                <div
                  className={`mb-4 inline-flex rounded-lg p-2.5 ${
                    tier.highlighted
                      ? 'bg-red-50 text-red-500 dark:bg-red-950/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={tier.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p className="mt-3">
                  <span className="font-mono text-3xl font-bold tracking-tight">{tier.price}</span>
                </p>
                <p className="mt-1 text-sm text-gray-500">{tier.priceNote}</p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{tier.description}</p>
              </div>

              <ul className="mb-6 flex-1 space-y-2.5">
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
                {tier.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400 dark:text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-4 text-center text-xs text-gray-500">SLA: {tier.sla}</p>

              <a
                href="#contacto"
                className={`block rounded-lg px-6 py-3 text-center text-base font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20'
                    : 'bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Comparativa de funcionalidades</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50">
                <th className="px-4 py-3 text-left text-sm font-semibold">Funcionalidad</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Quick Exposure</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-red-500 dark:text-red-400">
                  Pentest PyME
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Continuo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {comparison.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400">
                    {row.quick}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-medium text-gray-900 dark:text-gray-100">
                    {row.pyme}
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400">
                    {row.continuo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Decision */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Como elegir plan en 60 segundos</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              plan: 'Quick Exposure',
              signal: 'Necesitas saber rapido si estas expuesto.',
              href: '#contacto',
            },
            {
              plan: 'Pentest PyME',
              signal: 'Necesitas evidencia, priorizacion y cierre con retest.',
              href: '#contacto',
            },
            {
              plan: 'Continuo',
              signal: 'Ya hiciste una evaluacion y no queres volver a cero.',
              href: '#contacto',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <p className="mb-2 font-mono text-sm font-bold text-red-500 dark:text-red-400">
                {item.plan}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.signal}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Si tenes dudas, hacemos una llamada corta y te recomendamos el plan segun tu contexto.
        </p>
      </section>

      {/* Typical Scenarios */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Escenarios tipicos de contratacion
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Nunca hizo evaluacion externa',
              desc: 'Arranca con Quick Exposure para ubicar nivel de exposicion y definir prioridad real.',
              plan: 'Quick Exposure',
            },
            {
              title: 'Equipo tecnico + presion regulatoria',
              desc: 'Va directo a Pentest PyME para tener evidencia formal y retest.',
              plan: 'Pentest PyME',
            },
            {
              title: 'Ya hizo primer cierre',
              desc: 'Migra a Continuo para seguimiento mensual y tendencia.',
              plan: 'Continuo',
            },
          ].map((scenario, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-semibold">{scenario.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{scenario.desc}</p>
              <p className="mt-3 text-xs font-semibold text-red-500 dark:text-red-400">
                Recomendado: {scenario.plan}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder pricing */}
      <section className="mb-16">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/50 dark:bg-red-950/20">
          <p className="text-lg font-bold text-red-600 dark:text-red-400">
            Precio fundador disponible para primeros 5 clientes.
          </p>
          <p className="mt-2 text-sm text-red-600/80 dark:text-red-400/80">
            La condicion se confirma al momento de la llamada de evaluacion y aplica segun
            disponibilidad de cupos activos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Preguntas frecuentes sobre precios
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                {faq.q}
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="scroll-mt-24">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Elegi tu plan</h2>
            <p className="mx-auto mt-2 max-w-lg text-gray-600 dark:text-gray-400">
              Reserva una evaluacion breve y definimos el plan correcto para tu empresa sin vueltas.
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

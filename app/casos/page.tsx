import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'Casos de Estudio | Pentesting y Auditoria en Accion',
  description:
    'Escenarios simulados basados en hallazgos reales: fintech con API expuesta y ecommerce con credenciales filtradas. Resultados medidos en dias, no meses.',
})

const cases = [
  {
    tag: 'Fintech',
    title: 'API expuesta y plan de remediacion en 9 dias',
    situation:
      'Una fintech regional en etapa de crecimiento estaba por abrir integraciones nuevas con partners de cobros y conciliacion. El equipo de tecnologia tenia velocidad de entrega alta, pero poco tiempo para revisar superficie externa con profundidad.',
    concerns: [
      'Riesgo de interrupcion operativa en periodos de alto volumen.',
      'Riesgo reputacional ante fuga de datos o abuso de API.',
      'Riesgo contractual con partners que pedian evidencia de seguridad.',
    ],
    findings: {
      total: 8,
      critical: 2,
      high: 3,
      medium: 3,
      hours: 26,
      days: 4,
      detail:
        'Los hallazgos criticos estaban vinculados a exposicion de endpoints internos de API. Un atacante con conocimiento moderado podia encadenar dos debilidades y acceder a datos transaccionales no previstos por el diseno original de permisos.',
    },
    actions: [
      {
        phase: 'Contencion inmediata (72h)',
        items: [
          'Restriccion temporal de endpoints expuestos.',
          'Ajuste de reglas de acceso por rol.',
          'Endurecimiento de politicas de autenticacion.',
        ],
      },
      {
        phase: 'Remediacion estructural (7 dias)',
        items: [
          'Refactor de validaciones de autorizacion.',
          'Reconfiguracion de manejo de errores para evitar leakage.',
          'Ajustes de logging para trazabilidad de abuso.',
        ],
      },
    ],
    metrics: [
      { value: '8', label: 'vulnerabilidades en 26h' },
      { value: '7/8', label: 'cerradas en 7 dias' },
      { value: '9', label: 'dias hasta cierre total' },
      { value: '0', label: 'incidentes operativos' },
    ],
    timeline: [
      'Dia 0: kickoff y alcance.',
      'Dias 1-4: evaluacion tecnica (26h).',
      'Dia 5: entrega ejecutiva + plan de remediacion.',
      'Dias 6-8: correcciones prioritarias.',
      'Dia 9: retest y cierre final.',
    ],
    learning:
      'Una fintech con ritmo alto necesita dos cosas en paralelo: validacion ofensiva periodica en activos de revenue y flujo de remediacion con ownership claro. Sin eso, la deuda de seguridad crece en silencio.',
  },
  {
    tag: 'Ecommerce',
    title: 'Credenciales filtradas y cierre en 6 dias',
    situation:
      'Un ecommerce mediano venia creciendo bien en volumen, pero con una infraestructura montada en etapas. Tenia picos de trafico estacionales, varios proveedores externos y un equipo de IT con foco operativo.',
    concerns: [
      'Aparicion de credenciales corporativas en repositorios y filtraciones publicas.',
      'Alertas aisladas de intentos de acceso no autorizado.',
      'Preocupacion de gerencia por continuidad en fechas de venta fuerte.',
    ],
    findings: {
      total: 11,
      critical: 1,
      high: 4,
      medium: 6,
      hours: 18,
      days: 3,
      detail:
        'El riesgo principal era que un atacante con credenciales filtradas podia escalar privilegios y afectar integridad de catalogo/precios y disponibilidad parcial de operaciones de venta.',
    },
    actions: [
      {
        phase: 'Acciones inmediatas (24h)',
        items: [
          'Rotacion masiva de credenciales sensibles.',
          'Revocacion de sesiones y tokens activos.',
          'Restriccion temporal de accesos administrativos.',
        ],
      },
      {
        phase: 'Correcciones prioritarias (48h-96h)',
        items: [
          'Endurecimiento de politicas de autenticacion.',
          'Reconfiguracion de permisos por principio de minimo privilegio.',
          'Ajustes de segmentacion en componentes criticos.',
        ],
      },
    ],
    metrics: [
      { value: '11', label: 'vulnerabilidades en 18h' },
      { value: '9/11', label: 'cerradas en 4 dias' },
      { value: '6', label: 'dias hasta cierre total' },
      { value: '3', label: 'practicas institucionalizadas' },
    ],
    timeline: [
      'Dia 0: contacto, alcance y plan de accion.',
      'Dias 1-3: evaluacion tecnica (18h).',
      'Dia 3: devolucion ejecutiva y priorizacion.',
      'Dias 4-5: remediacion acelerada.',
      'Dia 6: retest final y cierre.',
    ],
    learning:
      'En ecommerce, seguridad no compite contra ventas. La habilita. Cuando el riesgo de credenciales filtradas se atiende con proceso claro, baja la probabilidad de interrupcion en fechas clave y mejora la confianza interna para escalar operaciones.',
  },
]

export default function CasosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Casos de estudio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Resultados medidos en dias, no en meses
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Escenarios simulados basados en patrones y hallazgos reales observados en evaluaciones de
          seguridad. No se expone informacion de clientes reales.
        </p>
      </header>

      {/* Disclaimer */}
      <div className="mb-12 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-900/50 dark:bg-amber-950/20">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <strong>Aclaracion importante:</strong> estos casos estan redactados como escenarios
          simulados basados en patrones y hallazgos reales. Se preserva totalmente la
          confidencialidad de clientes y activos reales.
        </p>
      </div>

      {/* Cases */}
      <div className="space-y-16">
        {cases.map((caso, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-gray-200 p-6 sm:p-8 dark:border-gray-800"
          >
            {/* Case header */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-950/30 dark:text-red-400">
                {caso.tag}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{caso.title}</h2>
            </div>

            {/* Metrics strip */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {caso.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <p className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Situation */}
            <section className="mb-6">
              <h3 className="mb-2 text-lg font-bold">Situacion</h3>
              <p className="text-gray-600 dark:text-gray-400">{caso.situation}</p>
              <ul className="mt-3 space-y-1.5">
                {caso.concerns.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Risk */}
            <section className="mb-6">
              <h3 className="mb-2 text-lg font-bold">Riesgo detectado</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                En <strong>{caso.findings.hours} horas tecnicas</strong> distribuidas en{' '}
                {caso.findings.days} dias habiles se detectaron{' '}
                <strong className="text-red-500 dark:text-red-400">
                  {caso.findings.total} vulnerabilidades
                </strong>
                : {caso.findings.critical} criticas, {caso.findings.high} altas y{' '}
                {caso.findings.medium} medias.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {caso.findings.detail}
              </p>
            </section>

            {/* Action */}
            <section className="mb-6">
              <h3 className="mb-3 text-lg font-bold">Accion</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {caso.actions.map((action, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <p className="mb-2 text-sm font-semibold text-red-500 dark:text-red-400">
                      {action.phase}
                    </p>
                    <ul className="space-y-1.5">
                      {action.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-6">
              <h3 className="mb-3 text-lg font-bold">Linea de tiempo</h3>
              <div className="space-y-2">
                {caso.timeline.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 font-mono text-sm font-bold text-red-500 dark:text-red-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning */}
            <section className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
              <h3 className="mb-2 text-sm font-bold tracking-wider text-gray-500 uppercase">
                Aprendizaje de negocio
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{caso.learning}</p>
            </section>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Queres evaluar un escenario similar?
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
          Te mostramos alcance, tiempos y plan de accion sin sobrecargar a tu equipo.
        </p>
        <Link
          href="/servicios#contacto"
          className="inline-block rounded-lg bg-red-500 px-8 py-3 font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
        >
          Reserva tu evaluacion
        </Link>
      </section>
    </main>
  )
}

import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'Metodologia de Pentesting para Empresas | PTES, OWASP WSTG y CVSS v4.0',
  description:
    'Conoce la metodologia de pentesting para empresas de CobaltoSec: PTES + OWASP WSTG + CVSS v4.0, fases claras, limites transparentes y foco real en remediacion.',
})

const frameworks = [
  {
    name: 'PTES',
    subtitle: 'Estructura del engagement',
    description:
      'Columna vertebral del proceso. Responde: que vamos a probar y con que limites, como vamos a intentar comprometer el entorno, que evidencia vamos a juntar y como traducimos eso en acciones concretas.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    name: 'OWASP WSTG',
    subtitle: 'Guia para pruebas web',
    description:
      'Familias de pruebas con objetivos claros: configuracion e infraestructura, autenticacion y control de acceso, sesion y credenciales, validacion de input y logica, exposicion de datos y errores.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    name: 'CVSS v4.0',
    subtitle: 'Priorizacion de riesgo',
    description:
      'Scoring tecnico combinado con contexto de negocio: activo afectado (core vs secundario), exposicion real, impacto operativo esperado y facilidad de remediacion. Resultado: backlog priorizado para ejecutar.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

const phases = [
  {
    step: '01',
    title: 'Reconocimiento',
    objective: 'Entender superficie de ataque y contexto antes de tocar nada sensible.',
    items: [
      'Confirmamos alcance tecnico y legal (que SI y que NO se testea).',
      'Identificamos activos visibles en internet relacionados al objetivo.',
      'Mapeamos puntos de entrada probables (web, APIs, paneles, servicios).',
      'Definimos ventanas, reglas de seguridad y canal de escalamiento.',
    ],
  },
  {
    step: '02',
    title: 'Escaneo',
    objective: 'Detectar hipotesis de riesgo en forma amplia y eficiente.',
    items: [
      'Enumeracion de servicios y configuraciones expuestas.',
      'Deteccion de vulnerabilidades conocidas y misconfigurations.',
      'Analisis de higiene basica (headers, TLS, componentes, errores).',
      'Importante: escaneo no es conclusion. Es input para validacion manual.',
    ],
  },
  {
    step: '03',
    title: 'Explotacion',
    objective: 'Comprobar si un hallazgo es explotable en condiciones reales controladas.',
    items: [
      'Validamos falsos positivos.',
      'Intentamos explotacion controlada donde aplica.',
      'Medimos impacto real posible y alcance del vector.',
      'Documentamos evidencia reproducible.',
    ],
  },
  {
    step: '04',
    title: 'Post-explotacion',
    objective: 'Entender hasta donde podria avanzar un atacante desde un punto comprometido.',
    items: [
      'Evaluar movimiento lateral posible.',
      'Revisar escalamiento de privilegios.',
      'Medir exposicion de datos o activos criticos.',
      'Simular impacto operativo con controles de seguridad.',
    ],
  },
  {
    step: '05',
    title: 'Reporte',
    objective: 'Transformar evidencia tecnica en plan ejecutivo y tecnico accionable.',
    items: [
      'Resumen ejecutivo en lenguaje negocio.',
      'Hallazgos priorizados con evidencia y reproduccion.',
      'Severidad CVSS v4.0 + contexto de impacto.',
      'Plan de remediacion por fases + limitaciones del test.',
    ],
  },
  {
    step: '06',
    title: 'Remediacion',
    objective: 'Que el cliente pueda cerrar riesgo, no solo leer un documento.',
    items: [
      'Aclaramos dudas del equipo tecnico.',
      'Priorizamos acciones de alto impacto y baja friccion.',
      'Sugerimos orden de ejecucion por dependencia.',
      'Validamos criterios de cierre por cada finding.',
    ],
  },
  {
    step: '07',
    title: 'Retest',
    objective: 'Verificar que la correccion funciona y el riesgo realmente bajo.',
    items: [
      'Volvemos a probar hallazgos corregidos.',
      'Confirmamos cierre o reabrimos con evidencia.',
      'Emitimos estado final por finding (passed/pending/reopened).',
      'Dejamos traza para auditoria y seguimiento futuro.',
    ],
  },
]

const scanVsPentest = [
  {
    tema: 'Objetivo',
    scan: 'Detectar senales de riesgo rapido',
    pentest: 'Validar explotabilidad e impacto real',
  },
  { tema: 'Cobertura', scan: 'Amplia y superficial', pentest: 'Selectiva y profunda segun riesgo' },
  { tema: 'Falsos positivos', scan: 'Frecuentes', pentest: 'Reducidos por validacion manual' },
  { tema: 'Contexto de negocio', scan: 'Limitado', pentest: 'Integrado al analisis' },
  {
    tema: 'Evidencia',
    scan: 'Output de herramienta',
    pentest: 'Evidencia reproducible + escenario',
  },
  { tema: 'Priorizacion', scan: 'Severidad generica', pentest: 'Riesgo tecnico + negocio' },
  {
    tema: 'Resultado',
    scan: 'Lista de potenciales issues',
    pentest: 'Plan de accion para remediar y retestear',
  },
]

export default function MetodologiaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Metodologia
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Metodologia de Pentesting para Empresas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Como trabajamos de punta a punta: PTES + OWASP WSTG + CVSS v4.0 para que el pentesting sea
          claro en alcance, riguroso en validacion y util en remediacion.
        </p>
      </header>

      {/* Why methodology matters */}
      <section className="mb-16">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <h2 className="mb-4 text-xl font-bold">
            Por que una metodologia importa mas que la herramienta
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Dos equipos pueden correr herramientas parecidas y llegar a resultados completamente
            distintos. La diferencia no esta en "quien tiene mas logos" — esta en:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Como define alcance y objetivos.',
              'Como valida hallazgos manualmente.',
              'Como prioriza impacto de negocio.',
              'Como acompana remediacion y retest.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-sm font-bold text-red-500 dark:text-red-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Riesgo 1:</strong> Falso sentido de seguridad — "no salio nada critico, asi
                que estamos bien".
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Riesgo 2:</strong> Fatiga operativa — "tenemos 70 hallazgos y no sabemos que
                resolver primero".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Frameworks */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
          Tres marcos, un proceso integrado
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="rounded-2xl border border-gray-200 p-6 transition-all hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:hover:border-red-500/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-red-50 p-2.5 text-red-500 dark:bg-red-950/30 dark:text-red-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={fw.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">{fw.name}</h3>
              <p className="mt-1 text-sm font-medium text-red-500 dark:text-red-400">
                {fw.subtitle}
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{fw.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Phases */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          Fases del engagement: de reconocimiento a retest
        </h2>
        <div className="space-y-4">
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="rounded-xl border border-gray-200 p-6 transition-all hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:hover:border-red-500/30"
            >
              <div className="flex items-start gap-4">
                <p className="font-mono text-2xl font-bold text-red-500 dark:text-red-400">
                  {phase.step}
                </p>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{phase.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 italic">Objetivo: {phase.objective}</p>
                  <ul className="mt-3 space-y-1.5">
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Herramientas y capacidades</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          No publicamos el stack exacto por razones de seguridad operativa. Si explicamos el tipo de
          capacidades que usamos:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Asset discovery y enumeracion controlada.',
            'Vulnerability assessment automatizado.',
            'Validacion ofensiva manual.',
            'Analisis de autenticacion, sesion y autorizacion.',
            'Correlacion de evidencia y scoring.',
            'Reporting estructurado y trazable.',
          ].map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            >
              <span className="mt-0.5 font-mono text-sm font-bold text-red-500 dark:text-red-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cap}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>La combinacion clave:</strong> automatizacion para velocidad y cobertura,
            criterio humano para validar impacto real, estandares para sostener calidad y
            repetibilidad.
          </p>
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Que NO hacemos (limitaciones transparentes)
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Ser claros con limites es parte de hacer trabajo serio:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'No interrumpimos operacion critica sin ventana aprobada.',
            'No ejecutamos acciones destructivas en produccion.',
            'No hacemos ingenieria social sin autorizacion formal.',
            'No prometemos cobertura total en una sola evaluacion.',
            'No hacemos auditoria de checkbox para simular cumplimiento.',
            'No vendemos garantia de invulnerabilidad.',
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
          <p className="text-sm text-gray-500">
            Un pentest tiene fotografia temporal: evalua el estado durante una ventana concreta.
            Cambios posteriores pueden abrir nuevos riesgos. Por eso recomendamos ciclo continuo.
          </p>
        </div>
      </section>

      {/* Scan vs Pentest Table */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Scan automatizado vs pentesting real
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50">
                <th className="px-4 py-3 text-left text-sm font-semibold">Tema</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Scan automatizado</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-red-500 dark:text-red-400">
                  Pentesting real
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {scanVsPentest.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {row.tema}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.scan}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    {row.pentest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Entregables que recibe una empresa
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: 'Resumen ejecutivo',
              desc: 'Riesgos principales, impacto potencial y prioridades de negocio.',
            },
            {
              title: 'Reporte tecnico',
              desc: 'Detalle por vulnerabilidad con reproduccion y recomendaciones.',
            },
            {
              title: 'Matriz de priorizacion',
              desc: 'Severidad + explotabilidad + impacto operativo.',
            },
            { title: 'Plan de remediacion', desc: 'Que corregir en 72h, 7 dias y 30 dias.' },
            {
              title: 'Estado de retest',
              desc: 'Evidencia de cierre para cada hallazgo priorizado.',
            },
          ].map((d, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold">{d.title}</p>
                <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Sirve para tres perfiles: direccion (decidir prioridad y presupuesto), equipo tecnico
          (ejecutar sin ambiguedad) y compliance (demostrar trazabilidad y mejora).
        </p>
      </section>

      {/* When to pentest */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Cuando conviene pentesting para empresas
        </h2>
        <div className="space-y-2">
          {[
            'Antes de lanzar una app o API expuesta.',
            'Despues de cambios importantes en infraestructura.',
            'Cuando hay exigencia de clientes corporativos o regulatoria.',
            'Si hubo incidente propio o en competidor directo.',
            'Cuando se necesita respaldar decisiones ante directorio.',
          ].map((scenario, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 font-mono text-sm font-bold text-red-500 dark:text-red-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-gray-600 dark:text-gray-400">{scenario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality criteria */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Criterio de calidad que aplicamos
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Alcance y reglas claras antes de comenzar.',
            'Evidencia suficiente para reproducir hallazgos.',
            'Priorizacion entendible por negocio y por tecnico.',
            'Plan de remediacion ejecutable sin ambiguedad.',
            'Retest documentado para confirmar cierre.',
          ].map((criterion, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
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
              <span className="text-gray-600 dark:text-gray-400">{criterion}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Si falta cualquiera de estas piezas, el trabajo queda incompleto.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Consulta sobre tu caso</h2>
        <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
          Si queres evaluar tu escenario — alcance, criticidad y prioridad — escribinos y armamos
          una propuesta concreta, sin humo y con limites transparentes desde el inicio.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/servicios/pentesting-para-empresas"
            className="inline-block rounded-lg bg-red-500 px-8 py-3 font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
          >
            Ver servicio de pentesting
          </Link>
          <Link
            href="/servicios#contacto"
            className="inline-block rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            Contactar
          </Link>
        </div>
      </section>
    </main>
  )
}

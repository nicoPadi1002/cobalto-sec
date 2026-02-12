import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'Sobre CobaltoSec | Seguridad ofensiva para pymes LATAM',
  description:
    'Conoce a Nicolas y la mision de CobaltoSec: seguridad ofensiva accesible para pymes LATAM, con datos reales de HoneyAI, automatizacion y acompanamiento cercano.',
})

const stats = [
  { value: '526', label: 'Dominios analizados' },
  { value: '955', label: 'Auditorias ejecutadas' },
  { value: '47+', label: 'Dias monitoreo 24/7' },
  { value: '808K+', label: 'Entradas telemetria' },
]

const differentiators = [
  {
    title: 'Datos reales de HoneyAI',
    description:
      'Operamos infraestructura propia de observacion que captura patrones reales de ataque 24/7. Eso nos permite entender vectores activos hoy, traducir tendencias globales al contexto local pyme y priorizar mejor segun exposicion real.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: 'Automatizacion con criterio',
    description:
      'Usamos automatizacion para ganar velocidad y cobertura, pero no para reemplazar analisis. Descubrimiento automatizado, validacion manual de hallazgos relevantes, priorizacion por impacto de negocio.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Cercania operativa',
    description:
      'Ser founder-led no es slogan. Es operacion: respuesta rapida, alcances claros, conversacion directa con quien ejecuta y ajuste agil segun la realidad de tu equipo.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]

export default function SobrePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Sobre nosotros
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Sobre CobaltoSec: por que existe y como trabajamos
        </h1>
      </header>

      {/* Mission */}
      <section className="mb-16">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            CobaltoSec existe por una razon simple: la mayoria de las pymes de LATAM necesita
            seguridad real, pero el mercado muchas veces ofrece dos extremos — consultoria
            enterprise cara y lenta, o herramientas automaticas sin acompanamiento ni criterio.
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Nuestra propuesta esta en el medio correcto: rigor tecnico, velocidad operativa,
            cercania founder-led y precios accesibles.
          </p>
        </div>
      </section>

      {/* Nicolas */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Quien es Nicolas</h2>
        <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            Nicolas es el fundador y la cara tecnica de CobaltoSec. Su background incluye
            construccion de plataformas propias de evaluacion y seguimiento de riesgo, trabajo
            ofensivo aplicado a entornos reales de pymes, enfoque practico (menos teoria abstracta,
            mas evidencia accionable) y filosofia build in public.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Disena el metodo', desc: 'Hablas con quien define la estrategia.' },
              { label: 'Ejecuta', desc: 'Hablas con quien hace el trabajo tecnico.' },
              { label: 'Se hace responsable', desc: 'Hablas con quien responde por el resultado.' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <p className="font-mono text-sm font-bold text-red-500 dark:text-red-400">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-1 font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Por que existe CobaltoSec</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Las pymes suelen detectar tarde que estan expuestas, y cuando lo descubren ya estan en
          modo incidente. Nuestra mision es hacer seguridad ofensiva accesible para pymes LATAM:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Encontrar riesgo explotable antes del incidente.',
            'Priorizar lo que realmente importa.',
            'Acompanar remediacion hasta cierre validado.',
            'Dar trazabilidad para direccion, clientes y auditorias.',
          ].map((text, i) => (
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
              <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
          Diferenciador real: datos + automatizacion + cercania
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-6 transition-all hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:hover:border-red-500/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-red-50 p-2.5 text-red-500 dark:bg-red-950/30 dark:text-red-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">Numeros que importan</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Al 12 de febrero de 2026, nuestro trabajo acumulado. Estos numeros no son vanity metrics —
          sirven para mejorar criterio y priorizacion en cada engagement.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center dark:border-gray-800 dark:bg-gray-900/50"
            >
              <p className="font-mono text-2xl font-bold text-red-500 sm:text-3xl dark:text-red-400">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we are / aren't */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-4 text-lg font-bold text-green-600 dark:text-green-400">
              Lo que somos
            </h3>
            <ul className="space-y-2">
              {[
                'Seguridad ofensiva aplicada a pymes.',
                'Equipo chico con ejecucion tecnica real.',
                'Proceso claro, limites transparentes y foco en cierre.',
              ].map((item, i) => (
                <li
                  key={i}
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
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-500">Lo que no somos</h3>
            <ul className="space-y-2">
              {[
                'Una consultora de 50 personas.',
                'Una fabrica de compliance por checkbox.',
                'Un proveedor que promete "100% seguro".',
              ].map((item, i) => (
                <li
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Como trabajamos con cada cliente</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Definimos alcance y objetivos sin ambiguedad.',
            'Ejecutamos con metodologia clara.',
            'Entregamos evidencia y plan accionable.',
            'Validamos remediacion con retest cuando corresponde.',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-gray-600 dark:text-gray-400">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Si no podemos aportar valor real en tu caso, lo decimos.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Consulta sobre tu caso</h2>
        <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
          Si queres un partner tecnico que trabaje con datos reales, metodologia clara y foco en
          resultados concretos.
        </p>
        <Link
          href="/servicios#contacto"
          className="inline-block rounded-lg bg-red-500 px-8 py-3 font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
        >
          Hablemos
        </Link>
      </section>
    </main>
  )
}

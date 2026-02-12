import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title: 'FAQ de Pentesting para Empresas | Precios, Alcance y Contratacion',
  description:
    'Resuelve las preguntas mas frecuentes sobre pentesting en CobaltoSec: metodologia, entregables, precios por tier, seguridad operativa, NDA, retest y continuidad.',
})

const faqSections = [
  {
    title: 'Sobre el Servicio',
    number: '01',
    questions: [
      {
        q: 'Que es un pentesting y para que sirve?',
        a: 'Un pentesting es una evaluacion controlada que simula como un atacante real podria aprovechar debilidades en tus sistemas. No se limita a listar alertas: valida cuales riesgos pueden afectar operacion, datos o reputacion. Sirve para priorizar inversiones y corregir primero lo que mas impacto de negocio puede generar. El resultado es una hoja de ruta concreta, no un informe para archivar.',
      },
      {
        q: 'Cual es la diferencia entre scan automatizado, vulnerability assessment y pentesting?',
        a: 'El scan automatizado detecta senales rapidas, pero suele incluir ruido y falsos positivos. El vulnerability assessment ordena esas senales, agrega contexto y prioriza riesgo potencial. El pentesting va un paso mas alla: valida explotabilidad real y demuestra impacto posible en tu entorno. Por eso se usa para tomar decisiones ejecutivas, no solo tecnicas.',
      },
      {
        q: 'Que metodologia usan (PTES, OWASP, CVSS)?',
        a: 'Usamos PTES para ordenar el servicio de punta a punta y asegurar un proceso consistente. Aplicamos OWASP en pruebas web y API para cubrir vectores de riesgo habituales de forma estructurada. Priorizamos hallazgos con CVSS y luego los traducimos a impacto de negocio para definir urgencia real. Esto permite que direccion y equipo tecnico trabajen sobre un mismo criterio de prioridad.',
      },
      {
        q: 'Que entregables recibo exactamente?',
        a: 'Recibis un resumen ejecutivo para tomar decisiones sin lenguaje tecnico innecesario. Tambien entregamos reporte tecnico con evidencia, recomendaciones y prioridad por hallazgo. Incluimos plan de remediacion por fases (72h, 7 dias, 30 dias) para ordenar ejecucion. Cuando aplica, se suma retest con estado final de cierre por vulnerabilidad.',
      },
      {
        q: 'Cuanto tarda y que necesitan de mi parte?',
        a: 'Los tiempos varian por alcance: desde 72 horas habiles en evaluaciones iniciales hasta 10 dias habiles en pentest completo. De tu lado necesitamos alcance, restricciones operativas y un contacto para escalamiento. No hace falta frenar la operacion ni dedicar un equipo full-time al proceso.',
      },
    ],
  },
  {
    title: 'Pricing y Contratacion',
    number: '02',
    questions: [
      {
        q: 'Cuanto cuesta? (3 tiers)',
        a: 'Manejamos tres tiers claros para evitar propuestas ambiguas. Tier 1: Quick Exposure, USD 490 + IVA, ideal para primera foto de riesgo. Tier 2: Pentest PyME, USD 1,490 + IVA, con mayor profundidad y cobertura acordada. Tier 3: Continuo, USD 390/mes + IVA, para seguimiento mensual y mejora sostenida.',
      },
      {
        q: 'Que incluye el precio fundador?',
        a: 'Incluye evaluacion externa de 1 dominio principal con alcance definido por escrito. Recibis reporte ejecutivo, reporte tecnico y llamada de devolucion con plan de accion priorizado. Tambien incluye 1 retest dentro de la ventana acordada para validar correcciones. Es un formato de entrada pensado para bajar friccion y acelerar decisiones.',
      },
      {
        q: 'Como es la forma de pago?',
        a: 'La contratacion se formaliza con propuesta y alcance aprobados antes de iniciar. Aceptamos transferencia bancaria y medios compatibles con el pais de facturacion. Las condiciones de pago quedan detalladas en la propuesta comercial, sin costos ocultos. No se ejecutan extensiones de trabajo sin aprobacion previa.',
      },
      {
        q: 'Que pasa si necesito mas alcance despues?',
        a: 'Si aparece nuevo alcance, se cotiza como extension con impacto en tiempo y costo claramente definido. La ampliacion puede ser por activos adicionales, nuevas aplicaciones o mayor profundidad de pruebas. Siempre se valida contigo antes de avanzar para mantener control de presupuesto.',
      },
    ],
  },
  {
    title: 'Seguridad y Confianza',
    number: '03',
    questions: [
      {
        q: 'Es seguro darles acceso a mi infraestructura?',
        a: 'Trabajamos con principio de minimo acceso y alcance acotado por escrito. En muchos casos el servicio inicial puede ejecutarse de forma externa, sin acceso interno sensible. Definimos ventanas, reglas de prueba y canal de escalamiento para reducir riesgo operativo. No realizamos acciones destructivas ni cambios en produccion sin autorizacion explicita.',
      },
      {
        q: 'Que pasa si encuentran algo critico durante el test?',
        a: 'Si detectamos un riesgo critico, activamos aviso inmediato al contacto definido en kickoff. Priorizamos contencion temprana para bajar exposicion mientras completamos el analisis. Luego documentamos evidencia, impacto y plan de correccion con prioridad maxima. No esperamos al informe final para comunicar riesgos urgentes.',
      },
      {
        q: 'Firman NDA o acuerdo de confidencialidad?',
        a: 'Si, podemos firmar NDA bilateral antes de iniciar cualquier actividad tecnica. Tambien trabajamos con clausulas de confidencialidad en propuesta y contrato de servicio. La informacion del cliente se usa solo para el alcance acordado y bajo control de acceso. La evidencia y reportes se tratan como material confidencial de negocio.',
      },
    ],
  },
  {
    title: 'Despues del Servicio',
    number: '04',
    questions: [
      {
        q: 'Me ayudan a corregir lo que encuentran?',
        a: 'Si, acompanamos la remediacion con recomendaciones priorizadas y criterios de cierre claros. No solo indicamos que corregir, tambien sugerimos por donde empezar segun impacto. Respondemos dudas del equipo tecnico para acelerar ejecucion y evitar retrabajo. El objetivo es reducir riesgo real, no solo entregar documentos.',
      },
      {
        q: 'Como funciona el retest?',
        a: 'El retest vuelve a probar los hallazgos corregidos dentro del alcance original. Validamos si cada correccion cierra el riesgo o si requiere ajuste adicional. Cada finding queda marcado como cerrado, pendiente o reabierto con evidencia. Asi tenes confirmacion objetiva para auditoria interna y seguimiento.',
      },
      {
        q: 'Puedo contratar monitoreo continuo despues?',
        a: 'Si, despues del pentest inicial podes pasar al plan Continuo mensual. Ese modelo ayuda a detectar cambios de exposicion sin volver a cero cada trimestre. Incluye revisiones periodicas, priorizacion y seguimiento de tendencia de riesgo. Es la opcion recomendada cuando hay cambios frecuentes en apps o infraestructura.',
      },
    ],
  },
]

// Flatten all questions for JSON-LD
const allQuestions = faqSections.flatMap((s) => s.questions)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map((q) => ({
    '@type': 'Question',
    name: q.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.a,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
            FAQ
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Preguntas frecuentes sobre pentesting para empresas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Informacion clave para equipos directivos y tecnicos que estan evaluando un servicio de
            pentesting. Que recibis, cuanto tarda, cuanto cuesta y como se gestiona el riesgo.
          </p>
        </header>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section) => (
            <section key={section.number}>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-red-500 dark:text-red-400">
                  {section.number}
                </span>
                <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.questions.map((faq, i) => (
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
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Tenes otra pregunta?</h2>
          <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
            Si no encontras lo que buscas, escribinos directamente. Respondemos en menos de 24
            horas.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/servicios#contacto"
              className="inline-block rounded-lg bg-red-500 px-8 py-3 font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
            >
              Consulta sobre tu caso
            </Link>
            <Link
              href="/precios"
              className="inline-block rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            >
              Ver precios
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

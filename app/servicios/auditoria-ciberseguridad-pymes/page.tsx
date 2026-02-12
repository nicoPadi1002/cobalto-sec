import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export const metadata = genPageMetadata({
  title:
    'Auditoria de Ciberseguridad para PYMEs | Evaluacion de controles y riesgo real | CobaltoSec',
  description:
    'Servicio de auditoria de ciberseguridad para pymes: evaluacion de controles tecnicos y organizativos, brechas de cumplimiento y plan accionable por prioridad.',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auditoria de Ciberseguridad para PYMEs',
  provider: {
    '@type': 'Organization',
    name: 'CobaltoSec',
  },
  serviceType: 'Cybersecurity Audit',
  areaServed: 'AR',
  description:
    'Evaluacion de controles tecnicos y organizativos, brechas de cumplimiento y plan accionable por prioridad para empresas PyME.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Auditoria Base PyME',
      price: '590',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Auditoria Integral PyME',
      price: '1390',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Auditoria Continua',
      price: '390',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '390',
        priceCurrency: 'USD',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'MON',
        },
      },
    },
  ],
}

export default function AuditoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Auditoria de Ciberseguridad para PYMEs:{' '}
            <span className="text-red-500 dark:text-red-400">
              identifica brechas antes de que se conviertan en incidente
            </span>
          </h1>
          <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
            La mayoria de las PYMEs no pueden responder con certeza si estan protegidas. Tienen
            herramientas, pero no visibilidad sobre que tan bien funcionan los controles, que tan
            maduro es el proceso de respuesta, o que tan expuestos estan realmente.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Una auditoria de ciberseguridad no busca hackear tu sistema: evalua si los controles que
            ya tenes cubren los riesgos mas criticos, detecta brechas de cumplimiento, y te entrega
            un plan accionable priorizando lo que mas impacto tiene.
          </p>
        </section>

        {/* Audit vs Pentest */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Auditoria vs Pentest: no son lo mismo</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 text-xl font-bold text-red-500 dark:text-red-400">Auditoria</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Evalua <strong>cobertura de controles</strong> y <strong>madurez operativa</strong>.
                Responde: ¿tus procesos, politicas y herramientas cubren los riesgos? ¿Que tan bien
                documentados y ejecutados estan?
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Gobierno y gestion de riesgos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Identidades, accesos, privilegios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Backups, continuidad, plan de incidentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Cumplimiento normativo (BCRA, datos personales, PCI DSS)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 text-xl font-bold text-red-500 dark:text-red-400">Pentest</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Valida si los controles son <strong>explotables</strong>. Simula un atacante
                buscando fotos de puertas: ¿Hay vulnerabilidades que permitan acceso no autorizado?
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Reconocimiento activo (subdominios, puertos, servicios)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Explotacion de vulnerabilidades (CVEs, configs inseguras)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Escalado de privilegios, movimiento lateral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Evidencia practica de impacto (PoC)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-red-500 bg-red-50 p-6 dark:bg-red-950/20">
            <p className="mb-3 font-semibold text-red-600 dark:text-red-400">
              Juntos forman una imagen completa de riesgo
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Recomendamos:</strong> auditoria primero (identifica brechas de alto nivel,
              ordena evidencias, prioriza gaps), luego pentest enfocado (valida si los controles
              criticos son explotables), y despues mejora continua (auditoria mensual para seguir
              progreso).
            </p>
          </div>
        </section>

        {/* Compliance Focus */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Enfoque en compliance relevante</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 text-lg font-bold">BCRA (Argentina)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comunicacion A 7266, minimos de seguridad para entidades financieras. Evaluamos
                controles tecnicos y organizativos, governance, gestion de incidentes.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 text-lg font-bold">Datos Personales (AR + LATAM)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ley 25.326 (Argentina), LGPD (Brasil), normativas locales. Cobertura de tratamiento
                de datos sensibles, consentimiento, derechos de titulares, notificacion de brechas.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 text-lg font-bold">PCI DSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Para comercios que procesan tarjetas. Segmentacion de red, controles de acceso,
                logs, testing, politicas. Ordenamos evidencias y mapeamos a los 12 requisitos.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic dark:text-gray-500">
            Nota: No vendemos "certificacion instantanea". Entregamos roadmap realista para cerrar
            las brechas que encuentre el auditor externo, con estimacion de esfuerzo y priorizacion
            por riesgo.
          </p>
        </section>

        {/* Plans */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Planes de Auditoria</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-xl font-bold">Auditoria Base PyME</h3>
              <p className="mb-4 font-mono text-3xl font-bold text-red-500">USD 590</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Evaluacion de controles esenciales (10 dominios)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Informe de brechas priorizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Matriz de madurez basica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>5 dias habiles de SLA</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Consultar
              </Link>
            </div>

            <div className="relative rounded-2xl border border-red-500 bg-white p-6 shadow-lg shadow-red-500/10 dark:bg-gray-900 dark:shadow-red-500/20">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                Recomendado
              </span>
              <h3 className="mb-2 text-xl font-bold">Auditoria Integral PyME</h3>
              <p className="mb-4 font-mono text-3xl font-bold text-red-500">USD 1,390</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Todo lo de Base +</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Evaluacion tecnica + operativa + governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Mapeo a compliance (BCRA, datos personales, PCI DSS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Roadmap 30/60/90 dias con sprints priorizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>10 dias habiles de SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Sesion de presentacion y Q&A</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block rounded-lg bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Consultar
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-xl font-bold">Auditoria Continua</h3>
              <p className="mb-4 font-mono text-3xl font-bold text-red-500">USD 390/mes</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Follow-up mensual de remediaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Actualizacion de matriz de madurez</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Recomendaciones por sprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Alertas de nuevas brechas o cambios regulatorios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✓</span>
                  <span>Minimo 3 meses</span>
                </li>
              </ul>
              <Link
                href="#contacto"
                className="block rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Consultar
              </Link>
            </div>
          </div>
        </section>

        {/* What We Evaluate */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Que evaluamos: 10 dominios de control</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                01. Gobierno y Gestion de Riesgos
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Politicas, roles, ownership, comite de seguridad, evaluaciones de riesgo.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                02. Identidades y Accesos
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                MFA, gestion de privilegios, ciclo de vida de cuentas, revision de accesos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                03. Infraestructura y Red
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Segmentacion, firewalls, hardening de servidores, inventario actualizado.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                04. Endpoints y Correo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                EDR/antivirus, gestion de parches, phishing awareness, email security (SPF, DKIM,
                DMARC).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                05. Backups y Continuidad
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Backup 3-2-1, restore testing, plan de continuidad, RTO/RPO definidos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                06. Monitoreo y Deteccion
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Logs centralizados, SIEM, alertas configuradas, cobertura de eventos criticos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                07. Gestion de Vulnerabilidades
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Scanning regular, priorizacion, SLA de remediacion, tracking de CVEs criticos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                08. Respuesta a Incidentes
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Playbooks, equipo, contactos, testing de procedimientos, postmortem.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                09. Terceros y Proveedores
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Due diligence, contratos con SLAs de seguridad, seguimiento de accesos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                10. Compliance y Datos Personales
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mapeo normativo, tratamiento de datos, consentimiento, notificacion de brechas.
              </p>
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Para quien es esta auditoria</h2>

          <h3 className="mb-4 text-xl font-semibold">Por tamaño</h3>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h4 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                20-100 empleados
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Empresas que ya tienen IT basico pero no visibilidad sobre que funciona y que no.
                Buscan ordenar evidencias, priorizar inversiones, y demostrar due diligence.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h4 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                100-300 empleados
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Organizaciones con multiples areas, proveedores, y complejidad creciente. Necesitan
                governance, gestion de terceros, y mapeo a compliance sectorial.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <h4 className="mb-2 font-mono text-lg font-bold text-red-500 dark:text-red-400">
                300-500 empleados
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Empresas que requieren certificacion o que proveen a corporativos/gobierno.
                Ordenamos evidencias para auditoria externa, identificamos brechas
                pre-certificacion.
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-semibold">Por sector</h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 font-semibold text-red-500 dark:text-red-400">Fintech</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                BCRA, PCI DSS, datos personales. Controles criticos: segmentacion de red, MFA, logs,
                gestion de incidentes.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 font-semibold text-red-500 dark:text-red-400">Salud</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Datos sensibles, regulacion local. Controles criticos: accesos, encriptacion,
                backups, notificacion de brechas.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 font-semibold text-red-500 dark:text-red-400">Ecommerce</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                PCI DSS, datos de clientes. Controles criticos: segmentacion de pago, testing,
                gestion de vulnerabilidades.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 font-semibold text-red-500 dark:text-red-400">B2B / Software</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Due diligence para corporativos. Controles criticos: SDLC, CI/CD security, acceso a
                produccion, logs.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Proceso de Auditoria</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-mono text-xl font-bold text-white">
                01
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Contacto y Alcance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Entrevista inicial para entender el contexto, definir alcance (dominios a auditar,
                  sistemas criticos, compliance requerido), y acordar SLA. Firmamos acuerdo de
                  confidencialidad.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-mono text-xl font-bold text-white">
                02
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Recoleccion de Evidencias</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cuestionarios, entrevistas con IT, revision de documentacion (politicas,
                  diagramas, logs de backup, reportes de SIEM), acceso read-only a sistemas para
                  validacion tecnica.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-mono text-xl font-bold text-white">
                03
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Evaluacion y Analisis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mapeo de controles a frameworks (ISO 27001, NIST CSF, compliance sectorial),
                  identificacion de brechas, calculo de madurez por dominio, priorizacion de
                  riesgos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-mono text-xl font-bold text-white">
                04
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Entrega de Informe</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Informe ejecutivo (resumen para direccion), informe tecnico (detalle de brechas,
                  evidencias, recomendaciones), matriz de madurez, roadmap 30/60/90 dias. Sesion de
                  presentacion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 font-mono text-xl font-bold text-white">
                05
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Seguimiento y Mejora Continua</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (Opcional) Follow-up mensual de remediaciones, actualizacion de matriz, alertas de
                  nuevas brechas o cambios regulatorios. Disponible via Auditoria Continua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Entregables</h2>
          <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Diagnostico de madurez</strong> por dominio (gobierno, accesos,
                  infraestructura, backups, monitoreo, etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Brechas priorizadas</strong> por riesgo e impacto
                  (critico/alto/medio/bajo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Plan de remediacion por etapas</strong> (30/60/90 dias) con esfuerzo
                  estimado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Evidencia defendible</strong> para auditorias externas o due diligence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✓</span>
                <span>
                  <strong>Criterios de mejora</strong> cuantitativos para medir progreso en
                  siguientes auditorias
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Maturity Matrix */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Como leer la matriz de madurez</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            La matriz de madurez no es un simple puntaje: es un mapa de donde estas y donde deberias
            estar. Cada dominio tiene niveles de madurez (inicial, gestionado, definido, medible,
            optimizado) y mostramos evidencias concretas de que funciona y que no.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                Ejemplo: Accesos en nivel bajo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Privilegios excesivos (admin a todos), sin MFA en cuentas criticas, sin revision de
                accesos. Riesgo: acceso no autorizado persistente.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                Ejemplo: Backups en nivel medio
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Backup diario configurado, pero sin restore testing. Riesgo: descubris en el
                incidente que el backup no funciona.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                Ejemplo: Respuesta en nivel bajo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No hay playbooks ni equipo asignado. Riesgo: improvisacion total bajo estres,
                perdida de evidencia.
              </p>
            </div>
          </div>
        </section>

        {/* Common Errors */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Errores comunes en PYMEs</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                1. Dependencia de una sola persona IT
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Si solo el tecnico sabe las credenciales de firewall, backups, y servidores, un
                incidente se vuelve inmanejable. Recomendacion: documentacion accesible, doble
                coverage, password manager compartido.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                2. MFA solo en algunos sistemas
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                MFA en email pero no en acceso remoto o admin de servidores deja la puerta abierta.
                Recomendacion: MFA obligatorio en cualquier sistema critico, priorizando accesos
                remotos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                3. Backups sin restore testing
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ver el LED verde del backup no significa que funcione. Recomendacion: restore test
                trimestral, documentar tiempo de recuperacion, simular escenario de incidente.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                4. Plan de respuesta no probado
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tener un PDF con "plan de incidentes" no sirve si nunca lo corriste. Recomendacion:
                simulacro anual, asignar roles claros, practicar comunicacion bajo estres.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-red-500 dark:text-red-400">
                5. Sin ownership claro para cerrar brechas
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recibir un informe de auditoria y no asignar responsables con deadlines termina en
                mejora cero. Recomendacion: owner por brecha, sprints de 30 dias, seguimiento
                mensual.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿La auditoria reemplaza un pentest?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                No, son complementarios. La auditoria evalua cobertura y madurez de controles (¿lo
                tenes documentado? ¿funciona en la practica?). El pentest valida si son explotables
                (¿un atacante puede bypassearlo?). Recomendamos auditoria primero para identificar
                brechas de alto nivel, luego pentest enfocado en areas criticas.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿Necesito compliance o certificacion para hacer una auditoria?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                No. Muchas empresas auditan para ordenar la casa antes de buscar certificacion. Te
                entregamos roadmap realista de que tan lejos estas de ISO 27001, BCRA, PCI DSS,
                etc., con estimacion de esfuerzo. Podes usarlo como input para decidir cuando
                contratar auditoria externa formal.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿Sirve para demostrar due diligence a un cliente corporativo?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                Si. El informe de auditoria ordena evidencias (politicas, logs, backups, accesos) de
                forma defendible. Muchos corporativos piden evidencia de controles como prerequisito
                de contratacion. Si tenes BCRA o ISO 27001 el informe mapea los gaps pendientes.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿Incluyen evaluacion de datos personales?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                Si, dentro del alcance del plan Integral. Evaluamos tratamiento de datos sensibles,
                consentimiento, derechos de titulares (acceso, rectificacion, cancelacion),
                notificacion de brechas, y mapeo a Ley 25.326 (Argentina) o LGPD (Brasil).
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿Hacen implementacion de controles o solo recomendaciones?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                No hacemos implementacion directa (para mantener independencia de auditoria).
                Entregamos roadmap priorizado con estimacion de esfuerzo y opciones de tooling. En
                Auditoria Continua acompanamos con follow-up mensual y validacion de que lo
                implementado cierra la brecha.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold transition-colors hover:text-red-500 dark:hover:text-red-400">
                ¿Cuanto tarda en verse mejora despues de la auditoria?
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
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                En la primera semana ya tenes visibilidad clara de donde estas parado. Mejoras
                quick-wins (MFA, backup testing, revision de accesos) se pueden cerrar en 30 dias.
                Governance y compliance profundo toman 90-180 dias. El roadmap te da expectativas
                realistas sprint por sprint.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section id="contacto" className="scroll-mt-24">
          <div className="rounded-2xl border border-red-500 bg-red-50 p-8 dark:bg-red-950/20">
            <h2 className="mb-4 text-3xl font-bold">
              Empeza con una auditoria: ordena evidencias, prioriza gaps, mejora madurez
            </h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Completa el formulario y agendamos una sesion para definir alcance, SLA, y
              deliverables. Primera consulta sin costo.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}

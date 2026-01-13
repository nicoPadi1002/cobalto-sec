import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
  href: string
  github?: string
  status: 'active' | 'completed' | 'in-progress'
  tags: string[]
}

const statusConfig = {
  active: {
    label: 'En Producción',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    badgeStyle: 'border-green-200 dark:border-green-800',
  },
  completed: {
    label: 'Completado',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    badgeStyle: 'border-blue-200 dark:border-blue-800',
  },
  'in-progress': {
    label: 'En Desarrollo',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    badgeStyle: 'border-yellow-200 dark:border-yellow-800',
  },
}

export default function ProjectCard({
  title,
  description,
  href,
  github,
  status,
  tags,
}: ProjectCardProps) {
  const statusInfo = statusConfig[status]

  // Métricas específicas por proyecto
  const getProjectMetrics = () => {
    if (title === 'HoneyAI') {
      return [
        { label: 'Sesiones capturadas', value: '2.7K+' },
        { label: 'IPs únicas', value: '80+' },
        { label: 'Comandos analizados', value: '72+' },
      ]
    }
    if (title === 'SIEM/SOAR Automation') {
      return [
        { label: 'Eventos procesados', value: '80K+' },
        { label: 'Uptime', value: '99.8%' },
        { label: 'Tiempo respuesta', value: '<15s' },
      ]
    }
    return null
  }

  const metrics = getProjectMetrics()

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="p-8">
        {/* Header con título y status */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400">
              <Link href={href}>{title}</Link>
            </h3>
          </div>
          <div className="flex-shrink-0">
            {status === 'active' ? (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full ${statusInfo.badgeStyle} border px-3 py-1 text-xs font-semibold ${statusInfo.color}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                {statusInfo.label}
              </span>
            ) : (
              <span
                className={`inline-flex items-center rounded-full border ${statusInfo.badgeStyle} px-3 py-1 text-xs font-semibold ${statusInfo.color}`}
              >
                {statusInfo.label}
              </span>
            )}
          </div>
        </div>

        {/* Descripción */}
        <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Métricas en grid si existen */}
        {metrics && (
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-lg font-bold text-sky-600 dark:text-sky-400">{metric.value}</p>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-sky-700 dark:hover:bg-sky-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950"
          >
            Ver Detalles Completos
          </Link>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Ver Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

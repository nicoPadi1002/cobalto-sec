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
    label: 'Activo',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  },
  completed: {
    label: 'Completado',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  },
  'in-progress': {
    label: 'En Desarrollo',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
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

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusInfo.color}`}
          >
            {statusInfo.label}
          </span>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950"
          >
            Leer Más
          </Link>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
            >
              Ver Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

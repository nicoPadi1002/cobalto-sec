import Link from 'next/link'
import projectsData from '@/data/projectsData'

export default function FeaturedProjects() {
  // Solo proyectos activos para featured
  const featuredProjects = projectsData.filter((p) => p.status === 'active').slice(0, 2)

  return (
    <section className="border-b border-gray-200 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Infraestructura en producción capturando amenazas 24/7
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  En Producción
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-red-500 dark:group-hover:text-red-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-700 dark:text-gray-300">{project.description}</p>

                {/* Quick stats por proyecto */}
                {project.title === 'HoneyAI' && (
                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Sesiones</p>
                      <p className="font-mono text-lg font-bold text-cyan-600 dark:text-cyan-400">
                        81.7K+
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">IPs Únicas</p>
                      <p className="font-mono text-lg font-bold text-cyan-600 dark:text-cyan-400">
                        640+
                      </p>
                    </div>
                  </div>
                )}

                {project.title === 'SIEM/SOAR Automation' && (
                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Eventos/hora</p>
                      <p className="font-mono text-lg font-bold text-cyan-600 dark:text-cyan-400">
                        500+
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Uptime</p>
                      <p className="font-mono text-lg font-bold text-cyan-600 dark:text-cyan-400">
                        99.8%
                      </p>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={project.href}
                    className="link-underline inline-flex items-center text-sm font-semibold text-red-500 dark:text-red-400"
                  >
                    Ver detalles completos →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="link-underline inline-flex items-center text-sm font-medium text-red-500 dark:text-red-400"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </div>
    </section>
  )
}

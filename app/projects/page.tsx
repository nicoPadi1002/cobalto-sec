import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de seguridad ofensiva, pentesting y automatización de detección.',
}

export default function ProjectsPage() {
  const activeProjects = projectsData.filter((p) => p.status === 'active')
  const otherProjects = projectsData.filter((p) => p.status !== 'active')

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Proyectos</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Implementaciones de seguridad ofensiva, detección de amenazas y automatización en
          producción
        </p>

        {/* Stats rápidos */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-4 py-2 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
            <p className="text-xs text-gray-600 dark:text-gray-400">Proyectos Activos</p>
            <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">
              {activeProjects.length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-4 py-2 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
            <p className="text-xs text-gray-600 dark:text-gray-400">En Producción</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">24/7</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-4 py-2 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
            <p className="text-xs text-gray-600 dark:text-gray-400">Stack</p>
            <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">Open Source</p>
          </div>
        </div>
      </header>

      {/* Proyectos activos */}
      {activeProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">En Producción</h2>
          <div className="space-y-8">
            {activeProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Otros proyectos */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Otros Proyectos</h2>
          <div className="space-y-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

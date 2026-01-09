import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de ciberseguridad, threat intelligence y automatización.',
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyectos</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Implementaciones de ciberseguridad, threat intelligence y automatización de SOC en
          producción.
        </p>
      </header>

      <div className="space-y-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

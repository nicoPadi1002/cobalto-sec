import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Showcase de proyectos y laboratorios seleccionados.',
}

type Project = {
  slug: string
  title: string
  summary: string
  tech?: string[]
  hero: string // ruta absoluta desde /public, ej: /static/images/projects/<slug>/hero.webp
  url?: string // demo o repo (opcional)
}

// 👉 Arranca vacío. Cuando tengas proyectos, agregalos acá o cárgalos desde data/ más adelante.
const projects: Project[] = [
  // Ejemplo (comentado):
  // {
  //   slug: 'scanner-red-team',
  //   title: 'Scanner Red Team',
  //   summary: 'Scanner de superficie de ataque con fingerprints y PoC integradas.',
  //   tech: ['Next.js', 'Go', 'Nmap'],
  //   hero: '/static/images/projects/scanner-red-team/hero.webp',
  //   url: 'https://github.com/tu-usuario/scanner-red-team'
  // },
]

export default function ProjectsPage() {
  const hasProjects = projects.length > 0

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Showcase con imagen destacada <span className="font-medium">16:9</span> (recomendado{' '}
          <code>1920×1080</code> o <code>1280×720</code>, formato <code>webp</code>, &lt; 300 KB).
        </p>
      </header>

      {!hasProjects ? (
        <section
          aria-label="Estado vacío"
          className="rounded-2xl border border-dashed p-6 text-gray-600 dark:text-gray-400"
        >
          <p className="font-medium">Próximamente.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            <li>
              Guardá el hero en <code>/public/static/images/projects/&lt;slug&gt;/hero.webp</code>{' '}
              (relación <strong>16:9</strong>).
            </li>
            <li>
              Agregá el proyecto al array <code>projects</code> de este archivo o movamos los datos
              a <code>data/projects/*.json|mdx</code> más adelante.
            </li>
            <li>
              Incluí <code>alt</code> descriptivo (accesibilidad) y lista corta de tecnologías.
            </li>
          </ul>
        </section>
      ) : (
        <section
          aria-label="Listado de proyectos"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <article key={p.slug} className="group rounded-2xl border p-3 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src={p.hero}
                  alt={`Hero de ${p.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={false}
                />
              </div>
              <h2 className="mt-3 text-lg font-semibold">{p.title}</h2>
              <p className="mt-1 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                {p.summary}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3">
                {p.url ? (
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-sky-600 hover:underline"
                  >
                    Ver más →
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500">Sin enlace</span>
                )}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-10 border-t py-6 text-sm text-gray-600 dark:text-gray-400"
      aria-label="Pie de página"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
        <nav aria-label="Enlaces del sitio" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/tags" className="hover:underline">
            Etiquetas
          </Link>
          <Link href="/about" className="hover:underline">
            Acerca
          </Link>
          {/* Activar cuando exista:
          <Link href="/projects" className="hover:underline">Proyectos</Link>
          */}
        </nav>

        <div className="flex items-center gap-4" aria-label="Perfiles sociales">
          {siteMetadata.github && (
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
          {siteMetadata.linkedin && (
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:underline"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-3xl px-4 text-center sm:text-left">
        <span className="font-medium">{siteMetadata.title}</span> • © {year} •{' '}
        {siteMetadata.author}
      </div>
    </footer>
  )
}

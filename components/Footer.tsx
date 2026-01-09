import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t pt-8 pb-8" aria-label="Pie de página">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              >
                Proyectos
              </Link>
              <Link
                href="/tags"
                className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              >
                Etiquetas
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              >
                Acerca
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Redes
            </h3>
            <div className="flex flex-col gap-2">
              {siteMetadata.github ? (
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
                >
                  GitHub
                </a>
              ) : null}
              {siteMetadata.linkedin ? (
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
                >
                  LinkedIn
                </a>
              ) : null}
              <a
                href="mailto:dw.nicolaspadilla@gmail.com"
                className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Sobre el sitio
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Blog técnico sobre ciberseguridad, threat intelligence y automatización de SOC.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{siteMetadata.title}</span> • © {year} •{' '}
          {siteMetadata.author}
        </div>
      </div>
    </footer>
  )
}

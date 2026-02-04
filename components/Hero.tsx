import Link from 'next/link'
import Stats from './Stats'

export default function Hero() {
  return (
    <section className="relative border-b py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nicolás Padilla</h1>
          <p className="text-xl font-medium text-sky-600 sm:text-2xl dark:text-sky-400">
            Offensive Security Consultant
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Pentesting, auditorías de seguridad y consultoría ofensiva. Ayudo a organizaciones a
            identificar y explotar vulnerabilidades antes de que lo haga un atacante real.
          </p>
        </div>

        {/* Stats Section */}
        <Stats />

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Penetration Testing
          </span>
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Security Audits
          </span>
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Vulnerability Assessment
          </span>
          <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Threat Intelligence
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-950"
          >
            Ver Proyectos
          </Link>
          <Link
            href="mailto:nicolas.cobaltosec@gmail.com"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
          >
            Contacto
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com/nicoPadi1002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicopadilla-sec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nicolas.cobaltosec@gmail.com"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

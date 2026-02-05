import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative -mx-4 overflow-hidden px-4 py-24 sm:-mx-6 sm:px-6 sm:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />

      {/* Glow accents */}
      <div className="absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/5 blur-3xl dark:bg-red-500/10" />
      <div className="absolute -bottom-12 left-1/3 -z-10 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Seguridad ofensiva profesional
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Nicolás Padilla
        </h1>

        <p className="mt-4 text-xl font-medium text-gray-600 sm:text-2xl dark:text-gray-400">
          Offensive Security Consultant
        </p>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Identifico y exploto vulnerabilidades en tu infraestructura antes de que lo haga un
          atacante real. Pentesting, auditorías y consultoría ofensiva.
        </p>

        {/* Skill tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            'Penetration Testing',
            'Security Audits',
            'Vulnerability Assessment',
            'Threat Intelligence',
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-red-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none dark:hover:shadow-red-500/20 dark:focus:ring-offset-gray-950"
          >
            Ver Servicios
          </Link>
          <Link
            href="/services#contacto"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
          >
            Contacto
          </Link>
        </div>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://github.com/nicoPadi1002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicopadilla-sec/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:nicolas@cobalto-sec.tech"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            aria-label="Email"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function Hero() {
  const stats = [
    {
      value: '81.7K+',
      label: 'SSH Sessions',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    },
    { value: '<15s', label: 'Response Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    {
      value: '640+',
      label: 'Unique IPs',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
  ]

  return (
    <section className="relative -mx-4 overflow-hidden border-b border-gray-200 px-4 py-20 sm:-mx-6 sm:px-6 sm:py-28 dark:border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />

      {/* Red glow accent */}
      <div className="absolute -top-24 right-1/4 -z-10 h-72 w-72 rounded-full bg-red-500/5 blur-3xl dark:bg-red-500/10" />
      <div className="absolute -bottom-12 left-1/4 -z-10 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />

      <div className="mx-auto max-w-5xl">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-wider text-red-500 uppercase dark:text-red-400">
            Seguridad ofensiva profesional
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Nicolás Padilla
          </h1>
          <p className="text-xl font-medium text-gray-700 sm:text-2xl dark:text-gray-300">
            Offensive Security Consultant
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Pentesting, auditorías de seguridad y consultoría ofensiva. Ayudo a organizaciones a
            identificar y explotar vulnerabilidades antes de que lo haga un atacante real.
          </p>
        </div>

        {/* Stats in cards */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-white/80 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-5 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-cyan-500/30 dark:hover:shadow-cyan-500/10"
            >
              <svg
                className="mx-auto mb-2 h-5 w-5 text-gray-400 transition-colors group-hover:text-cyan-500 dark:text-gray-600 dark:group-hover:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={stat.icon}
                />
              </svg>
              <p className="font-mono text-2xl font-bold tracking-tight text-cyan-600 sm:text-3xl dark:text-cyan-400">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            'Penetration Testing',
            'Security Audits',
            'Vulnerability Assessment',
            'Threat Intelligence',
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none dark:hover:shadow-red-500/20 dark:focus:ring-offset-gray-950"
          >
            Ver Servicios
          </Link>
          <Link
            href="/services#contacto"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-offset-gray-950"
          >
            Contacto
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com/nicoPadi1002"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicopadilla-sec/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nicolas@cobalto-sec.tech"
            className="link-underline text-sm font-medium text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

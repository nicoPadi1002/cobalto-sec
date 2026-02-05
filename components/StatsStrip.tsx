export default function StatsStrip() {
  const stats = [
    { value: '81.7K+', label: 'Sesiones SSH', description: 'Ataques capturados en producción' },
    { value: '640+', label: 'IPs Analizadas', description: 'Atacantes únicos identificados' },
    { value: '<15s', label: 'Tiempo de Respuesta', description: 'Detección a bloqueo automático' },
    { value: '24/7', label: 'En Producción', description: 'Infraestructura propia activa' },
  ]

  return (
    <section className="relative -mx-4 overflow-hidden px-4 py-16 sm:-mx-6 sm:px-6 sm:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-950" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
            Datos reales de sistemas en producción
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
            >
              <p className="font-mono text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl dark:text-cyan-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['Infraestructura Propia', 'Open Source', 'Datos Reales'].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
            >
              <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

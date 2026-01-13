export default function Stats() {
  const stats = [
    {
      value: '80K+',
      label: 'Eventos SIEM Procesados',
      subtext: 'En producción 24/7',
    },
    {
      value: '2.7K+',
      label: 'Sesiones Honeypot',
      subtext: 'Capturadas en 48h',
    },
    {
      value: '<15s',
      label: 'Tiempo de Respuesta',
      subtext: 'Detección a bloqueo automático',
    },
  ]

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="relative">
            <p className="text-3xl font-bold tracking-tight text-sky-600 dark:text-sky-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">{stat.label}</p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{stat.subtext}</p>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-sky-100/50 blur-2xl dark:bg-sky-900/20" />
        </div>
      ))}
    </div>
  )
}

import Link from 'next/link'

export default function AboutPreview() {
  const stack = ['Wazuh', 'Proxmox', 'n8n', 'Docker', 'LXC', 'Grafana', 'Loki', 'Python', 'Bash']

  return (
    <section className="border-b py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Consultor de ciberseguridad especializado en implementación de SIEM, automatización de
            SOC y análisis de seguridad ofensiva. Trabajo con infraestructura on-premise y cloud,
            enfocado en threat intelligence y respuesta a incidentes.
          </p>

          <div>
            <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              Stack técnico:
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
            >
              Conocer más →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

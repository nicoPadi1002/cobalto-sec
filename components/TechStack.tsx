export default function TechStack() {
  const technologies = [
    // Offensive Security
    {
      name: 'Metasploit',
      category: 'Exploitation',
      description: 'Framework de pentesting y explotación',
    },
    {
      name: 'Burp Suite',
      category: 'Web Security',
      description: 'Proxy y scanner de seguridad web',
    },
    {
      name: 'Nmap',
      category: 'Recon',
      description: 'Escaneo de redes y descubrimiento de servicios',
    },

    // Security & Monitoring
    { name: 'Wazuh', category: 'SIEM', description: 'SIEM open source para detección de amenazas' },
    {
      name: 'Shuffle',
      category: 'SOAR',
      description: 'Plataforma SOAR para automatización de respuestas',
    },
    {
      name: 'Cowrie',
      category: 'Honeypot',
      description: 'Honeypot SSH/Telnet de media interacción',
    },

    // Infrastructure
    {
      name: 'Proxmox',
      category: 'Virtualization',
      description: 'Hipervisor enterprise open source',
    },
    { name: 'Docker', category: 'Containers', description: 'Containerización y microservicios' },

    // Automation & Dev
    { name: 'Python', category: 'Development', description: 'Scripting y automatización ofensiva' },
    { name: 'Bash', category: 'Scripting', description: 'Automatización de sistemas Linux' },
    { name: 'n8n', category: 'Automation', description: 'Workflow automation self-hosted' },

    // Observability
    {
      name: 'Grafana',
      category: 'Visualization',
      description: 'Dashboards y visualización de datos',
    },
    { name: 'Ollama', category: 'AI/ML', description: 'Modelos LLM locales para análisis' },
  ]

  return (
    <section className="border-b py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Stack Tecnológico</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Herramientas y plataformas que uso en producción
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-red-500/30 hover:shadow-md hover:shadow-red-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10"
              title={tech.description}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</span>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-red-950/30 dark:to-orange-950/20" />

              {/* Tooltip on hover */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block dark:bg-gray-800 dark:text-gray-100">
                {tech.description}
                <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Open source, self-hosted, en producción 24/7
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function AboutPreview() {
  const stack = [
    'Metasploit',
    'Burp Suite',
    'Nmap',
    'Python',
    'Wazuh',
    'Proxmox',
    'Docker',
    'n8n',
    'Bash',
  ]

  return (
    <section className="border-b py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Consultor de seguridad ofensiva especializado en pentesting, auditorías de seguridad y
            vulnerability assessment. Trabajo con infraestructura on-premise y cloud, enfocado en
            identificar y explotar vulnerabilidades antes de que lo haga un atacante.
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
              className="link-underline text-sm font-medium text-red-500 dark:text-red-400"
            >
              Conocer más →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

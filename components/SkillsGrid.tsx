export default function SkillsGrid() {
  const skillCategories = [
    {
      title: 'Defense',
      icon: '🛡️',
      skills: [
        { name: 'SIEM/SOAR', level: 'Expert' },
        { name: 'Threat Intelligence', level: 'Advanced' },
        { name: 'Incident Response', level: 'Advanced' },
      ],
    },
    {
      title: 'Offense',
      icon: '⚔️',
      skills: [
        { name: 'Penetration Testing', level: 'Advanced' },
        { name: 'Honeypots', level: 'Expert' },
        { name: 'Attack Simulation', level: 'Advanced' },
      ],
    },
    {
      title: 'Automation',
      icon: '⚡',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'Bash Scripting', level: 'Expert' },
        { name: 'n8n/Workflows', level: 'Advanced' },
      ],
    },
    {
      title: 'Infrastructure',
      icon: '🏗️',
      skills: [
        { name: 'Proxmox/LXC', level: 'Expert' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Linux Hardening', level: 'Advanced' },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    }
  }

  return (
    <section className="border-b py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Expertise</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Stack técnico enfocado en detección, respuesta y automatización
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

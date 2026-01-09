interface Project {
  title: string
  description: string
  imgSrc: string
  href: string
  github?: string
  status: 'active' | 'completed' | 'in-progress'
  tags: string[]
}

const projectsData: Project[] = [
  {
    title: 'HoneyAI',
    description:
      'Sistema de detección y análisis de amenazas que combina un honeypot SSH de media interacción con inteligencia artificial local para clasificar atacantes en tiempo real. Infraestructura en producción capturando ataques reales 24/7.',
    imgSrc: '/static/images/projects/honeyai.png',
    href: '/blog/2026-01-07-honeyai-honeypot-ssh-ia-local',
    status: 'active',
    tags: ['Cowrie', 'Ollama', 'n8n', 'Grafana', 'Loki', 'Proxmox', 'Threat Intelligence'],
  },
]

export default projectsData

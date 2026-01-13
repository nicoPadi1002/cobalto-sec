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
    href: '/projects/honey-ai',
    status: 'active',
    tags: ['Cowrie', 'Ollama', 'n8n', 'Grafana', 'Loki', 'Proxmox', 'Threat Intelligence'],
  },
  {
    title: 'SIEM/SOAR Automation',
    description:
      'Sistema de respuesta automática ante ataques SSH utilizando Wazuh como SIEM y Shuffle como plataforma SOAR. Integración completa para detección, análisis y respuesta automatizada ante intentos de brute force y amenazas en tiempo real.',
    imgSrc: '/static/images/og-default.png',
    href: '/projects/wazuh-soar',
    status: 'active',
    tags: [
      'Wazuh',
      'SIEM',
      'SOAR',
      'Shuffle',
      'Automation',
      'Security Operations',
      'Incident Response',
    ],
  },
]

export default projectsData

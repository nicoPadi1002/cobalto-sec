import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { notFound } from 'next/navigation'

// Mapeo de slugs de proyectos a identificadores en posts
const PROJECT_MAPPING = {
  'honey-ai': 'honey-ai',
  'wazuh-soar': 'wazuh-soar',
}

// Títulos amigables para cada proyecto
const PROJECT_TITLES = {
  'honey-ai': 'HoneyAI',
  'wazuh-soar': 'SIEM/SOAR Automation',
}

// Descripciones para cada proyecto
const PROJECT_DESCRIPTIONS = {
  'honey-ai':
    'Sistema de detección y análisis de amenazas que combina un honeypot SSH con IA local para clasificar atacantes en tiempo real.',
  'wazuh-soar':
    'Sistema de respuesta automática ante ataques SSH utilizando Wazuh como SIEM y Shuffle como plataforma SOAR.',
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_MAPPING).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectTitle = PROJECT_TITLES[slug as keyof typeof PROJECT_TITLES] || slug
  return genPageMetadata({
    title: `${projectTitle} - Proyecto`,
    description: PROJECT_DESCRIPTIONS[slug as keyof typeof PROJECT_DESCRIPTIONS],
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectId = PROJECT_MAPPING[slug as keyof typeof PROJECT_MAPPING]

  // Si el proyecto no existe, mostrar 404
  if (!projectId) {
    notFound()
  }

  // Filtrar posts que tengan este proyecto en su frontmatter
  const filteredPosts = allBlogs.filter((post) => {
    return post.project === projectId
  })

  // Ordenar por fecha (más reciente primero)
  const sortedPosts = sortPosts(filteredPosts)
  const posts = allCoreContent(sortedPosts)

  const projectTitle = PROJECT_TITLES[slug as keyof typeof PROJECT_TITLES] || slug
  const projectDescription = PROJECT_DESCRIPTIONS[slug as keyof typeof PROJECT_DESCRIPTIONS]

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {projectTitle}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{projectDescription}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} relacionados
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No hay posts publicados para este proyecto todavía.
          </p>
        </div>
      ) : (
        <ListLayout posts={posts} title="" />
      )}
    </div>
  )
}

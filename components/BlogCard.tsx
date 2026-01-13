import Link from 'next/link'
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'

interface BlogCardProps {
  post: Blog
}

export default function BlogCard({ post }: BlogCardProps) {
  const href = post.path?.startsWith('/') ? post.path : `/${post.path}`
  const date = new Date(post.date).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  // Calcular reading time (aprox 200 palabras por minuto)
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min lectura`
  }

  const readingTime = post.body?.raw ? getReadingTime(post.body.raw) : null

  // Verificar si la imagen existe y no es la default
  const hasValidImage = post.images?.[0] && post.images[0] !== '/static/images/og-default.png'

  // Generar color basado en el título para placeholders
  const getGradientFromTitle = (title: string) => {
    const colors = [
      'from-sky-500 to-blue-600',
      'from-purple-500 to-pink-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-red-600',
      'from-indigo-500 to-purple-600',
    ]
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Thumbnail o Placeholder */}
      <Link href={href} className="relative aspect-video overflow-hidden bg-gray-100">
        {hasValidImage ? (
          <Image
            src={post.images[0]}
            alt={post.title || ''}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${getGradientFromTitle(post.title || '')} transition-transform duration-300 group-hover:scale-105`}
          >
            <div className="text-center text-white">
              <svg
                className="mx-auto h-16 w-16 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="mt-2 text-sm font-semibold opacity-90">Artículo Técnico</p>
            </div>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {/* Metadata: fecha + reading time */}
        <div className="mb-3 flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>{date}</time>
          {readingTime && (
            <>
              <span>•</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>

        {/* Título */}
        <h3 className="mb-3 text-xl leading-tight font-bold tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400">
          <Link href={href}>{post.title}</Link>
        </h3>

        {/* Summary */}
        {post.summary && (
          <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        )}

        {/* Tags clickeables */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-sky-300 hover:bg-sky-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-sky-700 dark:hover:bg-sky-900/30"
              >
                #{tag}
              </Link>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
                +{post.tags.length - 3} más
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div>
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  )
}

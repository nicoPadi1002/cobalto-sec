import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'

export const metadata: Metadata = {
  title: 'Inicio',
  description: siteMetadata.description,
}

export default function HomePage() {
  const posts = [...allBlogs]
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)

  return (
    <>
      <Hero />
      <AboutPreview />

      <main className="mx-auto max-w-3xl px-4 py-10">
        {posts.length === 0 ? (
          <section
            aria-label="Sin publicaciones"
            className="rounded-2xl border border-dashed p-6 text-gray-600 dark:text-gray-400"
          >
            <p className="font-medium">No hay publicaciones todavía.</p>
            <p className="mt-2 text-sm">
              Cuando publiques tu primer entrada, aparecerá aquí. Mientras tanto, podés revisar{' '}
              <Link href="/about" className="underline">
                Acerca
              </Link>{' '}
              o ir a{' '}
              <Link href="/blog" className="underline">
                Blog
              </Link>
              .
            </p>
          </section>
        ) : (
          <>
            <header className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Últimos Artículos</h2>
            </header>

            <section aria-label="Últimas publicaciones" className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => {
                const href = post.path?.startsWith('/') ? post.path : `/${post.path}`
                const date = new Date(post.date).toLocaleDateString('es-AR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
                return (
                  <article
                    key={post._id}
                    className="flex flex-col rounded-2xl border p-5 transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-xl font-semibold">
                      <Link href={href} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{date}</div>
                    {post.summary ? (
                      <p className="mt-3 flex-grow text-gray-700 dark:text-gray-300">
                        {post.summary}
                      </p>
                    ) : null}
                    <div className="mt-4">
                      <Link
                        href={href}
                        className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>
                )
              })}
            </section>

            <div className="mt-8">
              <Link href="/blog" className="text-sm font-medium text-sky-600 hover:underline">
                Ver todas las entradas →
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  )
}

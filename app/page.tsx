import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import TechStack from '@/components/TechStack'
import AboutPreview from '@/components/AboutPreview'
import BlogCard from '@/components/BlogCard'
import FadeIn from '@/components/FadeIn'

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

      <FadeIn>
        <FeaturedProjects />
      </FadeIn>

      <FadeIn delay={100}>
        <TechStack />
      </FadeIn>

      <FadeIn delay={200}>
        <AboutPreview />
      </FadeIn>

      <main className="mx-auto max-w-4xl px-4 py-10">
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
          <FadeIn delay={300}>
            <header className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Últimos Artículos</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Tutoriales técnicos, proyectos y análisis de seguridad
              </p>
            </header>

            <section aria-label="Últimas publicaciones" className="grid gap-6 md:grid-cols-2">
              {posts.map((post, idx) => (
                <FadeIn key={post._id} delay={350 + idx * 50}>
                  <BlogCard post={post} />
                </FadeIn>
              ))}
            </section>

            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
              >
                Ver Todos los Artículos
              </Link>
            </div>
          </FadeIn>
        )}
      </main>
    </>
  )
}

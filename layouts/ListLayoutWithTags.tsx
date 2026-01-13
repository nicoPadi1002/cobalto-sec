'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import BlogCard from '@/components/BlogCard'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto rounded-lg bg-gray-100 px-4 py-2 text-gray-400 dark:bg-gray-800"
            disabled={!prevPage}
          >
            Anterior
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Anterior
          </Link>
        )}
        <span className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
          {currentPage} de {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto rounded-lg bg-gray-100 px-4 py-2 text-gray-400 dark:bg-gray-800"
            disabled={!nextPage}
          >
            Siguiente
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Siguiente
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Todos los Artículos</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {posts.length} artículos técnicos sobre ciberseguridad y automatización
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar con tags */}
        <aside className="lg:w-64 lg:flex-shrink-0">
          <div className="sticky top-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-bold">Filtrar por Tag</h3>

            {pathname.startsWith('/blog') ? (
              <div className="mb-3 rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                Todos ({posts.length})
              </div>
            ) : (
              <Link
                href="/blog"
                className="mb-3 block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                Todos ({posts.length})
              </Link>
            )}

            <ul className="space-y-1">
              {sortedTags.slice(0, 15).map((t) => {
                const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                return (
                  <li key={t}>
                    {isActive ? (
                      <div className="rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                        #{t} ({tagCounts[t]})
                      </div>
                    ) : (
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                      >
                        #{t} ({tagCounts[t]})
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>

            {sortedTags.length > 15 && (
              <Link
                href="/tags"
                className="mt-4 block text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
              >
                Ver todos los tags →
              </Link>
            )}
          </div>
        </aside>

        {/* Main content con BlogCards */}
        <div className="flex-1">
          {displayPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed p-8 text-center text-gray-600 dark:text-gray-400">
              <p className="text-lg font-medium">No se encontraron artículos</p>
              <p className="mt-2 text-sm">Probá con otro filtro o volvé al blog principal</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {displayPosts.map((post) => (
                <BlogCard key={post._id} post={post as Blog} />
              ))}
            </div>
          )}

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}

import type { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (siteMetadata.siteUrl || 'https://cobalto-sec.tech').replace(/\/+$/, '')
  const basePath = (process.env.BASE_PATH || '').replace(/\/+$/, '')
  const prefix = `${base}${basePath}`

  const today = new Date()

  // Rutas estáticas principales (activamos /projects cuando exista)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${prefix}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${prefix}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${prefix}/tags`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${prefix}/about`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    // { url: `${prefix}/projects`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Rutas de posts publicados (sin drafts)
  const blogRoutes: MetadataRoute.Sitemap = allBlogs
    .filter((post) => !post.draft)
    .map((post) => {
      const postPath = post.path?.startsWith('/') ? post.path : `/${post.path}`
      return {
        url: `${prefix}${postPath}`,
        lastModified: post.lastmod ? new Date(post.lastmod) : new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    })

  return [...staticRoutes, ...blogRoutes]
}

/** @type {import("next-sitemap").IConfig} */
const siteUrl = 'https://cobalto-sec.tech'

export default {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/tags', '/api/*', '/drafts/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/drafts/'] },
    ],
  },
  transform: async (config, path) => {
    if (path.startsWith('/drafts')) return null
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  // Identidad del sitio
  title: 'Cobalto-Sec',
  author: 'Nicolás Padilla',
  headerTitle: 'Cobalto-Sec',
  description:
    'Pentesting, auditorías de seguridad y consultoría ofensiva. Blog técnico con proyectos reales en producción, código open source y documentación detallada.',
  language: 'es-AR',
  locale: 'es-AR',
  theme: 'dark', // system, dark, light

  // Canonical + repos
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cobalto-sec.tech',
  siteRepo: 'https://github.com/nicoPadi1002/cobalto-sec',

  // Imagen OG/SEO
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/og-default.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/og-default.png`,

  // Perfiles sociales
  mastodon: '',
  email: 'nicolas.cobaltosec@gmail.com',
  github: 'https://github.com/nicoPadi1002',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/nicopadilla-sec/',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',

  // UI
  stickyNav: true,

  // Analytics
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || process.env.NEXT_UMAMI_ID || '',
    },
  },

  // Newsletter (desactivado por ahora)
  newsletter: { provider: '' },

  // Comments (silenciado hasta configurar)
  comments: {
    provider: '',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'es',
    },
  },

  // Búsqueda
  search: {
    provider: 'kbar',
    kbarConfig: { searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json` },
  },
}

module.exports = siteMetadata

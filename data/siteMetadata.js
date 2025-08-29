/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  // Identidad del sitio
  title: 'Cobalto-Sec',
  author: 'Cobalto-Sec',
  headerTitle: 'Cobalto-Sec',
  description: 'Portafolio de seguridad ofensiva: pentesting, hardening y notas técnicas.',
  language: 'es-AR',
  locale: 'es-AR',
  theme: 'system', // system, dark, light

  // Canonical + repos
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cobalto-sec.tech',
  siteRepo: 'https://github.com/nicoPadi1002/cobalto-sec',

  // Imagen OG/SEO (el header usa data/logo.svg, no esto)
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/og-default.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/og-default.png`,

  // Perfiles sociales
  mastodon: '',
  email: '',
  github: 'https://github.com/nicoPadi1002',
  x: '',
  // twitter: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/nicolas-padilla-010b10252/',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',

  // UI
  stickyNav: false,

  // Analytics (silenciado hasta configurar)
  analytics: {
    umamiAnalytics: {
      // usa la env pública si existe; si no, queda vacío (no monta script)
      umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || process.env.NEXT_UMAMI_ID || '',
    },
  },

  // Newsletter (desactivado)
  newsletter: { provider: '' },

  // Comments (silenciado hasta configurar)
  comments: {
    provider: '', // '' => no renderiza Giscus
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

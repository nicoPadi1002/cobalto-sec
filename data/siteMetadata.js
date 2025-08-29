/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Cobalto-Sec',
  author: 'Cobalto-Sec',
  headerTitle: 'Cobalto-Sec',
  description: 'Portafolio de seguridad ofensiva: pentesting, hardening y notas técnicas.',
  language: 'es-AR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://cobalto-sec.tech',
  siteRepo: 'https://github.com/nicoPadi1002/cobalto-sec',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo-cobalto-b.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
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
  locale: 'es-AR',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // Desactivado por ahora (sin IDs)
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
      // src: '',
    },
    // plausibleAnalytics: {},
    // simpleAnalytics: {},
    // posthogAnalytics: {},
    // googleAnalytics: {},
  },
  newsletter: {
    // Desactivado por ahora
    provider: '',
  },
  comments: {
    // Desactivado por ahora
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
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
  },
}

module.exports = siteMetadata

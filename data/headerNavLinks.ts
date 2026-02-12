export interface NavItem {
  href?: string
  title: string
  children?: { href: string; title: string }[]
}

const headerNavLinks: NavItem[] = [
  { href: '/live', title: 'Live' },
  {
    title: 'Servicios',
    children: [
      { href: '/servicios/pentesting-para-empresas', title: 'Pentesting' },
      { href: '/servicios/auditoria-ciberseguridad-pymes', title: 'Auditoria' },
      { href: '/precios', title: 'Precios' },
      { href: '/metodologia', title: 'Metodologia' },
    ],
  },
  { href: '/casos', title: 'Casos' },
  { href: '/blog', title: 'Blog' },
  { href: '/sobre', title: 'Sobre' },
  { href: '/faq', title: 'FAQ' },
]

export default headerNavLinks

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full justify-between py-6 transition-all duration-300'
  if (siteMetadata.stickyNav) {
    headerClass +=
      ' sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-transparent dark:border-gray-800/50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <Logo />
        </div>
      </Link>
      <div className="flex items-center space-x-3 leading-5 sm:space-x-5">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-5 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => {
              const isServices = link.href === '/services'
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`link-underline font-medium whitespace-nowrap ${isServices ? 'text-red-500 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300' : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'}`}
                >
                  {link.title}
                </Link>
              )
            })}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

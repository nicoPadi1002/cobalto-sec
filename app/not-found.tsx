import Link from 'next/link'
import BugMascot from '@/components/BugMascot'

export const metadata = { title: 'Página no encontrada' }

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="text-red-600 dark:text-red-500">
        <BugMascot mode="squashed" size="xl" ariaLabel="Bug aplastado — 404" />
      </div>

      <p className="mt-8 font-mono text-sm tracking-widest text-red-500 uppercase dark:text-red-400">
        [ 404 · bug_squashed ]
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
        Página no encontrada
      </h1>

      <p className="mx-auto mt-4 max-w-md font-mono text-sm text-gray-600 dark:text-gray-400">
        $ cat /requested/path
        <br />
        cat: No such file or directory
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25"
        >
          Volver al inicio
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
        >
          Explorar el blog
        </Link>
      </div>
    </main>
  )
}

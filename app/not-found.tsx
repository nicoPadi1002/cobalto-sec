import Link from 'next/link'

export const metadata = { title: 'Página no encontrada' }

export default function NotFound() {
  return (
    <main className="prose mx-auto max-w-2xl py-10">
      <h1>404 Página no encontrada</h1>
      <p>No pudimos encontrar lo que buscabas.</p>
      <p>
        Volvé al <Link href="/">inicio</Link> o explorá el <Link href="/blog">blog</Link>.
      </p>
    </main>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Proyectos  Próximamente',
  description: 'Estamos preparando esta sección.',
}

export default function Page() {
  return (
    <main className="prose mx-auto max-w-2xl py-10">
      <h1>Próximamente</h1>
      <p>Estamos preparando esta sección de proyectos. Volvé pronto </p>
      <p>
        Mientras tanto, podés leer el <Link href="/blog">blog</Link> o ver las{' '}
        <Link href="/tags">etiquetas</Link>.
      </p>
    </main>
  )
}

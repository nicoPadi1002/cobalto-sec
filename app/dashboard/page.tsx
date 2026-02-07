import { genPageMetadata } from 'app/seo'
import DashboardShell from '@/components/dashboard/DashboardShell'

export const metadata = genPageMetadata({
  title: 'Dashboard',
  description: 'Private metrics dashboard for Cobalto-Sec.',
})

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <DashboardShell />
    </main>
  )
}

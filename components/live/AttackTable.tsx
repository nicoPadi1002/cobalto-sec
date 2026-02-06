interface Attack {
  timestamp: string
  country: string
  countryName: string
  activity: string
}

interface AttackTableProps {
  attacks: Attack[]
}

function countryFlag(code: string): string {
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('')
}

function relativeTime(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime()
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 1) return 'now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default function AttackTable({ attacks }: AttackTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10">
      <div className="p-5 pb-3 sm:p-6 sm:pb-3">
        <p className="text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Ataques Recientes
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-500 dark:border-gray-800 dark:text-gray-500">
              <th className="px-5 pb-2 font-medium sm:px-6">Hora</th>
              <th className="pb-2 font-medium">Origen</th>
              <th className="pr-5 pb-2 font-medium sm:pr-6">Actividad</th>
            </tr>
          </thead>
          <tbody>
            {attacks.map((attack, i) => (
              <tr
                key={i}
                className="border-b border-gray-50 transition-colors hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-gray-800/30"
              >
                <td className="px-5 py-2.5 font-mono text-xs whitespace-nowrap text-gray-500 sm:px-6 dark:text-gray-500">
                  {relativeTime(attack.timestamp)}
                </td>
                <td className="py-2.5 whitespace-nowrap">
                  <span className="mr-1.5">{countryFlag(attack.country)}</span>
                  <span className="text-gray-700 dark:text-gray-300">{attack.countryName}</span>
                </td>
                <td className="py-2.5 pr-5 sm:pr-6">
                  <p
                    className="max-w-[180px] truncate font-mono text-xs text-gray-600 sm:max-w-[320px] lg:max-w-[400px] dark:text-gray-400"
                    title={attack.activity}
                  >
                    {attack.activity}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface Credential {
  username: string
  password: string
  count: number
}

interface Command {
  command: string
  count: number
}

interface Country {
  code: string
  country: string
  count: number
}

interface TopCredentialsProps {
  credentials: Credential[]
  commands: Command[]
  countries: Country[]
}

function countryFlag(code: string): string {
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('')
}

export default function TopCredentials({ credentials, commands, countries }: TopCredentialsProps) {
  const maxCountry = countries.length > 0 ? countries[0].count : 1

  return (
    <div className="space-y-6">
      {/* Top Credentials */}
      <div className="rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10">
        <div className="p-5 pb-3 sm:p-6 sm:pb-3">
          <p className="text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
            Top Credenciales
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs text-gray-500 dark:border-gray-800 dark:text-gray-500">
                <th className="px-5 pb-2 font-medium sm:px-6">Usuario</th>
                <th className="pb-2 font-medium">Password</th>
                <th className="pr-5 pb-2 text-right font-medium sm:pr-6">Intentos</th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((cred, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 transition-colors hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-gray-800/30"
                >
                  <td className="px-5 py-2 font-mono text-xs text-cyan-600 sm:px-6 dark:text-cyan-400">
                    {cred.username}
                  </td>
                  <td className="py-2 font-mono text-xs text-gray-500 dark:text-gray-500">
                    {cred.password}
                  </td>
                  <td className="py-2 pr-5 text-right font-mono text-xs text-gray-700 sm:pr-6 dark:text-gray-300">
                    {cred.count.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Commands */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Top Comandos
        </p>
        <div className="space-y-3">
          {commands.map((cmd, i) => (
            <div key={i} className="flex items-center gap-3">
              <code className="min-w-0 flex-1 truncate rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {cmd.command}
              </code>
              <span className="shrink-0 font-mono text-xs text-gray-500 dark:text-gray-500">
                {cmd.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Countries */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-red-500/30 dark:hover:shadow-red-500/10">
        <p className="mb-4 text-sm font-semibold tracking-widest text-red-500 uppercase dark:text-red-400">
          Top Países
        </p>
        <div className="space-y-2.5">
          {countries.map((c, i) => {
            const pct = (c.count / maxCountry) * 100
            return (
              <div key={i}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-gray-700 dark:text-gray-300">
                    <span className="mr-1.5">{countryFlag(c.code)}</span>
                    {c.country}
                  </span>
                  <span className="font-mono text-gray-500 dark:text-gray-500">
                    {c.count.toLocaleString()}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-cyan-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

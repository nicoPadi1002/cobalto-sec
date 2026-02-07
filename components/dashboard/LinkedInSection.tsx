'use client'

export default function LinkedInSection() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold tracking-widest text-red-400 uppercase">LinkedIn</p>
        <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
          Coming Soon
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
          <p className="text-sm font-semibold text-gray-100">Connections</p>
          <p className="mt-2 font-mono text-2xl text-gray-500">&mdash;</p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
          <p className="text-sm font-semibold text-gray-100">Followers</p>
          <p className="mt-2 font-mono text-2xl text-gray-500">&mdash;</p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center">
          <p className="text-sm font-semibold text-gray-100">Profile Views</p>
          <p className="mt-2 font-mono text-2xl text-gray-500">&mdash;</p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        LinkedIn API requires app approval. Manual update planned for Phase 4.
      </p>
    </div>
  )
}

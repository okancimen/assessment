export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
        <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
      </span>
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  )
}

export function Callout({ color = 'indigo', children }: { color?: 'indigo' | 'amber' | 'emerald' | 'rose'; children: React.ReactNode }) {
  const styles = {
    indigo: 'bg-indigo-50 border-indigo-100',
    amber: 'bg-amber-50 border-amber-100',
    emerald: 'bg-emerald-50 border-emerald-100',
    rose: 'bg-rose-50 border-rose-100',
  }
  return (
    <div className={`${styles[color]} border rounded-2xl p-6`}>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  )
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  )
}

export function Cross({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
        <svg className="w-3 h-3 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  )
}

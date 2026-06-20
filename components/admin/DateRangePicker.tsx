'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const PRESETS = [
  { label: 'Yesterday', days: 1 },
  { label: '7 days',    days: 7 },
  { label: '30 days',   days: 30 },
  { label: '90 days',   days: 90 },
] as const

function toDateStr(d: Date) {
  return d.toISOString().slice(0, 10)
}

export default function DateRangePicker({ from, to }: { from: string; to: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [customFrom, setCustomFrom] = useState(from)
  const [customTo, setCustomTo] = useState(to)

  function applyRange(f: string, t: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('from', f)
    params.set('to', t)
    router.push(`?${params.toString()}`)
  }

  function applyPreset(days: number) {
    const now = new Date()
    const t = toDateStr(now)
    const f = toDateStr(new Date(now.getTime() - days * 24 * 60 * 60 * 1000))
    setCustomFrom(f)
    setCustomTo(t)
    applyRange(f, t)
  }

  function applyCustom() {
    if (customFrom && customTo && customFrom <= customTo) {
      applyRange(customFrom, customTo)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {PRESETS.map(({ label, days }) => {
        const now = new Date()
        const presetTo = toDateStr(now)
        const presetFrom = toDateStr(new Date(now.getTime() - days * 24 * 60 * 60 * 1000))
        const active = from === presetFrom && to === presetTo
        return (
          <button
            key={label}
            onClick={() => applyPreset(days)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              active
                ? 'bg-[#1d1d1f] text-white'
                : 'bg-white border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#1d1d1f]'
            }`}
          >
            {label}
          </button>
        )
      })}
      <div className="flex items-center gap-1.5 ml-1">
        <input
          type="date"
          value={customFrom}
          max={customTo}
          onChange={(e) => setCustomFrom(e.target.value)}
          className="text-xs border border-[#d2d2d7] rounded-full px-3 py-1.5 text-[#1d1d1f] bg-white focus:outline-none focus:border-[#1d1d1f]"
        />
        <span className="text-xs text-[#6e6e73]">–</span>
        <input
          type="date"
          value={customTo}
          min={customFrom}
          max={toDateStr(new Date())}
          onChange={(e) => setCustomTo(e.target.value)}
          className="text-xs border border-[#d2d2d7] rounded-full px-3 py-1.5 text-[#1d1d1f] bg-white focus:outline-none focus:border-[#1d1d1f]"
        />
        <button
          onClick={applyCustom}
          className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, InternshipTrack } from '@/types'

interface Cohort { id: string; name: string }

export default function InternshipFilterBar({ cohorts }: { cohorts: Cohort[] }) {
  const router = useRouter()
  const sp = useSearchParams()

  function update(key: string, value: string) {
    const params = new URLSearchParams(sp.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    router.push(`/admin/internship?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={sp.get('status') ?? ''}
        onChange={(e) => update('status', e.target.value)}
        className="border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
      >
        <option value="">All statuses</option>
        <option value="completed">Completed</option>
        <option value="in_progress">In progress</option>
        <option value="pending">Pending</option>
      </select>

      <select
        value={sp.get('track') ?? ''}
        onChange={(e) => update('track', e.target.value)}
        className="border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
      >
        <option value="">All tracks</option>
        {INTERNSHIP_TRACKS.map((t) => (
          <option key={t} value={t}>{INTERNSHIP_TRACK_LABELS[t]}</option>
        ))}
      </select>

      {cohorts.length > 0 && (
        <select
          value={sp.get('cohort_id') ?? ''}
          onChange={(e) => update('cohort_id', e.target.value)}
          className="border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
        >
          <option value="">All cohorts</option>
          <option value="none">No cohort</option>
          {cohorts.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      )}
    </div>
  )
}

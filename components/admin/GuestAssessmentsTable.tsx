'use client'

import { useState } from 'react'

export interface GuestAssessment {
  id: string
  guest_name: string | null
  guest_age: number | null
  guest_country: string | null
  guest_city: string | null
  assessment_type: string | null
  status: string
  created_at: string
}

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
    status === 'in_progress' ? 'bg-amber-100 text-amber-700' :
    'bg-slate-100 text-slate-500'
  const label = status === 'completed' ? 'Completed' : status === 'in_progress' ? 'In progress' : 'Pending'
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles}`}>
      {label}
    </span>
  )
}

function TypeBadge({ type }: { type: string }) {
  const styles =
    type === 'internship' ? 'bg-purple-50 text-purple-600' :
    type === 'personality' ? 'bg-emerald-50 text-emerald-600' :
    'bg-blue-50 text-blue-600'
  const label = type === 'internship' ? 'Internship' : type === 'personality' ? 'Personality' : 'Academic'
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${styles}`}>
      {label}
    </span>
  )
}

export default function GuestAssessmentsTable({ assessments: initial }: { assessments: GuestAssessment[] }) {
  const [assessments, setAssessments] = useState(initial)
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function handleDelete(assessmentId: string, type: string | null) {
    setDeletingId(assessmentId)
    try {
      const res = await fetch('/api/admin/assessments', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assessmentId, type }),
      })
      if (res.ok) setAssessments((prev) => prev.filter((a) => a.id !== assessmentId))
    } finally {
      setDeletingId(null)
      setConfirmId(null)
    }
  }

  function resultsHref(a: GuestAssessment): string {
    return a.assessment_type === 'personality'
      ? `/personality-assessment/results/${a.id}`
      : `/results/${a.id}`
  }

  if (assessments.length === 0) {
    return <p className="px-6 py-8 text-sm text-center" style={{ color: '#64748B' }}>No guest assessments yet.</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b" style={{ borderColor: '#E2E6EF' }}>
            {['Name', 'Age', 'Location', 'Assessment type', 'Status', 'Date', ''].map((h, i) => (
              <th key={i} className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#64748B' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assessments.map((a) => (
            <tr key={a.id} className="border-b last:border-0" style={{ borderColor: '#E2E6EF' }}>
              <td className="px-6 py-3 font-medium" style={{ color: '#0F172A' }}>{a.guest_name ?? '—'}</td>
              <td className="px-6 py-3" style={{ color: '#64748B' }}>{a.guest_age ?? '—'}</td>
              <td className="px-6 py-3 text-xs" style={{ color: '#64748B' }}>
                {a.guest_city && a.guest_country
                  ? `${a.guest_city}, ${a.guest_country}`
                  : a.guest_country ?? <span style={{ color: '#CBD5E1' }}>—</span>}
              </td>
              <td className="px-6 py-3"><TypeBadge type={a.assessment_type ?? 'academic'} /></td>
              <td className="px-6 py-3"><StatusBadge status={a.status} /></td>
              <td className="px-6 py-3 text-xs" style={{ color: '#64748B' }}>
                {new Date(a.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-6 py-3 text-right whitespace-nowrap">
                <div className="flex items-center justify-end gap-3">
                  {a.status === 'completed' && (
                    <a
                      href={resultsHref(a)}
                      className="text-xs font-semibold hover:underline"
                      style={{ color: '#4F46E5' }}
                    >
                      View
                    </a>
                  )}
                  {confirmId === a.id ? (
                    <span className="flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(a.id, a.assessment_type)}
                        disabled={deletingId === a.id}
                        className="text-[10px] font-semibold text-white bg-red-500 hover:bg-red-600 px-2.5 py-1 rounded-full transition-colors disabled:opacity-50"
                      >
                        {deletingId === a.id ? 'Deleting…' : 'Confirm'}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="text-[10px] font-semibold hover:opacity-70 px-2.5 py-1 rounded-full border transition-colors"
                        style={{ color: '#64748B', borderColor: '#E2E6EF' }}
                      >
                        Cancel
                      </button>
                    </span>
                  ) : (
                    <button
                      onClick={() => setConfirmId(a.id)}
                      className="p-1 rounded transition-colors"
                      style={{ color: '#CBD5E1' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#EF4444')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                      title="Delete assessment"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

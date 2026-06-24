'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, InternshipTrack, ReadinessTier } from '@/types'

interface CandidateDetail {
  assessment_id: string
  child_name: string
  school_name: string
  year_group: string
  personal_statement: string | null
  cv_url: string | null
  track_preferences: string[]
  admin_assigned_track: string | null
  cohort_id: string | null
  cohorts: { id: string; name: string }[]
  assessment_status: string
  scores: {
    aptitude: number
    domain: number
    soft_skills: number
    overall: number
    tier: ReadinessTier
    track_fit: Record<InternshipTrack, number>
  } | null
  ai_summary: string | null
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const color = value >= 70 ? '#22C55E' : value >= 45 ? '#F59E0B' : '#EF4444'
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-[#6e6e73]">{label}</span>
        <span className="font-bold" style={{ color }}>{value}</span>
      </div>
      <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}

export default function AdminCandidateDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [data, setData] = useState<CandidateDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('')
  const [selectedCohort, setSelectedCohort] = useState('')
  const [saving, setSaving] = useState('')
  const [cvLoading, setCvLoading] = useState(false)

  useEffect(() => {
    fetch(`/api/admin/internship/${id}/detail`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) { setError(d.error); return }
        setData(d)
        setSelectedTrack(d.admin_assigned_track ?? '')
        setSelectedCohort(d.cohort_id ?? '')
      })
      .catch(() => setError('Failed to load'))
      .finally(() => setLoading(false))
  }, [id])

  async function assignTrack() {
    setSaving('track')
    await fetch(`/api/admin/internship/${id}/assign-track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ track: selectedTrack || null }),
    })
    setSaving('')
    if (data) setData({ ...data, admin_assigned_track: selectedTrack || null })
  }

  async function assignCohort() {
    setSaving('cohort')
    await fetch(`/api/admin/internship/${id}/assign-cohort`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cohort_id: selectedCohort || null }),
    })
    setSaving('')
    if (data) setData({ ...data, cohort_id: selectedCohort || null })
  }

  async function unlockRetake() {
    if (!confirm('Reset this assessment and unlock a retake?')) return
    setSaving('retake')
    await fetch(`/api/admin/internship/${id}/unlock-retake`, { method: 'POST' })
    setSaving('')
    router.push('/admin/internship')
  }

  async function downloadCv() {
    setCvLoading(true)
    const res = await fetch(`/api/admin/internship/cv/${id}`)
    const { url, error: e } = await res.json()
    setCvLoading(false)
    if (e) { alert(e); return }
    window.open(url, '_blank')
  }

  if (loading) return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (error || !data) return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
      <div className="text-center space-y-3">
        <p className="text-red-600 text-sm">{error}</p>
        <Link href="/admin/internship" className="text-[#4F46E5] text-sm hover:underline">← Back</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/internship" className="text-sm text-[#4F46E5] hover:underline">← All candidates</Link>
          <span className="text-[#d2d2d7]">/</span>
          <span className="text-sm text-[#6e6e73]">{data.child_name}</span>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-[#1d1d1f]">{data.child_name}</h1>
              <p className="text-sm text-[#6e6e73]">{data.school_name} · {data.year_group}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              data.assessment_status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
              data.assessment_status === 'in_progress' ? 'bg-amber-100 text-amber-700' :
              'bg-[#f5f5f7] text-[#6e6e73]'
            }`}>
              {data.assessment_status}
            </span>
          </div>

          {/* Track prefs */}
          <div>
            <p className="text-xs text-[#6e6e73] font-semibold uppercase tracking-wide mb-2">Track preferences</p>
            <div className="flex flex-wrap gap-2">
              {data.track_preferences.map((t, i) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-[#eef2ff] text-[#4F46E5] text-xs font-medium">
                  {i + 1}. {INTERNSHIP_TRACK_LABELS[t as InternshipTrack] ?? t}
                </span>
              ))}
            </div>
          </div>

          {/* Personal statement */}
          {data.personal_statement && (
            <div>
              <p className="text-xs text-[#6e6e73] font-semibold uppercase tracking-wide mb-2">Personal statement</p>
              <p className="text-sm text-[#1d1d1f] leading-relaxed bg-[#f5f5f7] rounded-xl p-4">{data.personal_statement}</p>
            </div>
          )}

          {/* CV */}
          {data.cv_url && (
            <button
              onClick={downloadCv}
              disabled={cvLoading}
              className="flex items-center gap-2 text-sm text-[#4F46E5] font-semibold hover:underline disabled:opacity-60"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {cvLoading ? 'Loading…' : 'Download CV'}
            </button>
          )}
        </div>

        {/* Scores */}
        {data.scores && (
          <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-[#1d1d1f]">Assessment scores</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                data.scores.tier === 'Internship Ready' ? 'bg-emerald-100 text-emerald-700' :
                data.scores.tier === 'Developing' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {data.scores.tier}
              </span>
            </div>
            <div className="space-y-4">
              <ScoreBar label="General Aptitude (30%)" value={data.scores.aptitude} />
              <ScoreBar label="Domain Knowledge (35%)" value={data.scores.domain} />
              <ScoreBar label="Workplace Skills (35%)" value={data.scores.soft_skills} />
              <div className="border-t border-[#f5f5f7] pt-3">
                <ScoreBar label="Overall Score" value={data.scores.overall} />
              </div>
            </div>
            {/* Track fit */}
            <div>
              <p className="text-xs text-[#6e6e73] font-semibold uppercase tracking-wide mb-3">Track fit (interest profile)</p>
              <div className="space-y-2">
                {INTERNSHIP_TRACKS.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="text-xs text-[#6e6e73] w-32 flex-shrink-0">{INTERNSHIP_TRACK_LABELS[t]}</span>
                    <div className="flex-1 h-1.5 bg-[#f5f5f7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: `${data.scores!.track_fit[t] ?? 0}%` }} />
                    </div>
                    <span className="text-xs font-medium text-[#6e6e73] w-8 text-right">{data.scores!.track_fit[t] ?? 0}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI summary */}
        {data.ai_summary && (
          <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
            <h2 className="text-base font-semibold text-[#1d1d1f]">AI summary</h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed">{data.ai_summary}</p>
          </div>
        )}

        {/* Admin actions */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-5">
          <h2 className="text-base font-semibold text-[#1d1d1f]">Admin actions</h2>

          {/* Assign track */}
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="block text-xs text-[#6e6e73] font-semibold mb-1.5">Assigned track</label>
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="w-full border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="">Student&apos;s preference</option>
                {INTERNSHIP_TRACKS.map((t) => (
                  <option key={t} value={t}>{INTERNSHIP_TRACK_LABELS[t]}</option>
                ))}
              </select>
            </div>
            <button
              onClick={assignTrack}
              disabled={saving === 'track'}
              className="px-4 py-2 bg-[#4F46E5] text-white rounded-xl text-sm font-semibold hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
            >
              {saving === 'track' ? 'Saving…' : 'Save'}
            </button>
          </div>

          {/* Assign cohort */}
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="block text-xs text-[#6e6e73] font-semibold mb-1.5">Cohort</label>
              <select
                value={selectedCohort}
                onChange={(e) => setSelectedCohort(e.target.value)}
                className="w-full border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="">No cohort</option>
                {data.cohorts.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <button
              onClick={assignCohort}
              disabled={saving === 'cohort'}
              className="px-4 py-2 bg-[#4F46E5] text-white rounded-xl text-sm font-semibold hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
            >
              {saving === 'cohort' ? 'Saving…' : 'Save'}
            </button>
          </div>

          {/* Unlock retake */}
          <div className="pt-2 border-t border-[#f5f5f7]">
            <button
              onClick={unlockRetake}
              disabled={saving === 'retake'}
              className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-semibold hover:bg-red-100 disabled:opacity-60 transition-colors"
            >
              {saving === 'retake' ? 'Resetting…' : 'Unlock retake (resets assessment)'}
            </button>
            <p className="text-xs text-[#6e6e73] mt-1">This will delete the current session and all answers, allowing the student to start again.</p>
          </div>
        </div>

        {/* Full results link */}
        <div className="text-center">
          <Link href={`/internship/results/${id}`} className="text-sm text-[#4F46E5] hover:underline font-medium">
            View student-facing results report →
          </Link>
        </div>
      </div>
    </div>
  )
}

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import Navbar from '@/components/dashboard/Navbar'
import InternshipFilterBar from '@/components/admin/InternshipFilterBar'
import { INTERNSHIP_TRACK_LABELS, INTERNSHIP_QUESTIONS_PER_SUBJECT, InternshipTrack, InternshipSubject } from '@/types'

export const dynamic = 'force-dynamic'

const TOTAL_QUESTIONS = 34 // 5+5+10+8+6

function completionPct(
  status: string,
  session: { completed_subjects: string[]; question_index: number } | null,
): number {
  if (status === 'completed') return 100
  if (!session || status === 'pending') return 0
  const completedQ = (session.completed_subjects ?? []).reduce(
    (sum, s) => sum + (INTERNSHIP_QUESTIONS_PER_SUBJECT[s as InternshipSubject] ?? 0),
    0,
  )
  return Math.min(100, Math.round(((completedQ + (session.question_index ?? 0)) / TOTAL_QUESTIONS) * 100))
}

function ProgressBar({ pct, status }: { pct: number; status: string }) {
  const color =
    status === 'completed' ? '#22C55E' :
    status === 'in_progress' ? '#F59E0B' : '#d2d2d7'
  return (
    <div className="flex items-center gap-2 min-w-[80px]">
      <div className="flex-1 h-1.5 bg-[#f5f5f7] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-medium tabular-nums" style={{ color: pct === 0 ? '#d2d2d7' : color }}>
        {pct}%
      </span>
    </div>
  )
}

function tierColor(overall: number | undefined) {
  if (overall == null) return 'text-[#6e6e73]'
  if (overall >= 70) return 'text-emerald-600'
  if (overall >= 45) return 'text-amber-600'
  return 'text-red-600'
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    completed: 'bg-emerald-100 text-emerald-700',
    in_progress: 'bg-amber-100 text-amber-700',
    pending: 'bg-[#f5f5f7] text-[#6e6e73]',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] ?? styles.pending}`}>
      {status === 'completed' ? 'Completed' : status === 'in_progress' ? 'In progress' : 'Pending'}
    </span>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export default async function AdminInternshipPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; track?: string; cohort_id?: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  if (!allowed.includes(user.email?.toLowerCase() ?? '')) redirect('/dashboard')

  const db = createAdminClient()

  const { data: profiles } = await db
    .from('internship_profiles')
    .select('*, assessments(id, status, created_at), children(name), cohorts(name)')
    .order('created_at', { ascending: false })

  const assessmentIds = (profiles ?? []).map((p) => (p.assessments as { id: string } | null)?.id).filter(Boolean) as string[]

  const [{ data: results }, { data: sessions }, { data: allCohorts }] = await Promise.all([
    assessmentIds.length > 0
      ? db.from('results').select('assessment_id, subject_scores').in('assessment_id', assessmentIds)
      : { data: [] },
    assessmentIds.length > 0
      ? db.from('assessment_sessions')
          .select('assessment_id, completed_subjects, question_index')
          .in('assessment_id', assessmentIds)
      : { data: [] },
    db.from('cohorts').select('id, name').order('start_date', { ascending: false }),
  ])

  const resultsMap: Record<string, Record<string, number>> = {}
  for (const r of results ?? []) {
    resultsMap[r.assessment_id] = r.subject_scores as Record<string, number>
  }

  const sessionsMap: Record<string, { completed_subjects: string[]; question_index: number }> = {}
  for (const s of sessions ?? []) {
    sessionsMap[s.assessment_id] = s
  }

  // Stats (all candidates, before filtering)
  const all = profiles ?? []
  const stats = {
    total: all.length,
    completed: all.filter((p) => (p.assessments as { status: string } | null)?.status === 'completed').length,
    in_progress: all.filter((p) => (p.assessments as { status: string } | null)?.status === 'in_progress').length,
    pending: all.filter((p) => {
      const s = (p.assessments as { status: string } | null)?.status
      return !s || s === 'pending'
    }).length,
  }

  // Apply filters
  const { status: filterStatus, track: filterTrack, cohort_id: filterCohort } = await searchParams

  const filtered = all.filter((p) => {
    const status = (p.assessments as { status: string } | null)?.status ?? 'pending'
    const effectiveTrack = (p.admin_assigned_track ?? p.track_preferences?.[0]) as string | undefined
    const cohortId = p.cohort_id as string | null
    if (filterStatus && status !== filterStatus) return false
    if (filterTrack && effectiveTrack !== filterTrack) return false
    if (filterCohort === 'none' && cohortId != null) return false
    if (filterCohort && filterCohort !== 'none' && cohortId !== filterCohort) return false
    return true
  })

  const hasFilters = filterStatus || filterTrack || filterCohort

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Internship Candidates</h1>
            <p className="text-sm text-[#6e6e73] mt-1">{stats.total} total applicant{stats.total !== 1 ? 's' : ''}</p>
          </div>
          <Link href="/admin/cohorts" className="text-sm text-[#4F46E5] font-semibold hover:underline">
            Manage cohorts →
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total', value: stats.total, color: 'text-[#1d1d1f]' },
            { label: 'Completed', value: stats.completed, color: 'text-emerald-600' },
            { label: 'In progress', value: stats.in_progress, color: 'text-amber-600' },
            { label: 'Pending', value: stats.pending, color: 'text-[#6e6e73]' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-[#d2d2d7] px-5 py-4">
              <p className="text-xs text-[#6e6e73] font-medium">{label}</p>
              <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <Suspense>
          <InternshipFilterBar cohorts={allCohorts ?? []} />
        </Suspense>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-14 text-center text-[#6e6e73] text-sm">
              {hasFilters ? 'No candidates match the selected filters.' : 'No applications yet.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#f5f5f7]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden md:table-cell">School / Year</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">Track</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden lg:table-cell">Cohort</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden xl:table-cell">Applied</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">Progress</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Score</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Status</th>
                    <th className="text-right px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => {
                    const aId = (p.assessments as { id: string } | null)?.id
                    const createdAt = (p.assessments as { created_at: string } | null)?.created_at
                    const status = (p.assessments as { status: string } | null)?.status ?? 'pending'
                    const effectiveTrack = (p.admin_assigned_track ?? p.track_preferences?.[0]) as InternshipTrack | undefined
                    const scores = aId ? resultsMap[aId] : null
                    const overall = scores?.overall
                    const session = aId ? sessionsMap[aId] ?? null : null
                    const pct = completionPct(status, session)
                    return (
                      <tr key={p.id} className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors">
                        <td className="px-5 py-3 font-medium text-[#1d1d1f]">{(p.children as { name: string } | null)?.name ?? '—'}</td>
                        <td className="px-5 py-3 text-[#6e6e73] hidden md:table-cell">
                          {p.school_name}<br /><span className="text-xs">{p.year_group}</span>
                        </td>
                        <td className="px-5 py-3 text-[#6e6e73] hidden sm:table-cell">
                          {effectiveTrack ? INTERNSHIP_TRACK_LABELS[effectiveTrack] : '—'}
                          {p.admin_assigned_track && <span className="ml-1 text-xs text-[#4F46E5]">(admin)</span>}
                        </td>
                        <td className="px-5 py-3 text-[#6e6e73] hidden lg:table-cell">
                          {(p.cohorts as { name: string } | null)?.name ?? '—'}
                        </td>
                        <td className="px-5 py-3 text-[#6e6e73] text-xs hidden xl:table-cell">
                          {createdAt ? formatDate(createdAt) : '—'}
                        </td>
                        <td className="px-5 py-3 hidden sm:table-cell">
                          <ProgressBar pct={pct} status={status} />
                        </td>
                        <td className={`px-5 py-3 text-right font-bold ${tierColor(overall)}`}>
                          {overall != null ? overall : '—'}
                        </td>
                        <td className="px-5 py-3"><StatusBadge status={status} /></td>
                        <td className="px-5 py-3 text-right">
                          <Link href={`/admin/internship/${aId ?? p.id}`} className="text-[#4F46E5] hover:underline text-xs font-semibold">
                            View
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

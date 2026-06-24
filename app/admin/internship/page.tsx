import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import { INTERNSHIP_TRACK_LABELS, InternshipTrack } from '@/types'

export const dynamic = 'force-dynamic'

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

export default async function AdminInternshipPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single()
  if (!profile?.is_admin) redirect('/dashboard')

  const { data: profiles } = await supabase
    .from('internship_profiles')
    .select('*, assessments(id, status, created_at), children(name), cohorts(name)')
    .order('created_at', { ascending: false })

  const assessmentIds = (profiles ?? []).map((p) => (p.assessments as { id: string } | null)?.id).filter(Boolean) as string[]

  const { data: results } = assessmentIds.length > 0
    ? await supabase.from('results').select('assessment_id, subject_scores, overall_score').in('assessment_id', assessmentIds)
    : { data: [] }

  const resultsMap: Record<string, { subject_scores: Record<string, number>; overall_score: number }> = {}
  for (const r of results ?? []) {
    resultsMap[r.assessment_id] = r
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Internship Candidates</h1>
            <p className="text-sm text-[#6e6e73] mt-1">{(profiles ?? []).length} total applicant{(profiles ?? []).length !== 1 ? 's' : ''}</p>
          </div>
          <Link href="/admin/cohorts" className="text-sm text-[#4F46E5] font-semibold hover:underline">
            Manage cohorts →
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
          {!(profiles?.length) ? (
            <div className="p-14 text-center text-[#6e6e73] text-sm">No applications yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#f5f5f7]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden md:table-cell">School / Year</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">Track</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden lg:table-cell">Cohort</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Score</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Status</th>
                    <th className="text-right px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.map((p) => {
                    const aId = (p.assessments as { id: string } | null)?.id
                    const status = (p.assessments as { status: string } | null)?.status ?? 'pending'
                    const effectiveTrack = (p.admin_assigned_track ?? p.track_preferences?.[0]) as InternshipTrack | undefined
                    const r = aId ? resultsMap[aId] : null
                    const overall = (r?.subject_scores as Record<string, number> | undefined)?.overall
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

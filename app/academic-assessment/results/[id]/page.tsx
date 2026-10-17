import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { SUBJECT_LABELS, SUBJECT_DESCRIPTIONS } from '@/types'

type SubjectResult = {
  raw_score: number
  standardized_score: number
  percentage: number
  topics: Record<string, { correct: number; total: number }>
}

function ScoreBand({ score }: { score: number }) {
  if (score >= 120) return <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Well Above Average</span>
  if (score >= 110) return <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Above Average</span>
  if (score >= 90)  return <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">Average</span>
  if (score >= 80)  return <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Below Average</span>
  return <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">Needs Support</span>
}

function ScoreRing({ score }: { score: number }) {
  const pct = Math.min(100, Math.max(0, ((score - 70) / 60) * 100))
  const r = 44
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  const color = score >= 110 ? '#10b981' : score >= 90 ? '#4F46E5' : score >= 80 ? '#f59e0b' : '#ef4444'

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <circle cx="60" cy="60" r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
      <circle
        cx="60" cy="60" r={r} fill="none"
        stroke={color} strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="56" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1d1d1f">{score}</text>
      <text x="60" y="72" textAnchor="middle" fontSize="10" fill="#6e6e73">out of 130</text>
    </svg>
  )
}

export default async function GuestAcademicResultsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const cookieStore = await cookies()
  const guestToken = cookieStore.get('ac_tok')?.value
  const admin = createAdminClient()

  if (user) {
    // Logged-in user: claim if token matches, then redirect to full results
    if (guestToken) {
      const { data: guestAssessment } = await admin
        .from('assessments')
        .select('id, guest_name, guest_age, guest_token')
        .eq('id', id)
        .eq('guest_token', guestToken)
        .single()

      if (guestAssessment) {
        const approxDob = ageToDob(guestAssessment.guest_age ?? 10)
        const { data: child } = await admin
          .from('children')
          .insert({ name: guestAssessment.guest_name ?? 'Child', date_of_birth: approxDob, parent_id: user.id })
          .select('id')
          .single()
        if (child) {
          await admin
            .from('assessments')
            .update({ child_id: child.id, guest_token: null })
            .eq('id', id)
        }
        redirect(`/results/${id}`)
      }
    }
    // Check if this assessment belongs to the user already
    const { data: owned } = await admin
      .from('assessments')
      .select('id, child_id, children(parent_id)')
      .eq('id', id)
      .single()
    if (owned?.children) {
      const child = owned.children as unknown as { parent_id: string }
      if (child.parent_id === user.id) redirect(`/results/${id}`)
    }
    redirect('/academic-assessment')
  }

  // Guest flow
  if (!guestToken) redirect('/academic-assessment')

  const { data: assessment } = await admin
    .from('assessments')
    .select('id, status, guest_name, guest_token')
    .eq('id', id)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) redirect('/academic-assessment')
  if (assessment.status !== 'completed') {
    redirect(`/assessment/${id}/question`)
  }

  const { data: result } = await admin
    .from('results')
    .select('overall_score, standardized_score, subject_scores')
    .eq('assessment_id', id)
    .single()

  if (!result) notFound()

  const childName = assessment.guest_name ?? 'Your child'
  const stdScore = result.standardized_score ?? 100
  const subjectScores = result.subject_scores as Record<string, SubjectResult>
  const subjects = ['english', 'mathematics', 'verbal_reasoning', 'nonverbal_reasoning'] as const
  const claimUrl = `/api/assessment/claim?assessmentId=${id}&token=${guestToken}`

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <PublicNav />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10 space-y-6">

        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">{childName}&apos;s Academic Results</h1>
          <p className="text-sm text-[#6e6e73] mt-1">Adaptive assessment · 4 subjects · 60 questions</p>
        </div>

        {/* Overall score card */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 text-center space-y-3">
          <p className="text-sm font-semibold text-[#6e6e73]">Overall Standardised Score</p>
          <ScoreRing score={stdScore} />
          <ScoreBand score={stdScore} />
          <p className="text-xs text-[#6e6e73] max-w-xs mx-auto">
            Standardised score (mean 100, SD 15) relative to age-expected norms.
          </p>
        </div>

        {/* Subject scores — free */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">Subject Scores</h2>
          <div className="grid gap-3">
            {subjects.map((subject) => {
              const s = subjectScores?.[subject]
              const score = s?.standardized_score ?? 100
              return (
                <div key={subject} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-[#1d1d1f]">{SUBJECT_LABELS[subject]}</p>
                    <p className="text-xs text-[#6e6e73] mt-0.5">{SUBJECT_DESCRIPTIONS[subject]}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-[#4F46E5]">{score}</p>
                    <ScoreBand score={score} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Locked section — topic detail + AI insights */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden relative">
          {/* Blurred preview */}
          <div className="p-6 space-y-3 blur-sm select-none pointer-events-none" aria-hidden="true">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-4 space-y-2">
                <div className="h-3 bg-[#d2d2d7] rounded-full w-1/3" />
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-10 bg-[#e5e7eb] rounded-xl" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-[2px] px-6 text-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">
              <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-base font-bold text-[#1d1d1f]">Unlock the full report — free</p>
            <ul className="text-sm text-[#3d3d3f] space-y-2 text-left max-w-xs w-full">
              {[
                'Topic-by-topic breakdown — your child\'s exact weak areas',
                'AI action plan — specific next steps for each subject',
                'Percentile ranking + UK, US, PISA & IB context',
                'Save the report & track growth when you retake',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <Link
                href={`/auth/register?redirect=${encodeURIComponent(claimUrl)}`}
                className="flex-1 bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors text-center"
              >
                Create Free Account
              </Link>
              <Link
                href={`/auth/login?redirect=${encodeURIComponent(claimUrl)}`}
                className="flex-1 border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#f5f5f7] transition-colors text-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Personality nudge */}
        <div className="bg-[#fffbeb] rounded-3xl border border-[#fde68a] p-6 text-center space-y-3">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">One more thing</p>
          <h3 className="text-base font-bold text-[#1d1d1f]">Which character strengths will drive {childName}&apos;s success?</h3>
          <p className="text-sm text-[#92400e] leading-relaxed max-w-sm mx-auto">
            Academic scores show what your child knows. Character strengths predict what they&apos;ll do with it.
            Free 5-minute VIA-backed survey — no account needed.
          </p>
          <Link
            href="/personality-assessment"
            className="inline-block bg-[#D97706] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#B45309] transition-colors shadow-sm"
          >
            Discover character strengths →
          </Link>
        </div>

      </main>
      <PublicFooter />
    </div>
  )
}

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

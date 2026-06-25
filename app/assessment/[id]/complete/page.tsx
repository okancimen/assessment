import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import CompleteClient from './CompleteClient'

export default async function CompletePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: assessment } = await supabase
    .from('assessments')
    .select('status, assessment_type, children(parent_id, student_user_id, name)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const child = assessment.children as unknown as { parent_id: string; student_user_id: string | null; name: string }
  const isInternship = assessment.assessment_type === 'internship'

  const authorized = isInternship
    ? child.parent_id === user.id || child.student_user_id === user.id
    : child.parent_id === user.id

  if (!authorized) redirect('/dashboard')

  if (isInternship) {
    if (assessment.status !== 'completed') {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
      await fetch(`${siteUrl}/api/assessment/${id}/complete`, { method: 'POST' }).catch(() => {})
    }
    const name = child.name?.split(' ')[0] ?? 'there'
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#4F46E5] via-emerald-400 to-[#4F46E5]" />
            <div className="p-10 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto">
                <svg className="w-9 h-9 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Well done, {name}!</h1>
                <p className="text-[#6e6e73] text-sm leading-relaxed max-w-sm mx-auto">
                  You&apos;ve completed all four phases of the internship assessment. Your personalised readiness report has been generated.
                </p>
              </div>
              <div className="bg-[#f5f5f7] rounded-2xl p-5 text-left space-y-3">
                <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">Your report includes</p>
                {[
                  { icon: '◎', label: 'Readiness tier', desc: 'Internship Ready, Developing, or Needs Support' },
                  { icon: '✦', label: 'AI-generated summary', desc: 'A personalised write-up based on your performance' },
                  { icon: '◈', label: 'Phase insights', desc: 'Strengths and one growth area per phase, on demand' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-[#4F46E5] text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-[#1d1d1f]">{item.label}</p>
                      <p className="text-xs text-[#6e6e73]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/assessment/${id}/results`}
                className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#4338CA] transition-colors"
              >
                View your report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-xs text-[#6e6e73]">
                Your report is saved and always accessible from your{' '}
                <Link href="/dashboard" className="text-[#4F46E5] hover:underline font-medium">dashboard</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <CompleteClient assessmentId={id} childName={child.name} />
}

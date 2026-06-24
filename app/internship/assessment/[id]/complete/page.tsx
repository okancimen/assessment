import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function InternshipCompletePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Trigger complete endpoint if not already done (idempotent upsert)
  const { data: assessment } = await supabase
    .from('assessments')
    .select('status')
    .eq('id', id)
    .single()

  if (!assessment) redirect('/dashboard')

  if (assessment.status !== 'completed') {
    // Trigger server-side completion
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    await fetch(`${siteUrl}/api/internship/${id}/complete`, { method: 'POST' }).catch(() => {})
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Assessment complete!</h1>
          <p className="text-[#6e6e73] text-sm leading-relaxed max-w-xs mx-auto">
            Thank you for completing the internship assessment. Your personalised readiness report is ready.
          </p>
        </div>
        <Link
          href={`/internship/results/${id}`}
          className="inline-block bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#4338CA] transition-colors"
        >
          View your report →
        </Link>
        <p className="text-xs text-[#6e6e73]">
          Your results have been saved and are always available in your{' '}
          <Link href="/dashboard" className="text-[#4F46E5] hover:underline">dashboard</Link>.
        </p>
      </div>
    </div>
  )
}

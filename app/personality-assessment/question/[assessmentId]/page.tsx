import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { getQuestions } from '@/lib/personality-questions'
import PersonalityQuestionClient from '@/app/strengths/[assessmentId]/question/PersonalityQuestionClient'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export default async function GuestQuestionPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>
  searchParams: Promise<{ locale?: string }>
}) {
  const { assessmentId } = await params
  const { locale = 'en' } = await searchParams

  const cookieStore = await cookies()
  const guestToken = cookieStore.get('pg_tok')?.value
  if (!guestToken) redirect('/personality-assessment')

  const admin = createAdminClient()
  const { data: assessment } = await admin
    .from('personality_assessments')
    .select('id, status, age_tier, guest_name, guest_token')
    .eq('id', assessmentId)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) notFound()
  if (assessment.status === 'completed') {
    redirect(`/personality-assessment/results/${assessmentId}`)
  }

  const tier = assessment.age_tier as 1 | 2 | 3 | 4
  const questions = getQuestions(tier, locale)

  const { data: answersData } = await admin
    .from('personality_answers')
    .select('question_key, score')
    .eq('assessment_id', assessmentId)

  const savedAnswers: Record<string, number> = {}
  for (const a of answersData ?? []) {
    savedAnswers[a.question_key] = a.score
  }

  return (
    <>
      <PublicNav />
      <PersonalityQuestionClient
        assessmentId={assessmentId}
        childName={assessment.guest_name ?? 'your child'}
        questions={questions}
        savedAnswers={savedAnswers}
        locale={locale}
        resultsHref={`/personality-assessment/results/${assessmentId}`}
      />
      <PublicFooter />
    </>
  )
}

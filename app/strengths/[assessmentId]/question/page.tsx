import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { getQuestions } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import PersonalityQuestionClient from './PersonalityQuestionClient'

export default async function StrengthsQuestionPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>
  searchParams?: Promise<{ locale?: string }>
}) {
  const { assessmentId } = await params
  const sp = await searchParams
  const locale = sp?.locale ?? 'en'
  const t = getPersonalityI18n(locale)

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: assessment } = await supabase
    .from('personality_assessments')
    .select('id, status, age_tier, child_id, children(name)')
    .eq('id', assessmentId)
    .eq('parent_id', user.id)
    .single()

  if (!assessment) notFound()
  if (assessment.status === 'completed') {
    redirect(`/strengths/${assessmentId}/results?locale=${locale}`)
  }

  const tier = assessment.age_tier as 1 | 2 | 3 | 4
  const questions = getQuestions(tier)

  // Load existing answers so the parent can resume
  const { data: answersData } = await supabase
    .from('personality_answers')
    .select('question_key, score')
    .eq('assessment_id', assessmentId)

  const savedAnswers: Record<string, number> = {}
  for (const a of answersData ?? []) {
    savedAnswers[a.question_key] = a.score
  }

  const child = assessment.children as unknown as { name: string }

  return (
    <PersonalityQuestionClient
      assessmentId={assessmentId}
      childName={child.name}
      questions={questions}
      savedAnswers={savedAnswers}
      locale={locale}
      t={t}
    />
  )
}

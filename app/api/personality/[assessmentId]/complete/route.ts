import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import {
  getQuestions,
  computeTraitScores,
  getTopStrengths,
  getGrowthAreas,
  Trait,
} from '@/lib/personality-questions'
import { generatePersonalitySummary } from '@/lib/claude/personality-summary'
import { getAge } from '@/lib/utils'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ assessmentId: string }> }
) {
  const { assessmentId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => ({}))
  const locale: string = body.locale ?? 'en'

  const { data: assessment } = await supabase
    .from('personality_assessments')
    .select('id, status, age_tier, child_id, children(name, date_of_birth)')
    .eq('id', assessmentId)
    .eq('parent_id', user.id)
    .single()

  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (assessment.status === 'completed') return NextResponse.json({ ok: true })

  const tier = assessment.age_tier as 1 | 2 | 3 | 4
  const questions = getQuestions(tier)
  const { data: answersData } = await supabase
    .from('personality_answers')
    .select('question_key, score')
    .eq('assessment_id', assessmentId)

  const answers = answersData ?? []
  const answeredKeys = new Set(answers.map((a) => a.question_key))
  const allAnswered = questions.every((q) => answeredKeys.has(q.key))

  if (!allAnswered) {
    return NextResponse.json({ error: 'Not all questions answered' }, { status: 400 })
  }

  const child = assessment.children as unknown as { name: string; date_of_birth: string }
  const traitScores = computeTraitScores(answers)
  const topStrengths = getTopStrengths(traitScores)
  const growthAreas = getGrowthAreas(traitScores)
  const age = getAge(child.date_of_birth)

  let aiSummary: string | null = null
  try {
    aiSummary = await generatePersonalitySummary({
      childName: child.name,
      age,
      traitScores: traitScores as Record<Trait, number>,
      topStrengths,
      growthAreas,
      locale,
    })
  } catch (err) {
    console.error('[personality/complete] summary generation failed', err)
  }

  const admin = createAdminClient()

  const { error: insertError } = await admin.from('personality_results').insert({
    assessment_id: assessmentId,
    trait_scores: traitScores,
    top_strengths: topStrengths,
    growth_areas: growthAreas,
    ai_summary: aiSummary,
  })

  if (insertError) {
    console.error('[personality/complete] insert failed', insertError)
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  await admin
    .from('personality_assessments')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', assessmentId)

  return NextResponse.json({ ok: true })
}

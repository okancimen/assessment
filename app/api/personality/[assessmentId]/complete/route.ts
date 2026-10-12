import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse, after } from 'next/server'
import { cookies } from 'next/headers'
import {
  getQuestions,
  computeTraitScores,
  getTopStrengths,
  getGrowthAreas,
  Trait,
} from '@/lib/personality-questions'
import { generatePersonalitySummary } from '@/lib/claude/personality-summary'
import { getAge } from '@/lib/utils'

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ assessmentId: string }> }
) {
  const { assessmentId } = await params
  const admin = createAdminClient()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const body = await req.json().catch(() => ({}))
  const locale: string = body.locale ?? 'en'

  let childName: string
  let childDob: string
  let ageTier: 1 | 2 | 3 | 4

  const cookieStore = await cookies()
  const guestToken = cookieStore.get('pg_tok')?.value

  // Guest path takes priority when pg_tok is present — a logged-in user
  // may still be completing a guest assessment (e.g. returning session).
  if (guestToken) {
    const { data: assessment } = await admin
      .from('personality_assessments')
      .select('id, status, age_tier, guest_name, guest_age, guest_token')
      .eq('id', assessmentId)
      .eq('guest_token', guestToken)
      .single()

    if (assessment) {
      if (assessment.status === 'completed') return NextResponse.json({ ok: true })
      childName = assessment.guest_name ?? 'Your child'
      childDob = ageToDob(assessment.guest_age ?? 10)
      ageTier = assessment.age_tier as 1 | 2 | 3 | 4
      // fall through to scoring
    } else if (user) {
      // pg_tok present but this assessment belongs to the logged-in user
      const { data: ownedAssessment } = await supabase
        .from('personality_assessments')
        .select('id, status, age_tier, child_id, children(name, date_of_birth)')
        .eq('id', assessmentId)
        .eq('parent_id', user.id)
        .single()

      if (!ownedAssessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      if (ownedAssessment.status === 'completed') return NextResponse.json({ ok: true })

      const child = ownedAssessment.children as unknown as { name: string; date_of_birth: string }
      childName = child.name
      childDob = child.date_of_birth
      ageTier = ownedAssessment.age_tier as 1 | 2 | 3 | 4
    } else {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
  } else if (user) {
    const { data: assessment } = await supabase
      .from('personality_assessments')
      .select('id, status, age_tier, child_id, children(name, date_of_birth)')
      .eq('id', assessmentId)
      .eq('parent_id', user.id)
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    if (assessment.status === 'completed') return NextResponse.json({ ok: true })

    const child = assessment.children as unknown as { name: string; date_of_birth: string }
    childName = child.name
    childDob = child.date_of_birth
    ageTier = assessment.age_tier as 1 | 2 | 3 | 4
  } else {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const questions = getQuestions(ageTier)
  const validKeys = new Set(questions.map((q) => q.key))

  // Self-heal: the client sends its full answer map with the submit. Per-question
  // saves during the quiz are fire-and-forget and can silently drop (network blip,
  // expired token), which previously left the DB short and blocked completion.
  // Upsert whatever the client has before validating so a dropped save can't
  // strand a finished assessment. (Question keys are locale-independent.)
  const bodyAnswers: Record<string, number> =
    body.answers && typeof body.answers === 'object' ? body.answers : {}
  const toUpsert = Object.entries(bodyAnswers)
    .filter(([k, v]) => validKeys.has(k) && typeof v === 'number' && v >= 1 && v <= 5)
    .map(([question_key, score]) => ({ assessment_id: assessmentId, question_key, score }))
  if (toUpsert.length > 0) {
    await admin
      .from('personality_answers')
      .upsert(toUpsert, { onConflict: 'assessment_id,question_key' })
  }

  const { data: answersData } = await admin
    .from('personality_answers')
    .select('question_key, score')
    .eq('assessment_id', assessmentId)

  const answers = answersData ?? []
  const answeredKeys = new Set(answers.map((a) => a.question_key))
  const missing = questions.filter((q) => !answeredKeys.has(q.key))

  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Not all questions answered', missing: missing.length },
      { status: 400 },
    )
  }

  const traitScores = computeTraitScores(answers)
  const topStrengths = getTopStrengths(traitScores)
  const growthAreas = getGrowthAreas(traitScores)
  const age = getAge(childDob)

  const { error: insertError } = await admin.from('personality_results').upsert({
    assessment_id: assessmentId,
    trait_scores: traitScores,
    top_strengths: topStrengths,
    growth_areas: growthAreas,
    ai_summary: null,
  }, { onConflict: 'assessment_id' })

  if (insertError) {
    console.error('[personality/complete] insert failed', insertError)
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  await admin
    .from('personality_assessments')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', assessmentId)

  after(async () => {
    try {
      const aiSummary = await generatePersonalitySummary({
        childName,
        age,
        traitScores: traitScores as Record<Trait, number>,
        topStrengths,
        growthAreas,
        locale,
      })
      await admin.from('personality_results')
        .update({ ai_summary: aiSummary })
        .eq('assessment_id', assessmentId)
    } catch (err) {
      console.error('[personality/complete] summary generation failed', err)
    }
  })

  return NextResponse.json({ ok: true })
}

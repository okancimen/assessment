import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { computeResults, computeOverallScore, getScoreLabel } from '@/lib/assessment/adaptive'
import { sendResultsEmail } from '@/lib/email'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: assessment } = await supabase
    .from('assessments')
    .select('*, children(*)')
    .eq('id', id)
    .single()

  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const child = assessment.children as { parent_id: string; name: string; date_of_birth: string }
  if (child.parent_id !== user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: session } = await supabase
    .from('assessment_sessions')
    .select('*')
    .eq('assessment_id', id)
    .single()

  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

  const allScores = session.subject_scores || {}
  const subjectResults = computeResults(allScores)
  const { overall_score, standardized_score } = computeOverallScore(subjectResults)

  // Step 1: Save scores (always succeeds regardless of recommendations column)
  const { data: result, error: resultError } = await supabase
    .from('results')
    .upsert({
      assessment_id: id,
      child_id: assessment.child_id,
      overall_score,
      standardized_score,
      subject_scores: subjectResults,
    }, { onConflict: 'assessment_id' })
    .select()
    .single()

  if (resultError) return NextResponse.json({ error: resultError.message }, { status: 500 })

  // Mark assessment as completed
  await supabase
    .from('assessments')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', id)

  // Send results email (fire-and-forget)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
  sendResultsEmail({
    to: user.email!,
    childName: child.name,
    overallScore: standardized_score,
    scoreLabel: getScoreLabel(standardized_score),
    resultsUrl: `${siteUrl}/results/${id}`,
  }).catch(() => {})

  return NextResponse.json({ result_id: result.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[complete route]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

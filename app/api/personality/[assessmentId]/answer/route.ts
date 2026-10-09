import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ assessmentId: string }> }
) {
  const { assessmentId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { questionKey, score } = await req.json()
  if (!questionKey || typeof score !== 'number' || score < 1 || score > 5) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const { data: assessment } = await supabase
    .from('personality_assessments')
    .select('id, status')
    .eq('id', assessmentId)
    .eq('parent_id', user.id)
    .single()

  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (assessment.status === 'completed') return NextResponse.json({ error: 'Already completed' }, { status: 400 })

  await supabase
    .from('personality_answers')
    .upsert({ assessment_id: assessmentId, question_key: questionKey, score }, { onConflict: 'assessment_id,question_key' })

  return NextResponse.json({ ok: true })
}

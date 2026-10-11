import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ assessmentId: string }> }
) {
  const { assessmentId } = await params
  const { questionKey, score } = await req.json()

  if (!questionKey || typeof score !== 'number' || score < 1 || score > 5) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const admin = createAdminClient()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let assessment: { id: string; status: string } | null = null

  if (user) {
    const { data } = await supabase
      .from('personality_assessments')
      .select('id, status')
      .eq('id', assessmentId)
      .eq('parent_id', user.id)
      .single()
    assessment = data
  } else {
    const cookieStore = await cookies()
    const guestToken = cookieStore.get('pg_tok')?.value
    if (!guestToken) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data } = await admin
      .from('personality_assessments')
      .select('id, status')
      .eq('id', assessmentId)
      .eq('guest_token', guestToken)
      .single()
    assessment = data
  }

  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (assessment.status === 'completed') return NextResponse.json({ error: 'Already completed' }, { status: 400 })

  await admin
    .from('personality_answers')
    .upsert(
      { assessment_id: assessmentId, question_key: questionKey, score },
      { onConflict: 'assessment_id,question_key' },
    )

  return NextResponse.json({ ok: true })
}

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
import { Subject } from '@/types'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const cookieStore = await cookies()
  const guestToken = cookieStore.get('ac_tok')?.value ?? req.headers.get('x-guest-token') ?? undefined

  if (!user && !guestToken) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const db = createAdminClient()

  const { data: assessment } = await db
    .from('assessments')
    .select('*, children(parent_id)')
    .eq('id', id)
    .single()
  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isGuest = !assessment.child_id && !!assessment.guest_token

  if (isGuest) {
    if (!guestToken || assessment.guest_token !== guestToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  } else {
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if ((assessment.children as { parent_id: string }).parent_id !== user.id)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: session } = await db
    .from('assessment_sessions')
    .select('*')
    .eq('assessment_id', id)
    .single()
  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  if (session.question_index === 0)
    return NextResponse.json({ error: 'No previous question' }, { status: 400 })

  const prevIndex = session.question_index - 1
  const currentSubject = session.current_subject as Subject

  const { data: aqRecord } = await db
    .from('assessment_questions')
    .select('question_id, is_correct')
    .eq('assessment_id', id)
    .eq('subject', currentSubject)
    .eq('question_order', prevIndex)
    .single()
  if (!aqRecord) return NextResponse.json({ error: 'Previous question not found' }, { status: 404 })

  const { data: question } = await db
    .from('questions')
    .select('*')
    .eq('id', aqRecord.question_id)
    .single()
  if (!question) return NextResponse.json({ error: 'Question data not found' }, { status: 404 })

  const subjectScores = session.subject_scores || {}
  const ss = subjectScores[currentSubject] || { correct: 0, total: 0, difficulty_sum: 0, responses: [], topics: {} }

  if (ss.responses?.length) {
    const last = ss.responses[ss.responses.length - 1]
    ss.responses = ss.responses.slice(0, -1)
    ss.total      = Math.max(0, ss.total - 1)
    ss.difficulty_sum = Math.max(0, ss.difficulty_sum - last.difficulty)
    if (last.correct) ss.correct = Math.max(0, ss.correct - 1)
  }

  const topic = question.topic as string
  if (ss.topics?.[topic]) {
    ss.topics[topic].total = Math.max(0, ss.topics[topic].total - 1)
    if (aqRecord.is_correct) ss.topics[topic].correct = Math.max(0, ss.topics[topic].correct - 1)
  }

  subjectScores[currentSubject] = ss

  await db
    .from('assessment_questions')
    .update({ selected_answer: null, is_correct: null, answered_at: null, time_taken_seconds: null })
    .eq('assessment_id', id)
    .eq('question_id', aqRecord.question_id)

  await db
    .from('assessment_sessions')
    .update({ question_index: prevIndex, subject_scores: subjectScores, updated_at: new Date().toISOString() })
    .eq('assessment_id', id)

  return NextResponse.json({
    question,
    session: {
      current_subject: session.current_subject,
      subject_index:   session.subject_index,
      question_index:  prevIndex,
      difficulty_level: session.difficulty_level,
      completed_subjects: session.completed_subjects,
    },
  })
}

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { Subject } from '@/types'

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: assessment } = await supabase
    .from('assessments')
    .select('*, children(parent_id)')
    .eq('id', id)
    .single()
  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if ((assessment.children as { parent_id: string }).parent_id !== user.id)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: session } = await supabase
    .from('assessment_sessions')
    .select('*')
    .eq('assessment_id', id)
    .single()
  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  if (session.question_index === 0)
    return NextResponse.json({ error: 'No previous question' }, { status: 400 })

  const prevIndex = session.question_index - 1
  const currentSubject = session.current_subject as Subject

  // Find the previous assessment_question record
  const { data: aqRecord } = await supabase
    .from('assessment_questions')
    .select('question_id, is_correct')
    .eq('assessment_id', id)
    .eq('subject', currentSubject)
    .eq('question_order', prevIndex)
    .single()
  if (!aqRecord) return NextResponse.json({ error: 'Previous question not found' }, { status: 404 })

  // Fetch the full question
  const { data: question } = await supabase
    .from('questions')
    .select('*')
    .eq('id', aqRecord.question_id)
    .single()
  if (!question) return NextResponse.json({ error: 'Question data not found' }, { status: 404 })

  // Undo the last response in subject_scores
  const subjectScores = session.subject_scores || {}
  const ss = subjectScores[currentSubject] || { correct: 0, total: 0, difficulty_sum: 0, responses: [], topics: {} }

  if (ss.responses?.length) {
    const last = ss.responses[ss.responses.length - 1]
    ss.responses = ss.responses.slice(0, -1)
    ss.total      = Math.max(0, ss.total - 1)
    ss.difficulty_sum = Math.max(0, ss.difficulty_sum - last.difficulty)
    if (last.correct) ss.correct = Math.max(0, ss.correct - 1)
  }

  // Undo topic counts
  const topic = question.topic as string
  if (ss.topics?.[topic]) {
    ss.topics[topic].total = Math.max(0, ss.topics[topic].total - 1)
    if (aqRecord.is_correct) ss.topics[topic].correct = Math.max(0, ss.topics[topic].correct - 1)
  }

  subjectScores[currentSubject] = ss

  // Reset the assessment_question record to unanswered
  await supabase
    .from('assessment_questions')
    .update({ selected_answer: null, is_correct: null, answered_at: null, time_taken_seconds: null })
    .eq('assessment_id', id)
    .eq('question_id', aqRecord.question_id)

  // Decrement question_index in session
  await supabase
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

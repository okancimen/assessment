import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { estimateTheta, optimalDifficulty } from '@/lib/assessment/adaptive'
import { Subject, QUESTIONS_PER_SUBJECT, SUBJECTS } from '@/types'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { question_id, selected_answer, time_taken_seconds } = await request.json()

  // Verify ownership
  const { data: assessment } = await supabase
    .from('assessments')
    .select('*, children(parent_id)')
    .eq('id', id)
    .single()

  if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const child = assessment.children as { parent_id: string }
  if (child.parent_id !== user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get the correct answer + item parameters
  const { data: question } = await supabase
    .from('questions')
    .select('correct_answer, topic, difficulty, subject, explanation')
    .eq('id', question_id)
    .single()

  if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

  const is_correct = selected_answer === question.correct_answer

  // Update assessment_question record
  await supabase
    .from('assessment_questions')
    .update({
      selected_answer,
      is_correct,
      answered_at: new Date().toISOString(),
      time_taken_seconds,
    })
    .eq('assessment_id', id)
    .eq('question_id', question_id)

  // Get current session
  const { data: session } = await supabase
    .from('assessment_sessions')
    .select('*')
    .eq('assessment_id', id)
    .single()

  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

  // Guard against duplicate/late submissions — subject is already complete
  if (session.question_index >= QUESTIONS_PER_SUBJECT) {
    return NextResponse.json({ error: 'Subject already complete' }, { status: 409 })
  }

  // Update subject scores — including the IRT response array
  const currentSubject = session.current_subject as Subject
  const subjectScores = session.subject_scores || {}
  const subjectScore = subjectScores[currentSubject] || {
    correct: 0,
    total: 0,
    difficulty_sum: 0,
    responses: [],
    topics: {},
  }

  subjectScore.total += 1
  subjectScore.difficulty_sum += question.difficulty
  if (is_correct) subjectScore.correct += 1

  // Append this response for IRT theta estimation
  subjectScore.responses = [
    ...(subjectScore.responses ?? []),
    { difficulty: question.difficulty, correct: is_correct },
  ]

  const topic = question.topic
  if (!subjectScore.topics[topic]) {
    subjectScore.topics[topic] = { correct: 0, total: 0 }
  }
  subjectScore.topics[topic].total += 1
  if (is_correct) subjectScore.topics[topic].correct += 1

  subjectScores[currentSubject] = subjectScore

  // IRT-based next item selection: Fisher-optimal difficulty, constrained to ±2 from current
  const currentTheta = estimateTheta(subjectScore.responses)
  const newDifficulty = optimalDifficulty(currentTheta, session.difficulty_level)

  const newQuestionIndex = session.question_index + 1
  const subjectComplete = newQuestionIndex >= QUESTIONS_PER_SUBJECT
  const nextSubjectIndex = session.subject_index + 1
  const allComplete = subjectComplete && nextSubjectIndex >= SUBJECTS.length

  await supabase
    .from('assessment_sessions')
    .update({
      question_index: newQuestionIndex,
      difficulty_level: newDifficulty,
      subject_scores: subjectScores,
      updated_at: new Date().toISOString(),
    })
    .eq('assessment_id', id)

  return NextResponse.json({
    is_correct,
    correct_answer: question.correct_answer,
    explanation: question.explanation ?? null,
    subject_complete: subjectComplete,
    all_complete: allComplete,
    new_difficulty: newDifficulty,
    theta: currentTheta,
  })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[answer route]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { estimateTheta, optimalDifficulty } from '@/lib/assessment/adaptive'
import { extractTrackFromInterestAnswer } from '@/lib/claude/internship-questions'
import {
  Subject, QUESTIONS_PER_SUBJECT, SUBJECTS,
  InternshipSubject, InternshipTrack, getInternshipSubjects, INTERNSHIP_QUESTIONS_PER_SUBJECT,
} from '@/types'

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

    const { data: assessment } = await supabase
      .from('assessments')
      .select('*, children(parent_id, student_user_id)')
      .eq('id', id)
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const child = assessment.children as { parent_id: string; student_user_id: string | null }
    const isInternship = assessment.assessment_type === 'internship'

    const authorized = isInternship
      ? child.parent_id === user.id || child.student_user_id === user.id
      : child.parent_id === user.id
    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: question } = await supabase
      .from('questions')
      .select('correct_answer, topic, difficulty, subject, explanation')
      .eq('id', question_id)
      .single()

    if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

    const is_correct = selected_answer === question.correct_answer

    await supabase.from('assessment_questions')
      .update({ selected_answer, is_correct, answered_at: new Date().toISOString(), time_taken_seconds })
      .eq('assessment_id', id).eq('question_id', question_id)

    const { data: session } = await supabase
      .from('assessment_sessions').select('*').eq('assessment_id', id).single()

    if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    if (isInternship) {
      return handleInternshipAnswer(id, supabase, session, question, selected_answer, is_correct, time_taken_seconds)
    }
    return handleAcademicAnswer(id, supabase, session, question, is_correct)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[assessment/answer]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleAcademicAnswer(id: string, supabase: any, session: any, question: any, is_correct: boolean) {
  if (session.question_index >= QUESTIONS_PER_SUBJECT) {
    return NextResponse.json({ error: 'Subject already complete' }, { status: 409 })
  }

  const currentSubject = session.current_subject as Subject
  const subjectScores = session.subject_scores || {}
  const subjectScore = subjectScores[currentSubject] || { correct: 0, total: 0, difficulty_sum: 0, responses: [], topics: {} }

  subjectScore.total += 1
  subjectScore.difficulty_sum += question.difficulty
  if (is_correct) subjectScore.correct += 1
  subjectScore.responses = [...(subjectScore.responses ?? []), { difficulty: question.difficulty, correct: is_correct }]

  const topic = question.topic
  if (!subjectScore.topics[topic]) subjectScore.topics[topic] = { correct: 0, total: 0 }
  subjectScore.topics[topic].total += 1
  if (is_correct) subjectScore.topics[topic].correct += 1

  subjectScores[currentSubject] = subjectScore

  const currentTheta = estimateTheta(subjectScore.responses)
  const newDifficulty = optimalDifficulty(currentTheta, session.difficulty_level)
  const newQuestionIndex = session.question_index + 1
  const subjectComplete = newQuestionIndex >= QUESTIONS_PER_SUBJECT
  const allComplete = subjectComplete && session.subject_index + 1 >= SUBJECTS.length

  await supabase.from('assessment_sessions').update({
    question_index: newQuestionIndex, difficulty_level: newDifficulty,
    subject_scores: subjectScores, updated_at: new Date().toISOString(),
  }).eq('assessment_id', id)

  return NextResponse.json({
    is_correct, correct_answer: question.correct_answer, explanation: question.explanation ?? null,
    subject_complete: subjectComplete, all_complete: allComplete,
    new_difficulty: newDifficulty, theta: currentTheta,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInternshipAnswer(id: string, supabase: any, session: any, question: any, selected_answer: string, is_correct: boolean, _time: number) {
  const currentSubject = session.current_subject as InternshipSubject
  const questionsForSubject = INTERNSHIP_QUESTIONS_PER_SUBJECT[currentSubject] ?? 10

  if (session.question_index >= questionsForSubject) {
    return NextResponse.json({ error: 'Subject already complete' }, { status: 409 })
  }

  const subjectScores = session.subject_scores ?? {}
  const subjectScore = subjectScores[currentSubject] ?? {
    correct: 0, total: 0, difficulty_sum: 0, responses: [], topics: {}, track_counts: {},
  }

  subjectScore.total += 1
  subjectScore.difficulty_sum += question.difficulty
  if (is_correct) subjectScore.correct += 1

  if (currentSubject === 'interest_profile') {
    const selectedTrack = extractTrackFromInterestAnswer(selected_answer, question.explanation ?? '')
    if (selectedTrack) {
      const tc = subjectScore.track_counts ?? {}
      tc[selectedTrack] = (tc[selectedTrack] ?? 0) + 1
      subjectScore.track_counts = tc
    }
  }

  if (currentSubject === 'aptitude_verbal' || currentSubject === 'aptitude_math') {
    subjectScore.responses = [...(subjectScore.responses ?? []), { difficulty: question.difficulty, correct: is_correct }]
  }

  const topic = question.topic ?? 'general'
  if (!subjectScore.topics[topic]) subjectScore.topics[topic] = { correct: 0, total: 0 }
  subjectScore.topics[topic].total += 1
  if (is_correct) subjectScore.topics[topic].correct += 1

  subjectScores[currentSubject] = subjectScore

  let newDifficulty = session.difficulty_level
  let theta: number | null = null
  if (currentSubject === 'aptitude_verbal' || currentSubject === 'aptitude_math') {
    theta = estimateTheta(subjectScore.responses)
    newDifficulty = optimalDifficulty(theta, session.difficulty_level)
  }

  const newQuestionIndex = session.question_index + 1
  const subjectComplete = newQuestionIndex >= questionsForSubject

  const { data: profile } = await supabase
    .from('internship_profiles').select('track_preferences, admin_assigned_track').eq('assessment_id', id).single()
  const track = ((profile?.admin_assigned_track ?? profile?.track_preferences?.[0]) as InternshipTrack) ?? 'tech'
  const subjects = getInternshipSubjects(track)
  const allComplete = subjectComplete && (session.subject_index + 1) >= subjects.length

  await supabase.from('assessment_sessions').update({
    question_index: newQuestionIndex, difficulty_level: newDifficulty,
    subject_scores: subjectScores, updated_at: new Date().toISOString(),
  }).eq('assessment_id', id)

  return NextResponse.json({
    is_correct, correct_answer: question.correct_answer, explanation: question.explanation ?? null,
    subject_complete: subjectComplete, all_complete: allComplete,
    new_difficulty: newDifficulty, theta,
  })
}

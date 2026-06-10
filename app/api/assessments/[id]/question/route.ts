import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateQuestion } from '@/lib/claude/questions'
import { Subject, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Get assessment and verify ownership
  const { data: assessment } = await supabase
    .from('assessments')
    .select('*, children(*)')
    .eq('id', id)
    .single()

  if (!assessment) return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })

  const child = assessment.children as { date_of_birth: string; parent_id: string }
  if (child.parent_id !== user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get session
  const { data: session } = await supabase
    .from('assessment_sessions')
    .select('*')
    .eq('assessment_id', id)
    .single()

  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

  if (assessment.status === 'completed') {
    return NextResponse.json({ completed: true })
  }

  // Check if current subject is done
  if (session.question_index >= QUESTIONS_PER_SUBJECT) {
    const nextSubjectIndex = session.subject_index + 1
    if (nextSubjectIndex >= SUBJECTS.length) {
      return NextResponse.json({ completed: true })
    }

    // Move to next subject
    const nextSubject = SUBJECTS[nextSubjectIndex]
    const age = Math.floor(
      (Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )

    await supabase
      .from('assessment_sessions')
      .update({
        current_subject: nextSubject,
        subject_index: nextSubjectIndex,
        question_index: 0,
        completed_subjects: [...session.completed_subjects, session.current_subject],
        updated_at: new Date().toISOString(),
      })
      .eq('assessment_id', id)

    return NextResponse.json({ subject_break: true, next_subject: nextSubject, age })
  }

  // Get topics used in current subject + all question texts used across the entire session
  const { data: subjectQuestions } = await supabase
    .from('assessment_questions')
    .select('questions(topic)')
    .eq('assessment_id', id)
    .eq('subject', session.current_subject)

  const { data: allQuestions } = await supabase
    .from('assessment_questions')
    .select('questions(question_text)')
    .eq('assessment_id', id)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTopics = subjectQuestions?.map((q: any) => q.questions?.topic ?? q.questions?.[0]?.topic).filter(Boolean) as string[] || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedQuestionTexts = allQuestions?.map((q: any) => q.questions?.question_text ?? q.questions?.[0]?.question_text).filter(Boolean) as string[] || []

  const age = Math.floor(
    (Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  )

  // Generate question via Claude
  const questionData = await generateQuestion(
    session.current_subject as Subject,
    age,
    session.difficulty_level,
    usedTopics,
    usedQuestionTexts
  )

  // Save question to DB
  const { data: question, error: qError } = await supabase
    .from('questions')
    .insert(questionData)
    .select()
    .single()

  if (qError) return NextResponse.json({ error: qError.message }, { status: 500 })

  // Link question to assessment
  await supabase
    .from('assessment_questions')
    .insert({
      assessment_id: id,
      question_id: question.id,
      subject: session.current_subject,
      question_order: session.question_index,
    })

  // Update assessment status to in_progress on first question
  if (assessment.status === 'pending') {
    await supabase
      .from('assessments')
      .update({ status: 'in_progress', started_at: new Date().toISOString() })
      .eq('id', id)
  }

  // Return question without correct answer
  const { correct_answer, ...safeQuestion } = question
  return NextResponse.json({
    question: safeQuestion,
    session: {
      current_subject: session.current_subject,
      subject_index: session.subject_index,
      question_index: session.question_index,
      difficulty_level: session.difficulty_level,
      completed_subjects: session.completed_subjects,
    },
    age,
  })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[question route]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

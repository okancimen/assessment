import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateQuestion } from '@/lib/claude/questions'
import { generateInternshipQuestion } from '@/lib/claude/internship-questions'
import {
  Subject, SUBJECTS, QUESTIONS_PER_SUBJECT,
  InternshipTrack, InternshipSubject, getInternshipSubjects, INTERNSHIP_QUESTIONS_PER_SUBJECT,
} from '@/types'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: assessment } = await supabase
      .from('assessments')
      .select('*, children(parent_id, student_user_id, date_of_birth)')
      .eq('id', id)
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const child = assessment.children as {
      parent_id: string
      student_user_id: string | null
      date_of_birth: string
    }

    const isInternship = assessment.assessment_type === 'internship'

    // Auth: internship allows student_user_id; academic only allows parent_id
    const authorized = isInternship
      ? child.parent_id === user.id || child.student_user_id === user.id
      : child.parent_id === user.id
    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    if (assessment.status === 'completed') return NextResponse.json({ completed: true })

    const { data: session } = await supabase
      .from('assessment_sessions')
      .select('*')
      .eq('assessment_id', id)
      .single()

    if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    if (isInternship) {
      return handleInternshipQuestion(id, supabase, assessment, child, session, user.id)
    }
    return handleAcademicQuestion(id, supabase, assessment, child, session)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[assessment/question]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleAcademicQuestion(id: string, supabase: any, assessment: any, child: any, session: any) {
  if (session.question_index >= QUESTIONS_PER_SUBJECT) {
    const nextSubjectIndex = session.subject_index + 1
    if (nextSubjectIndex >= SUBJECTS.length) return NextResponse.json({ completed: true })

    const nextSubject = SUBJECTS[nextSubjectIndex]
    const age = Math.floor((Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))

    await supabase.from('assessment_sessions').update({
      current_subject: nextSubject,
      subject_index: nextSubjectIndex,
      question_index: 0,
      completed_subjects: [...session.completed_subjects, session.current_subject],
      updated_at: new Date().toISOString(),
    }).eq('assessment_id', id)

    return NextResponse.json({ subject_break: true, next_subject: nextSubject, age })
  }

  const prefetch = session.prefetched_question
  if (prefetch?.subject === session.current_subject && prefetch?.difficulty === session.difficulty_level) {
    await supabase.from('assessment_sessions')
      .update({ prefetched_question: null, updated_at: new Date().toISOString() })
      .eq('assessment_id', id)
    await supabase.from('assessment_questions').insert({
      assessment_id: id, question_id: prefetch.question.id,
      subject: session.current_subject, question_order: session.question_index,
    })
    if (assessment.status === 'pending') {
      await supabase.from('assessments')
        .update({ status: 'in_progress', started_at: new Date().toISOString() }).eq('id', id)
    }
    const age = Math.floor((Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
    return NextResponse.json({
      question: prefetch.question,
      session: {
        current_subject: session.current_subject, subject_index: session.subject_index,
        question_index: session.question_index, difficulty_level: session.difficulty_level,
        completed_subjects: session.completed_subjects,
      },
      age,
    })
  }

  const { data: subjectQuestions } = await supabase
    .from('assessment_questions').select('questions(topic)').eq('assessment_id', id).eq('subject', session.current_subject)
  const { data: allQuestions } = await supabase
    .from('assessment_questions').select('questions(question_text)').eq('assessment_id', id)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTopics = subjectQuestions?.map((q: any) => q.questions?.topic).filter(Boolean) as string[] ?? []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTexts = allQuestions?.map((q: any) => q.questions?.question_text).filter(Boolean) as string[] ?? []

  const age = Math.floor((Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
  const questionData = await generateQuestion(session.current_subject as Subject, age, session.difficulty_level, usedTopics, usedTexts)

  const { data: question, error: qError } = await supabase.from('questions').insert(questionData).select().single()
  if (qError) return NextResponse.json({ error: qError.message }, { status: 500 })

  await supabase.from('assessment_questions').insert({
    assessment_id: id, question_id: question.id,
    subject: session.current_subject, question_order: session.question_index,
  })
  if (assessment.status === 'pending') {
    await supabase.from('assessments')
      .update({ status: 'in_progress', started_at: new Date().toISOString() }).eq('id', id)
  }

  const { correct_answer, ...safeQuestion } = question
  void correct_answer
  return NextResponse.json({
    question: safeQuestion,
    session: {
      current_subject: session.current_subject, subject_index: session.subject_index,
      question_index: session.question_index, difficulty_level: session.difficulty_level,
      completed_subjects: session.completed_subjects,
    },
    age,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInternshipQuestion(id: string, supabase: any, assessment: any, _child: any, session: any, _userId: string) {
  const { data: profile } = await supabase
    .from('internship_profiles').select('track_preferences, admin_assigned_track').eq('assessment_id', id).single()
  if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 })

  const track = (profile.admin_assigned_track ?? profile.track_preferences?.[0]) as InternshipTrack
  if (!track) return NextResponse.json({ error: 'No track assigned' }, { status: 400 })

  const subjects = getInternshipSubjects(track)
  const currentSubject = session.current_subject as InternshipSubject
  const questionsForSubject = INTERNSHIP_QUESTIONS_PER_SUBJECT[currentSubject] ?? 10

  if (session.question_index >= questionsForSubject) {
    const nextSubjectIndex = session.subject_index + 1
    if (nextSubjectIndex >= subjects.length) return NextResponse.json({ completed: true })
    const nextSubject = subjects[nextSubjectIndex]
    await supabase.from('assessment_sessions').update({
      current_subject: nextSubject, subject_index: nextSubjectIndex,
      question_index: 0, difficulty_level: 5,
      completed_subjects: [...(session.completed_subjects ?? []), currentSubject],
      updated_at: new Date().toISOString(),
    }).eq('assessment_id', id)
    return NextResponse.json({ subject_break: true, next_subject: nextSubject, track })
  }

  const prefetch = session.prefetched_question
  if (prefetch?.subject === currentSubject && prefetch?.difficulty === session.difficulty_level) {
    await supabase.from('assessment_sessions')
      .update({ prefetched_question: null, updated_at: new Date().toISOString() }).eq('assessment_id', id)
    await supabase.from('assessment_questions').insert({
      assessment_id: id, question_id: prefetch.question.id,
      subject: currentSubject, question_order: session.question_index,
    })
    if (assessment.status === 'pending') {
      await supabase.from('assessments')
        .update({ status: 'in_progress', started_at: new Date().toISOString() }).eq('id', id)
    }
    return NextResponse.json({
      question: prefetch.question,
      session: {
        current_subject: currentSubject, subject_index: session.subject_index,
        question_index: session.question_index, difficulty_level: session.difficulty_level,
        completed_subjects: session.completed_subjects ?? [],
      },
      track,
    })
  }

  const { data: allQuestions } = await supabase
    .from('assessment_questions').select('questions(question_text, options, subject)').eq('assessment_id', id)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTexts = allQuestions?.map((q: any) => q.questions?.question_text).filter(Boolean) as string[] ?? []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedInterestOptions: string[][] = currentSubject === 'interest_profile'
    ? (allQuestions ?? [])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((q: any) => q.questions?.subject === 'interest_profile' && Array.isArray(q.questions?.options))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((q: any) => (q.questions.options as { text: string }[]).map((o) => o.text))
    : []

  const questionData = await generateInternshipQuestion(currentSubject, track, session.difficulty_level, usedTexts, usedInterestOptions)

  const { data: question, error: qError } = await supabase.from('questions').insert({
    subject: currentSubject, topic: questionData.topic, difficulty: questionData.difficulty,
    age_min: 14, age_max: 18, question_text: questionData.question_text,
    options: questionData.options, correct_answer: questionData.correct_answer,
    explanation: questionData.explanation,
  }).select().single()

  if (qError) return NextResponse.json({ error: qError.message }, { status: 500 })

  await supabase.from('assessment_questions').insert({
    assessment_id: id, question_id: question.id,
    subject: currentSubject, question_order: session.question_index,
  })
  if (assessment.status === 'pending') {
    await supabase.from('assessments')
      .update({ status: 'in_progress', started_at: new Date().toISOString() }).eq('id', id)
  }

  const { correct_answer, ...safeQuestion } = question
  void correct_answer
  return NextResponse.json({
    question: safeQuestion,
    session: {
      current_subject: currentSubject, subject_index: session.subject_index,
      question_index: session.question_index, difficulty_level: session.difficulty_level,
      completed_subjects: session.completed_subjects ?? [],
    },
    track,
  })
}

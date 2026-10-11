import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
import { generateQuestion } from '@/lib/claude/questions'
import { generateInternshipQuestion } from '@/lib/claude/internship-questions'
import {
  Subject, SUBJECTS, QUESTIONS_PER_SUBJECT,
  InternshipTrack, InternshipSubject, getInternshipSubjects, INTERNSHIP_QUESTIONS_PER_SUBJECT,
} from '@/types'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const cookieStore = await cookies()
    const guestToken = cookieStore.get('ac_tok')?.value ?? request.headers.get('x-guest-token') ?? undefined

    if (!user && !guestToken) return NextResponse.json({ ok: false })

    const db = createAdminClient()

    const { data: session } = await db
      .from('assessment_sessions').select('*').eq('assessment_id', id).single()
    if (!session) return NextResponse.json({ ok: false })

    const { data: assessment } = await db
      .from('assessments')
      .select('*, children(parent_id, student_user_id, date_of_birth)')
      .eq('id', id).single()
    if (!assessment) return NextResponse.json({ ok: false })

    const isGuest = !assessment.child_id && !!assessment.guest_token
    const isInternship = assessment.assessment_type === 'internship'

    if (isGuest) {
      if (!guestToken || assessment.guest_token !== guestToken) return NextResponse.json({ ok: false })
      const guestChild = { parent_id: '', student_user_id: null, date_of_birth: guestAgeToDob(assessment.guest_age ?? 10) }
      return handleAcademicPrefetch(id, db, session, guestChild)
    }

    if (!user) return NextResponse.json({ ok: false })
    const child = assessment.children as unknown as { parent_id: string; student_user_id: string | null; date_of_birth: string }
    const authorized = isInternship
      ? child.parent_id === user.id || child.student_user_id === user.id
      : child.parent_id === user.id
    if (!authorized) return NextResponse.json({ ok: false })

    if (isInternship) {
      return handleInternshipPrefetch(id, db, session, user.id)
    }
    return handleAcademicPrefetch(id, db, session, child)
  } catch {
    return NextResponse.json({ ok: false })
  }
}

function guestAgeToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleAcademicPrefetch(id: string, supabase: any, session: any, child: any) {
  const nextIndex = session.question_index + 1
  let targetSubject: Subject = session.current_subject as Subject
  let targetDifficulty: number = session.difficulty_level

  if (nextIndex >= QUESTIONS_PER_SUBJECT) {
    const nextSubjectIndex = session.subject_index + 1
    if (nextSubjectIndex >= SUBJECTS.length) return NextResponse.json({ ok: false })
    targetSubject = SUBJECTS[nextSubjectIndex]
    targetDifficulty = 5
  }

  const cached = session.prefetched_question
  if (cached?.subject === targetSubject && cached?.difficulty === targetDifficulty) {
    return NextResponse.json({ ok: true, cached: true })
  }

  const age = Math.floor((Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))

  const { data: usedData } = await supabase
    .from('assessment_questions').select('questions(topic, question_text)').eq('assessment_id', id)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTopics = usedData?.map((q: any) => q.questions?.topic).filter(Boolean) as string[] ?? []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTexts = usedData?.map((q: any) => q.questions?.question_text).filter(Boolean) as string[] ?? []

  const questionData = await generateQuestion(targetSubject, age, targetDifficulty as 1, usedTopics, usedTexts)
  const { data: question } = await supabase.from('questions').insert(questionData).select().single()
  if (!question) return NextResponse.json({ ok: false })

  const { correct_answer, ...safeQuestion } = question
  await supabase.from('assessment_sessions').update({
    prefetched_question: { question: safeQuestion, correct_answer, subject: targetSubject, difficulty: targetDifficulty },
    updated_at: new Date().toISOString(),
  }).eq('assessment_id', id)

  return NextResponse.json({ ok: true })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInternshipPrefetch(id: string, supabase: any, session: any, _userId: string) {
  const { data: profile } = await supabase
    .from('internship_profiles').select('track_preferences, admin_assigned_track').eq('assessment_id', id).single()
  if (!profile) return NextResponse.json({ ok: false })

  const track = (profile.admin_assigned_track ?? profile.track_preferences?.[0]) as InternshipTrack
  if (!track) return NextResponse.json({ ok: false })

  const subjects = getInternshipSubjects(track)
  const currentSubject = session.current_subject as InternshipSubject
  const questionsForSubject = INTERNSHIP_QUESTIONS_PER_SUBJECT[currentSubject] ?? 10
  const nextIndex = session.question_index + 1

  let targetSubject: InternshipSubject = currentSubject
  let targetDifficulty: number = session.difficulty_level

  if (nextIndex >= questionsForSubject) {
    const nextSubjectIndex = session.subject_index + 1
    if (nextSubjectIndex >= subjects.length) return NextResponse.json({ ok: false })
    targetSubject = subjects[nextSubjectIndex] as InternshipSubject
    targetDifficulty = 5
  }

  const cached = session.prefetched_question
  if (cached?.subject === targetSubject && cached?.difficulty === targetDifficulty) {
    return NextResponse.json({ ok: true, cached: true })
  }

  const { data: usedData } = await supabase
    .from('assessment_questions').select('questions(question_text, options, subject)').eq('assessment_id', id)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedTexts = usedData?.map((q: any) => q.questions?.question_text).filter(Boolean) as string[] ?? []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usedInterestOptions: string[][] = targetSubject === 'interest_profile'
    ? (usedData ?? [])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((q: any) => q.questions?.subject === 'interest_profile' && Array.isArray(q.questions?.options))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((q: any) => (q.questions.options as { text: string }[]).map((o) => o.text))
    : []

  const questionData = await generateInternshipQuestion(targetSubject, track, targetDifficulty, usedTexts, usedInterestOptions)

  const { data: question } = await supabase.from('questions').insert({
    subject: targetSubject, topic: questionData.topic, difficulty: questionData.difficulty,
    age_min: 14, age_max: 18, question_text: questionData.question_text,
    options: questionData.options, correct_answer: questionData.correct_answer,
    explanation: questionData.explanation,
  }).select().single()

  if (!question) return NextResponse.json({ ok: false })

  const { correct_answer, ...safeQuestion } = question
  await supabase.from('assessment_sessions').update({
    prefetched_question: { question: safeQuestion, correct_answer, subject: targetSubject, difficulty: targetDifficulty },
    updated_at: new Date().toISOString(),
  }).eq('assessment_id', id)

  return NextResponse.json({ ok: true })
}

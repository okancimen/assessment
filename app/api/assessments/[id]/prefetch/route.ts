import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateQuestion } from '@/lib/claude/questions'
import { Subject, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ ok: false })

    const { data: session } = await supabase
      .from('assessment_sessions')
      .select('*')
      .eq('assessment_id', id)
      .single()

    if (!session) return NextResponse.json({ ok: false })

    // Don't prefetch if subject is complete or assessment is done
    const nextIndex = session.question_index + 1
    let targetSubject: Subject = session.current_subject as Subject
    let targetDifficulty: number = session.difficulty_level

    if (nextIndex >= QUESTIONS_PER_SUBJECT) {
      const nextSubjectIndex = session.subject_index + 1
      if (nextSubjectIndex >= SUBJECTS.length) return NextResponse.json({ ok: false })
      targetSubject = SUBJECTS[nextSubjectIndex]
      targetDifficulty = 5 // reset to default for new subject
    }

    // Don't prefetch if one is already cached for same subject+difficulty
    const cached = session.prefetched_question
    if (cached?.subject === targetSubject && cached?.difficulty === targetDifficulty) {
      return NextResponse.json({ ok: true, cached: true })
    }

    const { data: assessment } = await supabase
      .from('assessments')
      .select('*, children(*)')
      .eq('id', id)
      .single()

    if (!assessment) return NextResponse.json({ ok: false })
    const child = assessment.children as { date_of_birth: string; parent_id: string }
    if (child.parent_id !== user.id) return NextResponse.json({ ok: false })

    const age = Math.floor(
      (Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )

    // Get already used topics + question texts
    const { data: usedData } = await supabase
      .from('assessment_questions')
      .select('questions(topic, question_text)')
      .eq('assessment_id', id)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const usedTopics = usedData?.map((q: any) => q.questions?.topic).filter(Boolean) as string[] || []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const usedTexts = usedData?.map((q: any) => q.questions?.question_text).filter(Boolean) as string[] || []

    const questionData = await generateQuestion(targetSubject, age, targetDifficulty as 1, usedTopics, usedTexts)

    // Save to questions table
    const { data: question } = await supabase
      .from('questions')
      .insert(questionData)
      .select()
      .single()

    if (!question) return NextResponse.json({ ok: false })

    // Store prefetched question in session (without correct_answer for safety)
    const { correct_answer, ...safeQuestion } = question
    await supabase
      .from('assessment_sessions')
      .update({
        prefetched_question: {
          question: safeQuestion,
          correct_answer,
          subject: targetSubject,
          difficulty: targetDifficulty,
        },
        updated_at: new Date().toISOString(),
      })
      .eq('assessment_id', id)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}

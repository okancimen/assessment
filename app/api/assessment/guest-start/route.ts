import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getInitialDifficulty } from '@/lib/assessment/adaptive'
import { SUBJECTS } from '@/types'

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { name, age } = body

  if (!name || typeof name !== 'string' || name.trim().length < 1) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  const ageNum = Number(age)
  if (!ageNum || ageNum < 6 || ageNum > 17) {
    return NextResponse.json({ error: 'Age must be between 6 and 17' }, { status: 400 })
  }

  const guestToken = crypto.randomUUID()
  const admin = createAdminClient()

  const { data: assessment, error: assessmentError } = await admin
    .from('assessments')
    .insert({
      guest_token: guestToken,
      guest_name: name.trim(),
      guest_age: ageNum,
      status: 'pending',
      assessment_type: 'academic',
    })
    .select('id')
    .single()

  if (assessmentError || !assessment) {
    return NextResponse.json({ error: assessmentError?.message ?? 'Failed to create' }, { status: 500 })
  }

  const { error: sessionError } = await admin
    .from('assessment_sessions')
    .insert({
      assessment_id: assessment.id,
      current_subject: SUBJECTS[0],
      subject_index: 0,
      question_index: 0,
      difficulty_level: getInitialDifficulty(ageNum),
      subject_scores: {},
      completed_subjects: [],
    })

  if (sessionError) {
    return NextResponse.json({ error: sessionError.message }, { status: 500 })
  }

  // Compute approximate dob for display purposes only — not stored
  void ageToDob(ageNum)

  const response = NextResponse.json({ assessmentId: assessment.id, guestToken })
  response.cookies.set('ac_tok', guestToken, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return response
}

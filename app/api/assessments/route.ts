import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getInitialDifficulty } from '@/lib/assessment/adaptive'
import { SUBJECTS } from '@/types'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { child_id } = await request.json()
  if (!child_id) return NextResponse.json({ error: 'child_id is required' }, { status: 400 })

  // Verify child belongs to parent
  const { data: child, error: childError } = await supabase
    .from('children')
    .select('*')
    .eq('id', child_id)
    .eq('parent_id', user.id)
    .single()

  if (childError || !child) {
    return NextResponse.json({ error: 'Child not found' }, { status: 404 })
  }

  // Compute child's current age
  const age = Math.floor(
    (Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  )

  // Create assessment
  const { data: assessment, error: assessmentError } = await supabase
    .from('assessments')
    .insert({ child_id, status: 'pending' })
    .select()
    .single()

  if (assessmentError) return NextResponse.json({ error: assessmentError.message }, { status: 500 })

  // Create initial session
  const { error: sessionError } = await supabase
    .from('assessment_sessions')
    .insert({
      assessment_id: assessment.id,
      current_subject: SUBJECTS[0],
      subject_index: 0,
      question_index: 0,
      difficulty_level: getInitialDifficulty(age),
      subject_scores: {},
      completed_subjects: [],
    })

  if (sessionError) return NextResponse.json({ error: sessionError.message }, { status: 500 })

  return NextResponse.json(assessment, { status: 201 })
}

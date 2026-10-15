import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getInternshipSubjects, InternshipTrack } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const {
      full_name,
      university_name,
      year_group,
      track_preference,
      personal_statement,
    } = await request.json()

    if (!full_name || !university_name || !year_group || !track_preference) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const primaryTrack = track_preference as InternshipTrack
    const db = createAdminClient()

    // University students self-register — find or create their own child record
    const { data: existingSelf } = await db
      .from('children')
      .select('id')
      .eq('student_user_id', user.id)
      .is('parent_id', null)
      .maybeSingle()

    let childId: string

    if (existingSelf) {
      childId = existingSelf.id
    } else {
      const { data: child, error: childError } = await db
        .from('children')
        .insert({
          name: full_name,
          student_user_id: user.id,
          student_email: user.email,
        })
        .select()
        .single()
      if (childError) return NextResponse.json({ error: childError.message }, { status: 500 })
      childId = child.id
    }

    // Check for existing active university assessment
    const { data: existing } = await db
      .from('assessments')
      .select('id, status')
      .eq('child_id', childId)
      .eq('assessment_type', 'internship_university')
      .in('status', ['not_started', 'in_progress'])
      .maybeSingle()

    if (existing) {
      return NextResponse.json({ assessment_id: existing.id })
    }

    // Build subject sequence for this track
    const subjects = getInternshipSubjects(primaryTrack)

    // Create assessment
    const { data: assessment, error: assessmentError } = await db
      .from('assessments')
      .insert({
        child_id: childId,
        assessment_type: 'internship_university',
        status: 'not_started',
        subjects,
        subject_index: 0,
        question_index: 0,
      })
      .select()
      .single()

    if (assessmentError) return NextResponse.json({ error: assessmentError.message }, { status: 500 })

    // Store university-specific profile
    const { error: profileError } = await db
      .from('university_profiles')
      .insert({
        assessment_id: assessment.id,
        child_id: childId,
        university_name,
        year_group,
        track_preference: primaryTrack,
        personal_statement: personal_statement || null,
      })

    if (profileError) {
      // Non-fatal — assessment still created
      console.error('[work-experience/apply] profile insert failed', profileError.message)
    }

    return NextResponse.json({ assessment_id: assessment.id })
  } catch (err) {
    console.error('[work-experience/apply]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

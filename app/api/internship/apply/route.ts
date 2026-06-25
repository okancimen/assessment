import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getInternshipSubjects, InternshipTrack } from '@/types'
import { sendInternshipConfirmationEmail, sendParentLinkNotificationEmail } from '@/lib/email'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const {
      full_name,
      date_of_birth,
      school_name,
      year_group,
      personal_statement,
      cv_url,
      track_preferences,
      cohort_id,
      parent_email,
      gdpr_consent,
    } = await request.json()

    if (!full_name || !date_of_birth || !school_name || !year_group || !track_preferences?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Calculate age for GDPR consent check
    const age = Math.floor(
      (Date.now() - new Date(date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )
    if (age < 16 && !gdpr_consent) {
      return NextResponse.json({ error: 'Parental consent required for under-16s' }, { status: 400 })
    }

    const primaryTrack = track_preferences[0] as InternshipTrack

    // Determine if user is a parent or a student self-registering
    // Check if this user already has a parent profile (children records)
    const { data: existingChildren } = await supabase
      .from('children')
      .select('id')
      .eq('parent_id', user.id)
      .limit(1)

    const isParentAccount = (existingChildren?.length ?? 0) > 0

    let childId: string

    if (isParentAccount) {
      // Parent is creating the application on behalf of child
      const { data: child, error: childError } = await supabase
        .from('children')
        .insert({ parent_id: user.id, name: full_name, date_of_birth })
        .select()
        .single()
      if (childError) return NextResponse.json({ error: childError.message }, { status: 500 })
      childId = child.id
    } else {
      // Student self-registering — create or find children record linked to their own account
      const { data: existingSelf } = await supabase
        .from('children')
        .select('id')
        .eq('student_user_id', user.id)
        .maybeSingle()

      if (existingSelf) {
        childId = existingSelf.id
      } else {
        // Try to link to parent if parent_email provided
        let parentId: string | null = null
        if (parent_email) {
          const adminClient = createAdminClient()
          const { data: parentUsers } = await adminClient.auth.admin.listUsers()
          const parentUser = parentUsers?.users?.find((u) => u.email === parent_email)
          if (parentUser) {
            parentId = parentUser.id
            // Notify parent
            sendParentLinkNotificationEmail({ to: parent_email, studentName: full_name }).catch(() => {})
          }
        }

        if (parentId) {
          const { data: child, error: childError } = await supabase
            .from('children')
            .insert({
              parent_id: parentId,
              name: full_name,
              date_of_birth,
              student_email: user.email,
              student_user_id: user.id,
            })
            .select()
            .single()
          if (childError) return NextResponse.json({ error: childError.message }, { status: 500 })
          childId = child.id
        } else {
          // Standalone student — create with own ID as parent placeholder
          const { data: child, error: childError } = await supabase
            .from('children')
            .insert({
              parent_id: user.id,
              name: full_name,
              date_of_birth,
              student_email: user.email,
              student_user_id: user.id,
            })
            .select()
            .single()
          if (childError) return NextResponse.json({ error: childError.message }, { status: 500 })
          childId = child.id
        }
      }
    }

    // Check for existing active internship assessment for this child
    const { data: existing } = await supabase
      .from('assessments')
      .select('id, status, retake_unlocked')
      .eq('child_id', childId)
      .eq('assessment_type', 'internship')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (existing && existing.status !== 'completed' && !existing.retake_unlocked) {
      return NextResponse.json({ error: 'An active internship assessment already exists', assessment_id: existing.id }, { status: 409 })
    }

    // Create assessment
    const { data: assessment, error: assessmentError } = await supabase
      .from('assessments')
      .insert({ child_id: childId, status: 'pending', assessment_type: 'internship' })
      .select()
      .single()

    if (assessmentError) return NextResponse.json({ error: assessmentError.message }, { status: 500 })

    // Create assessment session
    const subjects = getInternshipSubjects(primaryTrack)
    await supabase.from('assessment_sessions').insert({
      assessment_id: assessment.id,
      current_subject: subjects[0],
      subject_index: 0,
      question_index: 0,
      difficulty_level: 5,
      subject_scores: {},
      completed_subjects: [],
    })

    // Create internship profile
    const { error: profileError } = await supabase.from('internship_profiles').insert({
      assessment_id: assessment.id,
      child_id: childId,
      school_name,
      year_group,
      personal_statement: personal_statement ?? null,
      cv_url: cv_url ?? null,
      track_preferences,
      cohort_id: cohort_id ?? null,
    })

    if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })

    // Confirmation email (fire-and-forget)
    if (user.email) {
      sendInternshipConfirmationEmail({
        to: user.email,
        name: full_name,
        track: primaryTrack.replace('_', ' '),
      }).catch(() => {})
    }

    return NextResponse.json({ assessment_id: assessment.id })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[internship/apply]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { isAdminEmail } = await import('@/lib/admin')
    if (!isAdminEmail(user.email)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // id is the assessment_id
    const db = createAdminClient()
    const { data: internProfile } = await db
      .from('internship_profiles')
      .select('*, assessments(id, status), children(name, student_email), cohorts(id, name)')
      .eq('assessment_id', id)
      .single()

    if (!internProfile) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const { data: result } = await db
      .from('results')
      .select('subject_scores, ai_summary')
      .eq('assessment_id', id)
      .maybeSingle()

    const { data: allCohorts } = await db.from('cohorts').select('id, name').order('start_date', { ascending: false })

    const scores = result?.subject_scores as Record<string, unknown> | null

    return NextResponse.json({
      assessment_id: id,
      child_name: (internProfile.children as { name: string; student_email?: string } | null)?.name ?? '',
      student_email: (internProfile.children as { student_email?: string } | null)?.student_email ?? null,
      school_name: internProfile.school_name,
      year_group: internProfile.year_group,
      personal_statement: internProfile.personal_statement ?? null,
      cv_url: internProfile.cv_url ?? null,
      track_preferences: internProfile.track_preferences ?? [],
      admin_assigned_track: internProfile.admin_assigned_track ?? null,
      cohort_id: internProfile.cohort_id ?? null,
      cohorts: allCohorts ?? [],
      assessment_status: (internProfile.assessments as { status: string } | null)?.status ?? 'pending',
      scores: scores ?? null,
      ai_summary: result?.ai_summary ?? null,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

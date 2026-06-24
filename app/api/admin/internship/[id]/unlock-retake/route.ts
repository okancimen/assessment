import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getInternshipSubjects, InternshipTrack } from '@/types'

export async function POST(
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

    const { data: internProfile } = await supabase
      .from('internship_profiles')
      .select('assessment_id, track_preferences, admin_assigned_track')
      .eq('assessment_id', id)
      .single()

    if (!internProfile) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    await supabase.from('assessment_sessions').delete().eq('assessment_id', id)
    await supabase.from('results').delete().eq('assessment_id', id)
    await supabase.from('assessment_questions').delete().eq('assessment_id', id)
    await supabase.from('assessments')
      .update({ status: 'pending', completed_at: null, retake_unlocked: false })
      .eq('id', id)

    const track = (internProfile.admin_assigned_track ?? internProfile.track_preferences?.[0]) as InternshipTrack
    const subjects = getInternshipSubjects(track)

    await supabase.from('assessment_sessions').insert({
      assessment_id: id,
      current_subject: subjects[0],
      subject_index: 0,
      question_index: 0,
      difficulty_level: 5,
      subject_scores: {},
      completed_subjects: [],
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
import { isAdminEmail } from '@/lib/admin'

function toInitials(name: string): string {
  return name.split(' ').map((w) => w[0]?.toUpperCase() ?? '').join('. ') + '.'
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const cookieStore = await cookies()
    const guestToken = cookieStore.get('ac_tok')?.value

    const isAdmin = !!user && isAdminEmail(user.email)
    const db = createAdminClient()

    const { data: assessment } = await db
      .from('assessments')
      .select('assessment_type, child_id, guest_token, guest_name, children(parent_id, student_user_id, name)')
      .eq('id', id).single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const isGuest = !assessment.child_id && !!assessment.guest_token
    const guestAuthorized = isGuest && !!guestToken && assessment.guest_token === guestToken

    let isOwner = false
    let childName = assessment.guest_name ?? 'Child'

    if (!isGuest) {
      const child = assessment.children as unknown as { parent_id: string; student_user_id: string | null; name: string }
      isOwner = !!user && (child.parent_id === user.id || child.student_user_id === user.id)
      childName = child.name
    }

    if (!isOwner && !isAdmin && !guestAuthorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: result } = await db
      .from('results').select('subject_scores, ai_summary, phase_insights, overall_score, standardized_score')
      .eq('assessment_id', id).single()

    if (!result) return NextResponse.json({ error: 'Results not found' }, { status: 404 })

    const isInternship = assessment.assessment_type === 'internship'

    if (isInternship) {
      const scores = result.subject_scores as {
        tier?: string; overall?: number; aptitude?: number; domain?: number
        soft_skills?: number; track_fit?: Record<string, number>
      }
      return NextResponse.json({
        assessment_type: 'internship',
        tier: scores.tier ?? 'Developing',
        ai_summary: result.ai_summary ?? '',
        phase_insights: result.phase_insights ?? null,
        child_name: childName,
        child_initials: toInitials(childName),
        is_owner: isOwner,
        is_guest: isGuest,
        ...(isAdmin ? {
          scores: {
            aptitude: scores.aptitude, domain: scores.domain,
            soft_skills: scores.soft_skills, overall: scores.overall, track_fit: scores.track_fit,
          }
        } : {}),
      })
    }

    // Academic
    return NextResponse.json({
      assessment_type: 'academic',
      child_name: childName,
      child_initials: toInitials(childName),
      is_owner: isOwner,
      is_guest: isGuest,
      overall_score: result.overall_score,
      standardized_score: result.standardized_score,
      subject_scores: result.subject_scores,
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

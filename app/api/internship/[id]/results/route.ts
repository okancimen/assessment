import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

function toInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('. ') + '.'
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const { isAdminEmail } = await import('@/lib/admin')
    const isAdmin = !!user && isAdminEmail(user.email)

    const db = createAdminClient()

    const { data: assessment } = await db
      .from('assessments')
      .select('*, children(parent_id, student_user_id, name)')
      .eq('id', id)
      .eq('assessment_type', 'internship')
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const child = assessment.children as { parent_id: string; student_user_id: string | null; name: string }

    const isOwner = !!user && (child.parent_id === user.id || child.student_user_id === user.id)

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: result } = await db
      .from('results')
      .select('subject_scores, ai_summary, phase_insights')
      .eq('assessment_id', id)
      .single()

    if (!result) return NextResponse.json({ error: 'Results not found' }, { status: 404 })

    const scores = result.subject_scores as {
      tier?: string
      overall?: number
      aptitude?: number
      domain?: number
      soft_skills?: number
      track_fit?: Record<string, number>
    }

    return NextResponse.json({
      tier: scores.tier ?? 'Developing',
      ai_summary: result.ai_summary ?? '',
      phase_insights: result.phase_insights ?? null,
      child_name: child.name,
      child_initials: toInitials(child.name),
      is_owner: isOwner,
      // Admin-only fields
      ...(isAdmin ? {
        scores: {
          aptitude: scores.aptitude,
          domain: scores.domain,
          soft_skills: scores.soft_skills,
          overall: scores.overall,
          track_fit: scores.track_fit,
        }
      } : {}),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

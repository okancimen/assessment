import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

async function requireAdmin(supabase: Awaited<ReturnType<typeof createClient>>) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single()
  return profile?.is_admin ? user : null
}

export async function GET(_request: NextRequest) {
  try {
    const supabase = await createClient()
    const admin = await requireAdmin(supabase)
    if (!admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { data, error } = await supabase
      .from('internship_profiles')
      .select(`
        *,
        assessments(id, status, created_at, completed_at),
        children(name, date_of_birth),
        cohorts(name)
      `)
      .order('created_at', { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    // Enrich with results (scores)
    const assessmentIds = (data ?? []).map((p) => (p.assessments as { id: string })?.id).filter(Boolean)
    const { data: results } = await supabase
      .from('results')
      .select('assessment_id, subject_scores, overall_score')
      .in('assessment_id', assessmentIds)

    const resultsMap: Record<string, { subject_scores: unknown; overall_score: number }> = {}
    for (const r of results ?? []) {
      resultsMap[r.assessment_id] = r
    }

    const enriched = (data ?? []).map((p) => {
      const aId = (p.assessments as { id: string })?.id
      const r = aId ? resultsMap[aId] : null
      return { ...p, results: r ?? null }
    })

    return NextResponse.json({ candidates: enriched })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

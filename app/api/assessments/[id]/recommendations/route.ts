import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { generateRecommendations } from '@/lib/claude/recommendations'

// POST: regenerate recommendations for a completed assessment
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // Fetch result + assessment + child
    const { data: result, error: fetchError } = await supabase
      .from('results')
      .select('*, assessments(*, children(*))')
      .eq('assessment_id', id)
      .single()

    if (fetchError || !result) {
      return NextResponse.json({ error: 'Result not found', detail: fetchError?.message }, { status: 404 })
    }

    const assessment = result.assessments as { children: { name: string; date_of_birth: string; parent_id: string } }
    const child = assessment.children

    if (child.parent_id !== user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const age = Math.floor(
      (Date.now() - new Date(child.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )

    // Log current state for debugging
    console.log('[regen-recs] current recommendations:', result.recommendations)
    console.log('[regen-recs] subject_scores keys:', Object.keys(result.subject_scores ?? {}))

    const recommendations = await generateRecommendations(child.name, age, result.subject_scores)

    console.log('[regen-recs] generated:', JSON.stringify(recommendations))

    const { error: updateError } = await supabase
      .from('results')
      .update({ recommendations })
      .eq('id', result.id)

    if (updateError) {
      console.error('[regen-recs] update error:', updateError.message)
      return NextResponse.json({ error: updateError.message, hint: 'Run migration: ALTER TABLE results ADD COLUMN IF NOT EXISTS recommendations JSONB DEFAULT NULL;' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, recommendations })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[regen-recs] exception:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

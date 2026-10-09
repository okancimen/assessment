import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ assessmentId: string }> }
) {
  const { assessmentId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data } = await supabase
    .from('personality_results')
    .select('*, personality_assessments(parent_id, age_tier, children(name, date_of_birth))')
    .eq('assessment_id', assessmentId)
    .single()

  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const pa = data.personality_assessments as unknown as { parent_id: string; age_tier: number; children: { name: string; date_of_birth: string } }
  if (pa.parent_id !== user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  return NextResponse.json({
    traitScores: data.trait_scores,
    topStrengths: data.top_strengths,
    growthAreas: data.growth_areas,
    aiSummary: data.ai_summary,
    childName: pa.children.name,
    childDob: pa.children.date_of_birth,
    tier: pa.age_tier,
  })
}

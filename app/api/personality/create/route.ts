import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { getTier, getQuestions } from '@/lib/personality-questions'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { childId } = await req.json()
  if (!childId) return NextResponse.json({ error: 'Missing childId' }, { status: 400 })

  const { data: child } = await supabase
    .from('children')
    .select('id, date_of_birth, parent_id')
    .eq('id', childId)
    .eq('parent_id', user.id)
    .single()

  if (!child) return NextResponse.json({ error: 'Child not found' }, { status: 404 })

  // Resume existing in-progress assessment if one exists
  const { data: existing } = await supabase
    .from('personality_assessments')
    .select('id')
    .eq('child_id', childId)
    .eq('status', 'in_progress')
    .maybeSingle()

  if (existing) return NextResponse.json({ assessmentId: existing.id })

  const tier = getTier(child.date_of_birth)
  const totalQuestions = getQuestions(tier).length

  const { data: assessment, error } = await supabase
    .from('personality_assessments')
    .insert({ child_id: childId, parent_id: user.id, age_tier: tier })
    .select('id')
    .single()

  if (error || !assessment) return NextResponse.json({ error: error?.message }, { status: 500 })

  return NextResponse.json({ assessmentId: assessment.id, tier, totalQuestions })
}

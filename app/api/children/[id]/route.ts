import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const { name, date_of_birth, goals, subjects, outcome_goal } = await request.json()

  if (!name || !date_of_birth) {
    return NextResponse.json({ error: 'Name and date of birth are required' }, { status: 400 })
  }

  const { data: child } = await supabase
    .from('children')
    .select('id')
    .eq('id', id)
    .eq('parent_id', user.id)
    .single()

  if (!child) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const { error } = await supabase
    .from('children')
    .update({
      name,
      date_of_birth,
      goals: goals ?? [],
      subjects: subjects ?? [],
      outcome_goal: outcome_goal ?? null,
    })
    .eq('id', id)
    .eq('parent_id', user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params

  const { data: child } = await supabase
    .from('children')
    .select('id')
    .eq('id', id)
    .eq('parent_id', user.id)
    .single()

  if (!child) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const { data: completedAssessments } = await supabase
    .from('assessments')
    .select('id')
    .eq('child_id', id)
    .eq('status', 'completed')
    .limit(1)

  if (completedAssessments && completedAssessments.length > 0) {
    return NextResponse.json(
      { error: 'Cannot delete a child with completed assessments' },
      { status: 409 }
    )
  }

  const { data: completedPersonality } = await supabase
    .from('personality_assessments')
    .select('id')
    .eq('child_id', id)
    .eq('status', 'completed')
    .limit(1)

  if (completedPersonality && completedPersonality.length > 0) {
    return NextResponse.json(
      { error: 'Cannot delete a child with completed assessments' },
      { status: 409 }
    )
  }

  const { error } = await supabase
    .from('children')
    .delete()
    .eq('id', id)
    .eq('parent_id', user.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return new NextResponse(null, { status: 204 })
}

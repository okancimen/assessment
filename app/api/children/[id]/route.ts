import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

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

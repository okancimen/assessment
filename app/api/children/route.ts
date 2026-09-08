import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('children')
    .select('*')
    .eq('parent_id', user.id)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { name, date_of_birth, goals, subjects, outcome_goal } = await request.json()

  if (!name || !date_of_birth) {
    return NextResponse.json({ error: 'Name and date of birth are required' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('children')
    .insert({
      parent_id: user.id, name, date_of_birth,
      goals: goals ?? [],
      subjects: subjects ?? [],
      outcome_goal: outcome_goal ?? null,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}

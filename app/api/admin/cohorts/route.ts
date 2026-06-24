import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isAdminEmail } from '@/lib/admin'

async function requireAdmin(supabase: Awaited<ReturnType<typeof createClient>>) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !isAdminEmail(user.email)) return null
  return user
}

export async function GET(_request: NextRequest) {
  try {
    const supabase = await createClient()
    const admin = await requireAdmin(supabase)
    if (!admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { data, error } = await supabase
      .from('cohorts')
      .select('*, internship_profiles(id)')
      .order('start_date', { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const cohorts = (data ?? []).map((c) => ({
      ...c,
      candidate_count: Array.isArray(c.internship_profiles) ? c.internship_profiles.length : 0,
      internship_profiles: undefined,
    }))

    return NextResponse.json({ cohorts })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const admin = await requireAdmin(supabase)
    if (!admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { name, start_date, description } = await request.json()
    if (!name || !start_date) return NextResponse.json({ error: 'name and start_date are required' }, { status: 400 })

    const { data, error } = await supabase
      .from('cohorts')
      .insert({ name, start_date, description: description ?? null, created_by: admin.id })
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ cohort: data })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

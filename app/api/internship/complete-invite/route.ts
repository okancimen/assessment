import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { child_id } = await request.json()
    if (!child_id) return NextResponse.json({ error: 'child_id required' }, { status: 400 })

    const db = createAdminClient()

    // Verify the children record belongs to this invite (student_email matches)
    const { data: child } = await db
      .from('children')
      .select('id, student_email, student_user_id')
      .eq('id', child_id)
      .single()

    if (!child) return NextResponse.json({ error: 'Invite not found' }, { status: 404 })
    if (child.student_user_id) return NextResponse.json({ ok: true, already_linked: true })
    if (child.student_email && child.student_email !== user.email) {
      return NextResponse.json({ error: 'Email mismatch' }, { status: 403 })
    }

    const { error } = await db
      .from('children')
      .update({ student_user_id: user.id, student_email: user.email })
      .eq('id', child_id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

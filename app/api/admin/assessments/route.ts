import { createClient as createAuthClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function DELETE(req: Request) {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  if (!allowed.includes(user.email?.toLowerCase() ?? '')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { assessmentId, type } = await req.json()
  if (!assessmentId || typeof assessmentId !== 'string') {
    return NextResponse.json({ error: 'Missing assessmentId' }, { status: 400 })
  }

  // Personality assessments live in their own table; everything else is academic/internship.
  const table = type === 'personality' ? 'personality_assessments' : 'assessments'

  const db = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  // Related rows (sessions, answers, results) reference the parent via
  // ON DELETE CASCADE, so deleting the parent row removes them too.
  const { error } = await db.from(table).delete().eq('id', assessmentId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ success: true })
}

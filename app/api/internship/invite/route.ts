import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { student_email, student_name, date_of_birth } = await request.json()

    if (!student_email || !student_name || !date_of_birth) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminClient = createAdminClient()
    const { data: existingUsers } = await adminClient.auth.admin.listUsers({ page: 1, perPage: 1000 })
    const existingStudent = existingUsers?.users?.find((u) => u.email === student_email)

    if (existingStudent) {
      // Auto-link: student already registered — create/update children record
      const { data: existingChild } = await supabase
        .from('children')
        .select('id')
        .eq('student_user_id', existingStudent.id)
        .maybeSingle()

      if (existingChild) {
        // Already linked — verify it belongs to this parent
        const { data: myChild } = await supabase
          .from('children')
          .select('id')
          .eq('id', existingChild.id)
          .eq('parent_id', user.id)
          .maybeSingle()

        if (!myChild) {
          return NextResponse.json({ error: 'Student is linked to a different parent account' }, { status: 409 })
        }
        return NextResponse.json({ linked: true, already_existed: true })
      }

      // Student exists but not yet linked — create children record
      const { error } = await supabase.from('children').insert({
        parent_id: user.id,
        name: student_name,
        date_of_birth,
        student_email,
        student_user_id: existingStudent.id,
      })
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      return NextResponse.json({ linked: true })
    }

    // Student doesn't exist — create children record and send magic link invite
    const { data: child, error: childError } = await supabase.from('children').insert({
      parent_id: user.id,
      name: student_name,
      date_of_birth,
      student_email,
      invited_at: new Date().toISOString(),
    }).select().single()

    if (childError) return NextResponse.json({ error: childError.message }, { status: 500 })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
    const { error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(student_email, {
      redirectTo: `${siteUrl}/internship/register?child_id=${child.id}`,
    })

    if (inviteError) return NextResponse.json({ error: inviteError.message }, { status: 500 })

    return NextResponse.json({ invited: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[internship/invite]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

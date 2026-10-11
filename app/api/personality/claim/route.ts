import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url)
  const assessmentId = searchParams.get('assessmentId')

  if (!assessmentId) {
    return NextResponse.redirect(`${origin}/personality-assessment`)
  }

  const cookieStore = await cookies()
  const guestToken = cookieStore.get('pg_tok')?.value
    ?? searchParams.get('token')
    ?? undefined

  if (!guestToken) {
    return NextResponse.redirect(`${origin}/personality-assessment`)
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const claimUrl = `/api/personality/claim?assessmentId=${assessmentId}&token=${guestToken}`
    return NextResponse.redirect(
      `${origin}/auth/register?redirect=${encodeURIComponent(claimUrl)}`,
    )
  }

  const admin = createAdminClient()
  const { data: assessment } = await admin
    .from('personality_assessments')
    .select('id, guest_token, guest_name, guest_age')
    .eq('id', assessmentId)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) {
    return NextResponse.redirect(`${origin}/personality-assessment`)
  }

  const approxDob = ageToDob(assessment.guest_age ?? 10)

  const { data: child } = await admin
    .from('children')
    .insert({
      name: assessment.guest_name ?? 'Child',
      date_of_birth: approxDob,
      parent_id: user.id,
    })
    .select('id')
    .single()

  if (child) {
    await admin
      .from('personality_assessments')
      .update({ child_id: child.id, parent_id: user.id, guest_token: null })
      .eq('id', assessmentId)
  }

  const response = NextResponse.redirect(`${origin}/strengths/${assessmentId}/results`)
  response.cookies.delete('pg_tok')
  return response
}

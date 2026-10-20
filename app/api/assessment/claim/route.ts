import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

function getOrigin(req: NextRequest): string {
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? 'eduentry.com'
  const proto = req.headers.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}`
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const origin = getOrigin(req)
  const assessmentId = searchParams.get('assessmentId')

  if (!assessmentId) {
    return NextResponse.redirect(`${origin}/academic-assessment`)
  }

  const cookieStore = await cookies()
  const guestToken = cookieStore.get('ac_tok')?.value
    ?? searchParams.get('token')
    ?? undefined

  if (!guestToken) {
    return NextResponse.redirect(`${origin}/academic-assessment`)
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const claimUrl = `/api/assessment/claim?assessmentId=${assessmentId}&token=${guestToken}`
    return NextResponse.redirect(
      `${origin}/auth/register?redirect=${encodeURIComponent(claimUrl)}`,
    )
  }

  const admin = createAdminClient()
  const { data: assessment } = await admin
    .from('assessments')
    .select('id, guest_token, guest_name, guest_age, status')
    .eq('id', assessmentId)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) {
    return NextResponse.redirect(`${origin}/academic-assessment`)
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
      .from('assessments')
      .update({ child_id: child.id, guest_token: null })
      .eq('id', assessmentId)
  }

  const dest = assessment.status === 'completed' ? `/results/${assessmentId}` : '/dashboard'
  const response = NextResponse.redirect(`${origin}${dest}`)
  response.cookies.delete('ac_tok')
  return response
}

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

function origin(req: NextRequest): string {
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host') ?? 'eduentry.com'
  const proto = req.headers.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}`
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = searchParams.get('id')
  const token = searchParams.get('token')
  const base = origin(req)

  if (!id || !token) {
    return NextResponse.redirect(`${base}/academic-assessment`)
  }

  const db = createAdminClient()
  const { data: assessment } = await db
    .from('assessments')
    .select('guest_token')
    .eq('id', id)
    .single()

  if (!assessment || assessment.guest_token !== token) {
    return NextResponse.redirect(`${base}/academic-assessment`)
  }

  const res = NextResponse.redirect(`${base}/assessment/${id}/question`)
  res.cookies.set('ac_tok', token, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  })
  return res
}

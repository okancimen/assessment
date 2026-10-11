import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = searchParams.get('id')
  const token = searchParams.get('token')

  if (!id || !token) {
    return NextResponse.redirect(new URL('/academic-assessment', req.url))
  }

  const db = createAdminClient()
  const { data: assessment } = await db
    .from('assessments')
    .select('guest_token')
    .eq('id', id)
    .single()

  if (!assessment || assessment.guest_token !== token) {
    return NextResponse.redirect(new URL('/academic-assessment', req.url))
  }

  const res = NextResponse.redirect(new URL(`/assessment/${id}/question`, req.url))
  res.cookies.set('ac_tok', token, {
    httpOnly: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production',
  })
  return res
}

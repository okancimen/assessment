import { createAdminClient } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'
import { getTier, getQuestions } from '@/lib/personality-questions'
import { getClientIp, geolocateIp } from '@/lib/geo'

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { name, age } = body

  if (!name || typeof name !== 'string' || name.trim().length < 1) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  const ageNum = Number(age)
  if (!ageNum || ageNum < 6 || ageNum > 20) {
    return NextResponse.json({ error: 'Age must be between 6 and 20' }, { status: 400 })
  }

  const guestToken = crypto.randomUUID()
  const approxDob = ageToDob(ageNum)
  const tier = getTier(approxDob)
  const totalQuestions = getQuestions(tier).length

  const admin = createAdminClient()
  const { data: assessment, error } = await admin
    .from('personality_assessments')
    .insert({
      guest_token: guestToken,
      guest_name: name.trim(),
      guest_age: ageNum,
      age_tier: tier,
      status: 'in_progress',
    })
    .select('id')
    .single()

  if (error || !assessment) {
    return NextResponse.json({ error: error?.message ?? 'Failed to create' }, { status: 500 })
  }

  // Geolocate the guest from their request IP (same source as the academic
  // guest flow). Non-blocking and best-effort — never affects the assessment.
  const ip = getClientIp(req.headers)
  void geolocateIp(ip)
    .then((geo) => {
      if (!geo) return
      return admin
        .from('personality_assessments')
        .update({ guest_country: geo.country, guest_city: geo.city })
        .eq('id', assessment.id)
    })
    .catch(() => { /* geo is best-effort */ })

  const response = NextResponse.json({ assessmentId: assessment.id, totalQuestions })
  response.cookies.set('pg_tok', guestToken, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return response
}

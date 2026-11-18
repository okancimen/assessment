import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendGuestResultsEmail } from '@/lib/email'

function scoreLabel(score: number): string {
  if (score >= 120) return 'Well Above Average'
  if (score >= 110) return 'Above Average'
  if (score >= 90)  return 'Average'
  if (score >= 80)  return 'Below Average'
  return 'Needs Support'
}

export async function POST(req: NextRequest) {
  const { email, assessmentId, guestToken } = await req.json()

  if (!email || !assessmentId || !guestToken) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { data: assessment } = await supabase
    .from('assessments')
    .select('id, guest_name, guest_token, status')
    .eq('id', assessmentId)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) {
    return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })
  }
  if (assessment.status !== 'completed') {
    return NextResponse.json({ error: 'Assessment not completed' }, { status: 400 })
  }

  const { data: result } = await supabase
    .from('results')
    .select('standardized_score')
    .eq('assessment_id', assessmentId)
    .single()

  const overallScore = result?.standardized_score ?? 100
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
  const resultsUrl  = `${siteUrl}/academic-assessment/results/${assessmentId}?token=${encodeURIComponent(guestToken)}`
  const registerUrl = `${siteUrl}/auth/register?redirect=${encodeURIComponent(`/api/assessment/claim?assessmentId=${assessmentId}&token=${guestToken}`)}`

  await sendGuestResultsEmail({
    to: email,
    guestName: assessment.guest_name ?? 'Your child',
    overallScore,
    scoreLabel: scoreLabel(overallScore),
    resultsUrl,
    registerUrl,
  })

  await supabase
    .from('assessments')
    .update({ guest_email: email, reminder_sent_at: new Date().toISOString() })
    .eq('id', assessmentId)

  return NextResponse.json({ ok: true })
}

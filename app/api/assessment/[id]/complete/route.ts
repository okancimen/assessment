import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { computeResults, computeOverallScore, getScoreLabel, estimateTheta } from '@/lib/assessment/adaptive'
import { computeTrackFit } from '@/lib/claude/internship-questions'
import { withOverloadRetry } from '@/lib/claude/questions'
import { sendResultsEmail, sendInternshipAdminAlertEmail } from '@/lib/email'
import { getReadinessTier, InternshipTrack } from '@/types'
import { createAdminClient } from '@/lib/supabase/admin'
import Anthropic from '@anthropic-ai/sdk'

const ai = new Anthropic()

function thetaToInternship(theta: number): number {
  return Math.max(0, Math.min(100, Math.round(50 + theta * 12.5)))
}

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: assessment } = await supabase
      .from('assessments')
      .select('*, children(parent_id, student_user_id, name, date_of_birth)')
      .eq('id', id)
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const child = assessment.children as {
      parent_id: string; student_user_id: string | null; name: string; date_of_birth: string
    }
    const isInternship = assessment.assessment_type === 'internship'

    const authorized = isInternship
      ? child.parent_id === user.id || child.student_user_id === user.id
      : child.parent_id === user.id
    if (!authorized) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: session } = await supabase
      .from('assessment_sessions').select('*').eq('assessment_id', id).single()
    if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    if (isInternship) {
      return handleInternshipComplete(id, supabase, assessment, child, session, user)
    }
    return handleAcademicComplete(id, supabase, assessment, child, session, user)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[assessment/complete]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleAcademicComplete(id: string, supabase: any, assessment: any, child: any, session: any, user: any) {
  const allScores = session.subject_scores || {}
  const subjectResults = computeResults(allScores)
  const { overall_score, standardized_score } = computeOverallScore(subjectResults)

  const { data: result, error: resultError } = await supabase.from('results').upsert({
    assessment_id: id, child_id: assessment.child_id,
    overall_score, standardized_score, subject_scores: subjectResults,
  }, { onConflict: 'assessment_id' }).select().single()

  if (resultError) return NextResponse.json({ error: resultError.message }, { status: 500 })

  await supabase.from('assessments')
    .update({ status: 'completed', completed_at: new Date().toISOString() }).eq('id', id)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
  sendResultsEmail({
    to: user.email!,
    childName: child.name,
    overallScore: standardized_score,
    scoreLabel: getScoreLabel(standardized_score),
    resultsUrl: `${siteUrl}/assessment/${id}/results`,
  }).catch(() => {})

  return NextResponse.json({ result_id: result.id })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInternshipComplete(id: string, supabase: any, assessment: any, child: any, session: any, _user: any) {
  const { data: profile } = await supabase
    .from('internship_profiles')
    .select('personal_statement, track_preferences, admin_assigned_track, school_name, year_group')
    .eq('assessment_id', id).single()

  const subjectScores = session.subject_scores ?? {}

  const aptitudeResponses = [
    ...(subjectScores['aptitude_verbal']?.responses ?? []),
    ...(subjectScores['aptitude_math']?.responses ?? []),
  ]
  const aptitudeScore = thetaToInternship(estimateTheta(aptitudeResponses))

  const domainKey = Object.keys(subjectScores).find((k) => k.startsWith('domain_'))
  const domainData = domainKey ? subjectScores[domainKey] : null
  const domainScore = domainData?.total > 0 ? Math.round((domainData.correct / domainData.total) * 100) : 0

  const ssData = subjectScores['soft_skills']
  const softSkillsScore = ssData?.total > 0 ? Math.round((ssData.correct / ssData.total) * 100) : 0

  const ipData = subjectScores['interest_profile']
  const trackCounts: Record<string, number> = ipData?.track_counts ?? {}
  const trackFit = computeTrackFit(trackCounts, ipData?.total ?? 0)

  const overall = Math.round(aptitudeScore * 0.3 + domainScore * 0.35 + softSkillsScore * 0.35)
  const tier = getReadinessTier(overall)

  const track = (profile?.admin_assigned_track ?? profile?.track_preferences?.[0] ?? 'general') as InternshipTrack
  const trackLabel = track.replace('_', ' ')
  const statementContext = profile?.personal_statement ? `\n\nStudent's personal statement:\n"${profile.personal_statement}"` : ''

  const summaryPrompt = `You are writing a personalised assessment summary for a high school student's internship application report.

Student: ${child.name}
Track: ${trackLabel}
School: ${profile?.school_name ?? 'Unknown'}, ${profile?.year_group ?? ''}
Readiness tier: ${tier}
Aptitude score: ${aptitudeScore}/100
Domain knowledge score: ${domainScore}/100
Workplace skills score: ${softSkillsScore}/100
Overall score: ${overall}/100${statementContext}

Write a warm, encouraging, and professional 2-3 sentence summary appropriate for both the student and their parent to read. Focus on strengths and potential. Do not mention specific numeric scores — only describe qualities and readiness level. End with one forward-looking sentence about the student's potential.`

  let aiSummary = ''
  try {
    const msg = await withOverloadRetry(() =>
      ai.messages.create({ model: 'claude-sonnet-4-6', max_tokens: 300, messages: [{ role: 'user', content: summaryPrompt }] })
    )
    aiSummary = msg.content[0].type === 'text' ? msg.content[0].text.trim() : ''
  } catch {
    aiSummary = `${child.name} has completed the internship assessment and demonstrated genuine potential in the ${trackLabel} track. Their results reflect a solid foundation for an internship experience.`
  }

  const internshipScores = { aptitude: aptitudeScore, domain: domainScore, soft_skills: softSkillsScore, overall, tier, track_fit: trackFit }

  const { data: result, error: resultError } = await supabase.from('results').upsert({
    assessment_id: id, child_id: assessment.child_id,
    overall_score: overall, standardized_score: overall,
    subject_scores: internshipScores, ai_summary: aiSummary,
  }, { onConflict: 'assessment_id' }).select().single()

  if (resultError) return NextResponse.json({ error: resultError.message }, { status: 500 })

  await supabase.from('assessments')
    .update({ status: 'completed', completed_at: new Date().toISOString() }).eq('id', id)

  const adminClient = createAdminClient()
  void supabase.from('profiles').select('id').eq('is_admin', true).then(async ({ data: admins }: { data: { id: string }[] | null }) => {
    if (!admins?.length) return
    const { data: adminUsers } = await adminClient.auth.admin.listUsers()
    const adminEmails = (adminUsers?.users ?? [])
      .filter((u) => admins.some((a) => a.id === u.id) && u.email)
      .map((u) => u.email!)
    if (!adminEmails.length) return
    void sendInternshipAdminAlertEmail({ adminEmails, applicantName: child.name, track: trackLabel, school: profile?.school_name ?? 'Unknown', assessmentId: id })
  })

  return NextResponse.json({ result_id: result.id, tier, overall })
}

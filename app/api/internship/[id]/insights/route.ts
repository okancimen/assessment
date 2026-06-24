import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { withOverloadRetry } from '@/lib/claude/questions'
import { INTERNSHIP_PHASE_LABELS } from '@/types'
import Anthropic from '@anthropic-ai/sdk'

const ai = new Anthropic()

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
      .select('*, children(parent_id, student_user_id, name)')
      .eq('id', id)
      .eq('assessment_type', 'internship')
      .single()

    if (!assessment) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const child = assessment.children as { parent_id: string; student_user_id: string | null; name: string }
    if (child.parent_id !== user.id && child.student_user_id !== user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: result } = await supabase
      .from('results')
      .select('subject_scores, phase_insights')
      .eq('assessment_id', id)
      .single()

    if (!result) return NextResponse.json({ error: 'Results not found' }, { status: 404 })

    // Idempotent — return cached insights if already generated
    if (result.phase_insights) {
      return NextResponse.json({ insights: result.phase_insights })
    }

    const scores = result.subject_scores as {
      aptitude?: number
      domain?: number
      soft_skills?: number
      overall?: number
      tier?: string
    }

    const phases = [
      { key: 'aptitude', label: INTERNSHIP_PHASE_LABELS.aptitude, score: scores.aptitude },
      { key: 'domain', label: INTERNSHIP_PHASE_LABELS.domain, score: scores.domain },
      { key: 'soft_skills', label: INTERNSHIP_PHASE_LABELS.soft_skills, score: scores.soft_skills },
    ]

    const prompt = `You are writing personalised phase insight cards for a high school student's internship assessment report.

Student: ${child.name}
Overall readiness tier: ${scores.tier ?? 'Developing'}

For each phase below, write exactly 2-3 bullet points: 1-2 strength observations and exactly 1 growth area. Keep each bullet under 20 words. Tone: encouraging, honest, professional. Suitable for both student and parent.

Phases:
${phases.map((p) => `- ${p.label}: score ${p.score ?? 0}/100`).join('\n')}

Respond with ONLY valid JSON:
{
  "aptitude": { "title": "General Aptitude", "bullets": ["...", "...", "..."] },
  "domain": { "title": "Domain Knowledge", "bullets": ["...", "...", "..."] },
  "soft_skills": { "title": "Workplace Skills", "bullets": ["...", "...", "..."] }
}`

    const msg = await withOverloadRetry(() =>
      ai.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }],
      })
    )

    const raw = msg.content[0].type === 'text' ? msg.content[0].text.trim() : '{}'
    let insights: Record<string, { title: string; bullets: string[] }>
    try {
      const match = raw.match(/\{[\s\S]*\}/)
      insights = JSON.parse(match ? match[0] : '{}')
    } catch {
      insights = {}
    }

    await supabase
      .from('results')
      .update({ phase_insights: insights })
      .eq('assessment_id', id)

    return NextResponse.json({ insights })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[internship/insights]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

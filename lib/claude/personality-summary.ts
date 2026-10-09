import Anthropic from '@anthropic-ai/sdk'
import { Trait, TRAIT_LABELS } from '@/lib/personality-questions'

const client = new Anthropic()

const LANG_NAMES: Record<string, string> = {
  en: 'English', fr: 'French', es: 'Spanish', ar: 'Arabic',
  tr: 'Turkish', ru: 'Russian', zh: 'Chinese',
}

export async function generatePersonalitySummary(opts: {
  childName: string
  age: number
  traitScores: Record<Trait, number>
  topStrengths: Trait[]
  growthAreas: Trait[]
  locale?: string
}): Promise<string> {
  const { childName, age, traitScores, topStrengths, growthAreas, locale = 'en' } = opts
  const lang = LANG_NAMES[locale] ?? 'English'

  const scoreLines = (Object.entries(traitScores) as [Trait, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([t, s]) => `  ${TRAIT_LABELS[t]}: ${s}/5`)
    .join('\n')

  const strengths = topStrengths.map((t) => TRAIT_LABELS[t]).join(', ')
  const growth = growthAreas.map((t) => TRAIT_LABELS[t]).join(', ')

  const prompt = `You are a warm and insightful child development specialist writing a personality profile.

A parent has completed a character strengths assessment for their child ${childName}, aged ${age}.

Trait scores (1–5 scale, 5 = very strong):
${scoreLines}

Top strengths: ${strengths}
Areas to nurture: ${growth}

Write a warm, specific, 2–3 paragraph narrative summary of ${childName}'s personality profile for their parent.
- Open with what makes ${childName} unique based on their strongest traits
- In the second paragraph, gently describe the growth areas as opportunities rather than weaknesses
- Close with an encouraging, forward-looking sentence
- Use the parent's name "your child" rather than repeating ${childName} too often
- Keep language positive, concrete, and free of clinical jargon
- Do NOT mention VIA, character strengths framework, or any assessment methodology by name
- Write in ${lang}`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 500,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')
  return content.text.trim()
}

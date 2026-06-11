import Anthropic from '@anthropic-ai/sdk'
import { jsonrepair } from 'jsonrepair'
import { SUBJECT_LABELS, Subject } from '@/types'

const client = new Anthropic()

export interface Recommendation {
  subject: string
  tip: string
}

export async function generateRecommendations(
  childName: string,
  age: number,
  subjectScores: Record<string, { standardized_score: number; percentage: number }>
): Promise<Recommendation[]> {
  const sorted = Object.entries(subjectScores).sort((a, b) => a[1].standardized_score - b[1].standardized_score)
  const scoreLines = sorted
    .map(([s, v]) => `- ${SUBJECT_LABELS[s as Subject]}: score ${v.standardized_score} (${v.percentage}% correct)`)
    .join('\n')

  const prompt = `You are an educational advisor reviewing a child's standardised academic assessment.

Child: ${childName}, Age: ${age} years
Results (mean=100, SD=15 scale — lower scores need more support):
${scoreLines}

Write exactly 4 concise, actionable improvement tips. Prioritise the weakest areas first.
Each tip must be practical, positive, and 1-2 sentences — something a parent can act on this week.

Respond with ONLY a valid JSON array, no markdown:
[
  {"subject": "mathematics", "tip": "..."},
  {"subject": "english", "tip": "..."}
]`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 600,
    messages: [{ role: 'user', content: prompt }],
  })

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  let jsonText = content.text.trim()
  if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
  }
  const match = jsonText.match(/\[[\s\S]*\]/)
  if (!match) throw new Error('No JSON array in recommendations response')

  return JSON.parse(jsonrepair(match[0])) as Recommendation[]
}

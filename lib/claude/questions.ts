import Anthropic from '@anthropic-ai/sdk'
import { jsonrepair } from 'jsonrepair'
import { Subject, Question, QuestionOption, DifficultyLevel, SUBJECT_TOPICS } from '@/types'

const client = new Anthropic()

function getAgeDescriptor(age: number): string {
  if (age <= 7) return 'early primary (age 6-7)'
  if (age <= 10) return 'primary (age 8-10)'
  if (age <= 12) return 'upper primary (age 11-12)'
  if (age <= 14) return 'early secondary (age 13-14)'
  return 'secondary (age 15-17)'
}

function getDifficultyDescriptor(level: number): string {
  if (level <= 2) return 'very easy, basic foundational concepts'
  if (level <= 4) return 'easy, straightforward application'
  if (level <= 6) return 'moderate, requires some reasoning'
  if (level <= 8) return 'challenging, requires multi-step thinking'
  return 'very challenging, advanced problem-solving'
}

function shuffleOptions(options: QuestionOption[], correctId: string): { options: QuestionOption[]; correct_answer: string } {
  const correctText = options.find((o) => o.id === correctId)?.text?.trim() ?? ''
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  const ids = ['A', 'B', 'C', 'D']
  const reindexed = shuffled.map((opt, i) => ({ id: ids[i], text: opt.text }))
  const newCorrectId = reindexed.find((o) => o.text.trim() === correctText)?.id
  if (!newCorrectId) throw new Error('shuffleOptions: correct option not found after shuffle')
  return { options: reindexed, correct_answer: newCorrectId }
}

const SUBJECT_PROMPTS: Record<Subject, string> = {
  english: `You are an expert question writer for standardised academic assessments (UK National Curriculum, Cambridge IGCSE level).
Your task is to generate English comprehension and language questions.
Focus areas rotate among: reading comprehension, grammar, spelling, punctuation, and vocabulary.
Every question must have exactly one correct answer that any qualified teacher would agree on.`,

  mathematics: `You are an expert question writer for standardised academic assessments (UK National Curriculum, PISA level).
Your task is to generate Mathematics questions.
Focus areas rotate among: number operations, algebra, geometry, data handling, and fractions/decimals.
Every question must have exactly one numerically correct answer. Verify your arithmetic before finalising.`,

  verbal_reasoning: `You are an expert question writer for 11+ and grammar school entrance assessments.
Your task is to generate Verbal Reasoning questions that test logical thinking with words — not knowledge recall.
Focus areas: word analogies (A:B::C:?), odd-one-out, word sequences, logical deduction, and classification.
The correct answer must be the only defensible choice; distractors must be clearly wrong.`,

  nonverbal_reasoning: `You are an expert question writer for 11+ and cognitive ability assessments.
Your task is to generate Non-Verbal Reasoning questions expressed in text (no images available).
Focus areas: completing sequences described in words, identifying the odd shape out, matrix reasoning described textually, and spatial relationships.
The pattern or rule must be unambiguous — there must be exactly one valid completion or answer.`,
}

async function withOverloadRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      const isOverloaded =
        err instanceof Error &&
        (err.message.includes('overloaded') || err.message.includes('529'))
      if (isOverloaded && attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt))
        continue
      }
      throw err
    }
  }
  throw new Error('unreachable')
}

async function attemptGenerate(
  subject: Subject,
  age: number,
  difficulty: DifficultyLevel,
  topic: string,
  usedQuestionTexts: string[]
): Promise<Omit<Question, 'id' | 'created_at'>> {
  const avoidSection = usedQuestionTexts.length > 0
    ? `\nDo NOT generate any of these questions (already used in this assessment):\n${usedQuestionTexts.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n`
    : ''

  const prompt = `Student age: ${age} years old (${getAgeDescriptor(age)})
Difficulty: ${difficulty}/10 — ${getDifficultyDescriptor(difficulty)}
Topic: ${topic.replace(/_/g, ' ')}
${avoidSection}
Generate ONE multiple-choice question with exactly 4 options. The question must be:
- Age-appropriate for a ${age}-year-old
- At difficulty level ${difficulty}/10
- Clearly worded with one unambiguously correct answer
- 4 options with distinct, non-overlapping answer texts (no duplicates)
- Plausible distractors (wrong answers that test understanding, but are clearly incorrect)

For Non-Verbal Reasoning: describe shapes/patterns using clear text (e.g., "circle, square, triangle, circle, square, ___")

Before writing the JSON, verify:
- Exactly one option is correct — not zero, not two.
- Each wrong option is clearly incorrect and cannot be reasonably argued as right.
- For maths: recheck your arithmetic.
- For verbal reasoning: confirm the relationship holds for the correct pair and fails for all distractors.
- For non-verbal reasoning: confirm the pattern has exactly one valid completion.

Respond with ONLY valid JSON, no markdown fences, no extra text:
{
  "question_text": "The question text here",
  "options": [
    {"id": "A", "text": "First option"},
    {"id": "B", "text": "Second option"},
    {"id": "C", "text": "Third option"},
    {"id": "D", "text": "Fourth option"}
  ],
  "correct_answer": "A",
  "explanation": "Brief explanation of why this is correct and why each other option is wrong",
  "topic": "${topic}"
}`

  const message = await withOverloadRetry(() =>
    client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SUBJECT_PROMPTS[subject],
      messages: [{ role: 'user', content: prompt }],
    })
  )

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type from Claude')

  let jsonText = content.text.trim()
  // Strip markdown fences if present
  if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
  }
  // Extract only the first {...} block — guards against trailing text after the JSON
  const match = jsonText.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('No JSON object found in Claude response')

  // jsonrepair handles all malformed JSON: unescaped quotes, newlines,
  // trailing commas, missing brackets, etc.
  const parsed = JSON.parse(jsonrepair(match[0]))

  // Validate no duplicate option texts
  const optionTexts = (parsed.options as QuestionOption[]).map((o) => o.text.toLowerCase().trim())
  const uniqueTexts = new Set(optionTexts)
  if (uniqueTexts.size < parsed.options.length) {
    throw new Error('Duplicate option texts detected')
  }

  // Shuffle options so correct answer lands in a random position
  const { options, correct_answer } = shuffleOptions(parsed.options as QuestionOption[], parsed.correct_answer)

  return {
    subject,
    topic: parsed.topic || topic,
    difficulty,
    age_min: Math.max(7, age - 1),
    age_max: Math.min(16, age + 1),
    question_text: parsed.question_text,
    options,
    correct_answer,
    explanation: parsed.explanation,
  }
}

export async function generateQuestion(
  subject: Subject,
  age: number,
  difficulty: DifficultyLevel,
  usedTopics: string[] = [],
  usedQuestionTexts: string[] = []
): Promise<Omit<Question, 'id' | 'created_at'>> {
  const topics = SUBJECT_TOPICS[subject]
  const availableTopics = topics.filter((t) => !usedTopics.includes(t))
  const topic = availableTopics.length > 0
    ? availableTopics[Math.floor(Math.random() * availableTopics.length)]
    : topics[Math.floor(Math.random() * topics.length)]

  // Retry up to 3 times to handle duplicate options or duplicate question texts
  for (let attempt = 0; attempt < 3; attempt++) {
    const result = await attemptGenerate(subject, age, difficulty, topic, usedQuestionTexts)

    const isDuplicate = usedQuestionTexts.some(
      (t) => t.toLowerCase().trim() === result.question_text.toLowerCase().trim()
    )
    if (!isDuplicate) return result
  }

  // Fall back to final attempt without the avoid list if all retries matched (very unlikely)
  return attemptGenerate(subject, age, difficulty, topic, [])
}

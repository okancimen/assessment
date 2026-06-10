import Anthropic from '@anthropic-ai/sdk'
import { Subject, Question, QuestionOption, DifficultyLevel, SUBJECT_TOPICS } from '@/types'

const client = new Anthropic()

function getAgeDescriptor(age: number): string {
  if (age <= 8) return 'early primary (age 7-8)'
  if (age <= 10) return 'primary (age 9-10)'
  if (age <= 12) return 'upper primary (age 11-12)'
  if (age <= 14) return 'early secondary (age 13-14)'
  return 'secondary (age 15-16)'
}

function getDifficultyDescriptor(level: number): string {
  if (level <= 2) return 'very easy, basic foundational concepts'
  if (level <= 4) return 'easy, straightforward application'
  if (level <= 6) return 'moderate, requires some reasoning'
  if (level <= 8) return 'challenging, requires multi-step thinking'
  return 'very challenging, advanced problem-solving'
}

function shuffleOptions(options: QuestionOption[], correctId: string): { options: QuestionOption[]; correct_answer: string } {
  const correctText = options.find((o) => o.id === correctId)?.text ?? ''
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  const ids = ['A', 'B', 'C', 'D']
  const reindexed = shuffled.map((opt, i) => ({ id: ids[i], text: opt.text }))
  const newCorrectId = reindexed.find((o) => o.text === correctText)?.id ?? ids[0]
  return { options: reindexed, correct_answer: newCorrectId }
}

const SUBJECT_PROMPTS: Record<Subject, string> = {
  english: `You are generating an English comprehension/language question for a standardized academic assessment.
Focus areas rotate among: reading comprehension, grammar, spelling, punctuation, and vocabulary.`,
  mathematics: `You are generating a Mathematics question for a standardized academic assessment.
Focus areas rotate among: number operations, algebra, geometry, data handling, and fractions/decimals.`,
  verbal_reasoning: `You are generating a Verbal Reasoning question for a standardized academic assessment.
These test critical thinking using words — not memorized knowledge.
Focus areas: word analogies (A:B::C:?), odd-one-out, word sequences, logical deduction, and classification.`,
  nonverbal_reasoning: `You are generating a Non-Verbal Reasoning question for a standardized academic assessment.
These test pattern recognition using descriptions of shapes/diagrams (since we can't show images).
Focus areas: completing sequences described in words, identifying the odd shape out, matrix reasoning described textually, and spatial relationships.`,
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

  const prompt = `${SUBJECT_PROMPTS[subject]}

Student age: ${age} years old (${getAgeDescriptor(age)})
Difficulty: ${difficulty}/10 — ${getDifficultyDescriptor(difficulty)}
Topic: ${topic.replace(/_/g, ' ')}
${avoidSection}
Generate ONE multiple-choice question with exactly 4 options. The question must be:
- Age-appropriate for a ${age}-year-old
- At difficulty level ${difficulty}/10
- Clearly worded with one unambiguously correct answer
- 4 options with distinct, non-overlapping answer texts (no duplicates)
- Plausible distractors (wrong answers that test understanding)

For Non-Verbal Reasoning: describe shapes/patterns using clear text (e.g., "circle, square, triangle, circle, square, ___")

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
  "explanation": "Brief explanation of why this is correct",
  "topic": "${topic}"
}`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 600,
    messages: [{ role: 'user', content: prompt }],
  })

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
  const parsed = JSON.parse(match[0])

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

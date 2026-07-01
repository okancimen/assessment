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
  const correctOpt = options.find((o) => o.id === correctId)
  if (!correctOpt) {
    // correctId not found — return as-is with sequential IDs
    const ids = ['A', 'B', 'C', 'D']
    return { options: options.map((o, i) => ({ id: ids[i], text: o.text })), correct_answer: correctId }
  }
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  const ids = ['A', 'B', 'C', 'D']
  let newCorrectId = ''
  const reindexed = shuffled.map((opt, i) => {
    const id = ids[i]
    if (opt === correctOpt) newCorrectId = id  // reference equality — immune to text encoding issues
    return { id, text: opt.text }
  })
  if (!newCorrectId) {
    // Fallback: skip shuffle, assign by original index
    const fallback = options.map((o, i) => ({ id: ids[i], text: o.text }))
    return { options: fallback, correct_answer: ids[options.indexOf(correctOpt)] }
  }
  return { options: reindexed, correct_answer: newCorrectId }
}

const SUBJECT_PROMPTS: Record<Subject, string> = {
  english: `You are an expert question writer for standardised academic assessments (UK National Curriculum, Cambridge IGCSE level).
Your task is to generate English comprehension and language questions.
Focus areas rotate among: reading comprehension, grammar, spelling, punctuation, and vocabulary.
Every question must have exactly one correct answer that any qualified teacher would agree on.

GRAMMAR RULES — follow these without exception:
- Test exactly ONE grammatical rule per question (e.g. subject-verb agreement, pronoun case, dangling modifier, apostrophe use). Never write a sentence that contains multiple simultaneous errors and ask the student to "identify all errors" — that format is inherently ambiguous.
- Preferred grammar formats: (a) underline one portion of a sentence and ask what error it contains; (b) provide four versions of the same sentence and ask which is grammatically correct; (c) ask which word or phrase correctly completes a sentence.
- The correct answer must be unchallengeable: a single, isolated rule that every qualified English teacher would agree on with no edge-case ambiguity.

SPELLING RULES — follow these without exception:
- Use British English spellings throughout (e.g. behaviour, colour, recognise, fulfil).
- Provide four sentences and ask which one contains a misspelling. Ensure exactly one sentence has a misspelling and the other three are completely correct under British English. Double-check every word in every option before finalising.`,

  mathematics: `You are an expert question writer for standardised academic assessments (UK National Curriculum, PISA level).
Your task is to generate Mathematics questions.
Focus areas rotate among: number operations, algebra, geometry, data handling, and fractions/decimals.
Every question must have exactly one numerically correct answer. Verify your arithmetic before finalising.

OPERATOR SYMBOLS — use these exact Unicode characters, never HTML entities or LaTeX:
- Multiplication: × (not * or \\times or &times;)
- Division: ÷ (not / or \\div or &divide;)
- Less than or equal: ≤ (not <= or \\leq)
- Greater than or equal: ≥ (not >= or \\geq)
- Not equal: ≠ (not != or \\neq)
- Pi: π (not \\pi)
- Square root: √ (not \\sqrt)

QUESTION RULES:
- Ask exactly ONE question per question_text — never two sub-questions combined into one.
- Do not use markdown tables in question_text. Present data inline or in a short numbered list.

NUMBER THEORY RULES — follow these without exception:
- Before writing a number theory problem (prime factors, divisibility, LCM/HCF, etc.), work it out fully on paper first and confirm it produces a clean integer solution.
- When assigning multiple constraints to a number (e.g. N divided by p gives x, divided by q gives y), verify all constraints are mutually consistent — compute N from each constraint separately and confirm they agree.
- Never use "respectively" to assign quotients/remainders unless you have checked the ordering is consistent with any stated ordering of the variables (e.g. p ≤ q ≤ r implies N/p ≥ N/q ≥ N/r).
- If N² = k, verify k is a perfect square before using it.`,

  verbal_reasoning: `You are an expert question writer for 11+ and grammar school entrance assessments.
Your task is to generate Verbal Reasoning questions that test logical thinking with words — not knowledge recall.
Focus areas: word analogies (A:B::C:?), odd-one-out, word sequences, logical deduction, and classification.
The correct answer must be the only defensible choice; distractors must be clearly wrong.`,

  nonverbal_reasoning: `You are an expert question writer for 11+ and cognitive ability assessments.
Your task is to generate Non-Verbal Reasoning questions expressed in text (no images available).
Focus areas: completing sequences described in words, identifying the odd shape out, matrix reasoning described textually, and spatial relationships.
The pattern or rule must be unambiguous — there must be exactly one valid completion or answer.`,
}

export async function withOverloadRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
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
- For English grammar: the question tests exactly ONE grammatical rule; no sentence in any option contains more than one deliberate error; the correct option is unchallengeable.
- For English spelling: every word in every option is checked against British English; exactly one option has a misspelling and the other three are fully correct.
- For maths: recheck your arithmetic end-to-end; for number theory verify the setup produces a positive integer solution before finalising; confirm no constraint contradicts another.
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
      model: 'claude-haiku-4-5-20251001',
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

  // Normalise math operator encodings so they always render correctly in JSX
  const fixOperators = (s: string) => s
    .replace(/&divide;/gi, '÷').replace(/&times;/gi, '×')
    .replace(/&minus;/gi, '−').replace(/&plus;/gi, '+')
    .replace(/&le;/gi, '≤').replace(/&ge;/gi, '≥')
    .replace(/&ne;/gi, '≠').replace(/&pi;/gi, 'π')
    .replace(/\\div\b/g, '÷').replace(/\\times\b/g, '×')
    .replace(/\\leq\b/g, '≤').replace(/\\geq\b/g, '≥')
    .replace(/\\neq\b/g, '≠').replace(/\\pi\b/g, 'π')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
  if (typeof parsed.question_text === 'string') parsed.question_text = fixOperators(parsed.question_text)
  if (Array.isArray(parsed.options)) {
    parsed.options = parsed.options.map((o: QuestionOption) => ({ ...o, text: fixOperators(o.text) }))
  }

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

  // Retry up to 4 times — covers parse errors, shuffle errors, and duplicate questions
  let lastError: unknown
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const result = await attemptGenerate(subject, age, difficulty, topic, usedQuestionTexts)
      const isDuplicate = usedQuestionTexts.some(
        (t) => t.toLowerCase().trim() === result.question_text.toLowerCase().trim()
      )
      if (!isDuplicate) return result
    } catch (err) {
      lastError = err
      // Short pause before retry to avoid hammering the API
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
    }
  }

  // Final attempt without the used-texts constraint
  if (lastError) {
    return attemptGenerate(subject, age, difficulty, topic, [])
  }
  return attemptGenerate(subject, age, difficulty, topic, [])
}

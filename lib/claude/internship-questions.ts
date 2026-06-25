import Anthropic from '@anthropic-ai/sdk'
import { jsonrepair } from 'jsonrepair'
import { withOverloadRetry } from './questions'
import {
  InternshipTrack,
  InternshipSubject,
  INTERNSHIP_TRACKS,
  QuestionOption,
} from '@/types'

const client = new Anthropic()

const APTITUDE_VERBAL_PROMPT = `You are an expert question writer for standardised aptitude assessments.
Your task is to generate Verbal Reasoning questions for a 16-year-old internship applicant.
Focus areas: word analogies (A:B::C:?), odd-one-out, word sequences, logical deduction, classification.
Every question must have exactly one defensible correct answer. Distractors must be clearly wrong.`

const APTITUDE_MATH_PROMPT = `You are an expert question writer for standardised aptitude assessments.
Your task is to generate Numerical Reasoning questions for a 16-year-old internship applicant.
Focus areas: percentages, ratios, basic algebra, number sequences, data interpretation from simple tables.
Every question must have exactly one numerically correct answer. Verify your arithmetic before finalising.`

const SOFT_SKILLS_PROMPT = `You are an expert HR assessment designer writing Situational Judgement Test (SJT) questions.
Each question describes a realistic workplace scenario for a high school internship applicant.
Scenarios include: missing a deadline, a team conflict, receiving unclear instructions, handling a client complaint, taking initiative.
Exactly one option must be what a professional HR manager would unanimously select as best practice.
The other three options must be clearly suboptimal — explain in the explanation why each is wrong.`

const INTEREST_PROFILE_PROMPT = `You are an expert careers assessor writing interest-mapping questions.
Each question presents four work-related activities or preferences — one for each internship track.
The four options must map to: Technology (tech), Business (business), Data Analytics (data_analytics), Digital Marketing (digital_marketing).
Questions should be engaging preference choices a 16-year-old can relate to, with no obviously "right" answer.
The options must always appear in THIS EXACT ORDER: A=tech, B=business, C=data_analytics, D=digital_marketing.
Do NOT shuffle the options. Set correct_answer to whichever option requires the most analytical or systematic thinking.`

const DOMAIN_PROMPTS: Record<InternshipTrack, string> = {
  tech: `You are an expert question writer for technology internship aptitude tests.
Your task is to generate Domain Knowledge questions for a 16-year-old Technology internship applicant.
Focus areas rotate among: basic coding logic (reading simple pseudocode/flowcharts), algorithm thinking (sorting, searching concepts),
common software tools and concepts (version control, databases, APIs at a conceptual level), debugging reasoning, binary/data basics.
Questions should test applied thinking, not memorisation of syntax. Every question must have one unambiguous correct answer.`,

  business: `You are an expert question writer for business internship aptitude tests.
Your task is to generate Domain Knowledge questions for a 16-year-old Business internship applicant.
Focus areas rotate among: market analysis concepts (supply/demand, competition), basic financial literacy (profit, revenue, cost, margin),
business case reasoning (identifying the best strategy from a scenario), reading a simple business chart or table,
professional communication concepts. Every question must have one unambiguous correct answer.`,

  data_analytics: `You are an expert question writer for data analytics internship aptitude tests.
Your task is to generate Domain Knowledge questions for a 16-year-old Data Analytics internship applicant.
Focus areas rotate among: reading and interpreting charts/graphs (bar, line, scatter, pie),
basic statistics (mean, median, mode, range, percentages, identifying outliers),
identifying trends and anomalies in data sets, basic spreadsheet logic (SUM/AVERAGE/COUNT concepts, filtering),
choosing the right chart type for a given data set, data-driven conclusions (which statement does the data support?),
simple probability, identifying research bias or flawed methodology.
Questions should present concrete data scenarios. Every question must have one unambiguous correct answer.`,

  digital_marketing: `You are an expert question writer for digital marketing internship aptitude tests.
Your task is to generate Domain Knowledge questions for a 16-year-old Digital Marketing internship applicant.
Focus areas rotate among: SEO basics (keywords, meta descriptions, backlinks at a conceptual level),
social media metrics (reach, engagement rate, impressions, follower growth), content strategy concepts
(target audience, content calendar, brand voice), analytics KPIs (CTR, conversion rate, bounce rate, CPM),
identifying the right platform for a marketing objective. Every question must have one unambiguous correct answer.`,
}

export interface InternshipQuestion {
  question_text: string
  options: QuestionOption[]
  correct_answer: string
  explanation: string
  topic: string
  subject: InternshipSubject
  difficulty: number
  track_map?: Record<string, InternshipTrack>  // only for interest_profile
}

async function generateInterestQuestion(usedTexts: string[]): Promise<InternshipQuestion> {
  const avoidSection = usedTexts.length > 0
    ? `\nDo NOT generate any of these questions (already used):\n${usedTexts.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n`
    : ''

  const prompt = `${avoidSection}
Generate ONE interest-mapping question with exactly 4 options.
Option A must map to Technology, B to Business, C to Data Analytics, D to Digital Marketing.
Keep the options in this exact order — do not reorder them.
Set correct_answer to whichever option requires the most systematic or analytical thinking.

Before writing the JSON, verify:
- All four options are genuinely distinct work activities or preferences.
- The order is A=tech, B=business, C=data_analytics, D=digital_marketing exactly.
- No option is obviously "wrong" — these are preference questions, not knowledge questions.

Respond with ONLY valid JSON, no markdown fences:
{
  "question_text": "Which of the following tasks would you find most interesting to do during an internship?",
  "options": [
    {"id": "A", "text": "tech-oriented activity"},
    {"id": "B", "text": "business-oriented activity"},
    {"id": "C", "text": "data-analytics-oriented activity"},
    {"id": "D", "text": "digital-marketing-oriented activity"}
  ],
  "correct_answer": "A",
  "explanation": "Brief note on why each option maps to its track",
  "topic": "work_preferences"
}`

  const message = await withOverloadRetry(() =>
    client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      system: INTEREST_PROFILE_PROMPT,
      messages: [{ role: 'user', content: prompt }],
    })
  )

  const content = message.content[0]
  if (content.type !== 'text') throw new Error('Unexpected response type')

  let jsonText = content.text.trim()
  if (jsonText.startsWith('```')) jsonText = jsonText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
  const match = jsonText.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('No JSON in interest question response')

  const parsed = JSON.parse(jsonrepair(match[0]))

  // Fixed track map: A=tech, B=business, C=data_analytics, D=digital_marketing
  const track_map: Record<string, InternshipTrack> = {
    A: 'tech', B: 'business', C: 'data_analytics', D: 'digital_marketing',
  }

  return {
    question_text: parsed.question_text,
    options: parsed.options as QuestionOption[],
    correct_answer: parsed.correct_answer,
    explanation: JSON.stringify({ track_map, text: parsed.explanation }),
    topic: parsed.topic || 'work_preferences',
    subject: 'interest_profile',
    difficulty: 5,
    track_map,
  }
}

export async function generateInternshipQuestion(
  subject: InternshipSubject,
  track: InternshipTrack,
  difficulty: number,
  usedTexts: string[] = []
): Promise<InternshipQuestion> {
  if (subject === 'interest_profile') {
    return generateInterestQuestion(usedTexts)
  }

  let systemPrompt: string
  let topicHint: string

  if (subject === 'aptitude_verbal') {
    systemPrompt = APTITUDE_VERBAL_PROMPT
    topicHint = 'verbal reasoning — analogies, classification, sequences, or logic'
  } else if (subject === 'aptitude_math') {
    systemPrompt = APTITUDE_MATH_PROMPT
    topicHint = 'numerical reasoning — percentages, ratios, sequences, or data tables'
  } else if (subject === 'soft_skills') {
    systemPrompt = SOFT_SKILLS_PROMPT
    topicHint = 'workplace scenario — deadline, conflict, instructions, initiative, or client handling'
  } else {
    systemPrompt = DOMAIN_PROMPTS[track]
    topicHint = `domain knowledge for ${track.replace('_', ' ')} internship`
  }

  const avoidSection = usedTexts.length > 0
    ? `\nDo NOT generate any of these questions (already used):\n${usedTexts.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n`
    : ''

  const prompt = `Difficulty: ${difficulty}/10
Topic area: ${topicHint}
${avoidSection}
Generate ONE multiple-choice question with exactly 4 options. The question must be:
- Clear and concise, appropriate for a 16-year-old internship applicant
- At difficulty level ${difficulty}/10 (1=very easy, 10=very challenging)
- Unambiguously correct — one right answer, three clearly wrong distractors
- 4 options with distinct, non-overlapping answer texts (no duplicates)

Before writing the JSON, verify:
- Exactly one option is correct — not zero, not two.
- Each wrong option is clearly incorrect and cannot be reasonably argued as right.
- For numerical questions: recheck your arithmetic end-to-end and confirm the answer is a positive integer or clean decimal.
- For soft skills: exactly one option is what every HR professional would agree is best practice.
- For domain questions: the correct fact is verifiable and uncontroversial.

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
  "explanation": "Why this is correct and why each other option is wrong",
  "topic": "short_topic_slug"
}`

  let message
  let match: RegExpMatchArray | null = null
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      message = await withOverloadRetry(() =>
        client.messages.create({
          model: 'claude-sonnet-4-6',
          max_tokens: 1024,
          system: systemPrompt,
          messages: [{ role: 'user', content: prompt }],
        })
      )
      const content = message.content[0]
      if (content.type !== 'text') throw new Error('Unexpected response type')
      let jsonText = content.text.trim()
      if (jsonText.startsWith('```')) jsonText = jsonText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
      match = jsonText.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('No JSON in internship question response')
      break
    } catch (err) {
      if (attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
    }
  }
  if (!match) throw new Error('Failed to generate question after retries')

  const parsed = JSON.parse(jsonrepair(match[0]))

  // Validate no duplicate option texts
  const texts = (parsed.options as QuestionOption[]).map((o) => o.text.toLowerCase().trim())
  if (new Set(texts).size < parsed.options.length) throw new Error('Duplicate option texts')

  // Shuffle options using reference equality to avoid text-encoding mismatches
  const opts = parsed.options as QuestionOption[]
  const correctOpt = opts.find((o: QuestionOption) => o.id === parsed.correct_answer)
  const ids = ['A', 'B', 'C', 'D']
  let reindexed: QuestionOption[]
  let newCorrectId: string
  if (!correctOpt) {
    reindexed = opts.map((o, i) => ({ id: ids[i], text: o.text }))
    newCorrectId = parsed.correct_answer
  } else {
    const shuffled = [...opts].sort(() => Math.random() - 0.5)
    newCorrectId = ''
    reindexed = shuffled.map((opt, i) => {
      const id = ids[i]
      if (opt === correctOpt) newCorrectId = id
      return { id, text: opt.text }
    })
    if (!newCorrectId) {
      reindexed = opts.map((o, i) => ({ id: ids[i], text: o.text }))
      newCorrectId = ids[opts.indexOf(correctOpt)]
    }
  }

  return {
    question_text: parsed.question_text,
    options: reindexed,
    correct_answer: newCorrectId,
    explanation: parsed.explanation ?? '',
    topic: parsed.topic || 'general',
    subject,
    difficulty,
  }
}

export function extractTrackFromInterestAnswer(
  selectedAnswer: string,
  explanation: string
): InternshipTrack | null {
  try {
    const parsed = JSON.parse(explanation)
    const trackMap: Record<string, InternshipTrack> = parsed.track_map
    return trackMap[selectedAnswer] ?? null
  } catch {
    // Fallback: fixed order A=tech B=business C=data_analytics D=digital_marketing
    const fallback: Record<string, InternshipTrack> = {
      A: 'tech', B: 'business', C: 'data_analytics', D: 'digital_marketing',
    }
    return fallback[selectedAnswer] ?? null
  }
}

export function computeTrackFit(
  trackCounts: Record<string, number>,
  totalQuestions: number
): Record<InternshipTrack, number> {
  const fit = {} as Record<InternshipTrack, number>
  for (const track of INTERNSHIP_TRACKS) {
    fit[track] = totalQuestions > 0
      ? Math.round(((trackCounts[track] ?? 0) / totalQuestions) * 100)
      : 0
  }
  return fit
}

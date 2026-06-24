export type Subject = 'english' | 'mathematics' | 'verbal_reasoning' | 'nonverbal_reasoning'

export type AssessmentStatus = 'pending' | 'in_progress' | 'completed'

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface QuestionOption {
  id: string
  text: string
}

export interface Question {
  id: string
  subject: Subject
  topic: string
  difficulty: DifficultyLevel
  age_min: number
  age_max: number
  question_text: string
  options: QuestionOption[]
  correct_answer: string
  explanation: string | null
  created_at: string
}

export interface Child {
  id: string
  parent_id: string
  name: string
  date_of_birth: string
  created_at: string
}

export interface Assessment {
  id: string
  child_id: string
  status: AssessmentStatus
  started_at: string | null
  completed_at: string | null
  created_at: string
  children?: Child
}

export interface AssessmentSession {
  id: string
  assessment_id: string
  current_subject: Subject
  subject_index: number
  question_index: number
  difficulty_level: number
  subject_scores: Record<string, SubjectSessionScore>
  completed_subjects: Subject[]
  updated_at: string
}

export interface IRTResponse {
  difficulty: number
  correct: boolean
}

export interface SubjectSessionScore {
  correct: number
  total: number
  difficulty_sum: number
  responses: IRTResponse[]
  topics: Record<string, { correct: number; total: number }>
}

export interface AssessmentQuestion {
  id: string
  assessment_id: string
  question_id: string
  subject: Subject
  question_order: number
  answered_at: string | null
  selected_answer: string | null
  is_correct: boolean | null
  time_taken_seconds: number | null
  questions?: Question
}

export interface TopicScore {
  correct: number
  total: number
  percentage: number
}

export interface SubjectResult {
  raw_score: number
  standardized_score: number
  percentage: number
  topics: Record<string, TopicScore>
}

export interface AssessmentResult {
  id: string
  assessment_id: string
  child_id: string
  overall_score: number
  standardized_score: number
  subject_scores: Record<Subject, SubjectResult>
  created_at: string
  assessments?: Assessment & { children?: Child }
}

export const SUBJECTS: Subject[] = [
  'english',
  'mathematics',
  'verbal_reasoning',
  'nonverbal_reasoning',
]

export const SUBJECT_LABELS: Record<Subject, string> = {
  english: 'English',
  mathematics: 'Mathematics',
  verbal_reasoning: 'Verbal Reasoning',
  nonverbal_reasoning: 'Non-Verbal Reasoning',
}

export const SUBJECT_DESCRIPTIONS: Record<Subject, string> = {
  english: 'Comprehension, grammar, spelling, and punctuation',
  mathematics: 'Number operations, algebra, geometry, and data handling',
  verbal_reasoning: 'Problem-solving using words and critical thinking',
  nonverbal_reasoning: 'Pattern recognition using shapes and abstract visuals',
}

export const QUESTIONS_PER_SUBJECT = 15

export const SUBJECT_TOPICS: Record<Subject, string[]> = {
  english: ['comprehension', 'grammar', 'spelling', 'punctuation', 'vocabulary'],
  mathematics: ['number_operations', 'algebra', 'geometry', 'data_handling', 'fractions'],
  verbal_reasoning: ['analogies', 'word_relationships', 'sequencing', 'classification', 'logic'],
  nonverbal_reasoning: ['patterns', 'sequences', 'matrices', 'spatial_reasoning', 'rotation'],
}

// ── Internship assessment types ───────────────────────────────────────────────

export type InternshipTrack = 'tech' | 'business' | 'data_analytics' | 'digital_marketing'
export type InternshipPhase = 'aptitude' | 'domain' | 'soft_skills' | 'interest'

export const INTERNSHIP_TRACKS: InternshipTrack[] = ['tech', 'business', 'data_analytics', 'digital_marketing']

export const INTERNSHIP_TRACK_LABELS: Record<InternshipTrack, string> = {
  tech: 'Technology',
  business: 'Business',
  data_analytics: 'Data Analytics',
  digital_marketing: 'Digital Marketing',
}

export const INTERNSHIP_TRACK_DESCRIPTIONS: Record<InternshipTrack, string> = {
  tech: 'Coding logic, algorithms, software tools and problem-solving',
  business: 'Market analysis, financial literacy and business strategy',
  data_analytics: 'Data interpretation, statistics, spreadsheets and trends',
  digital_marketing: 'SEO, social media, content strategy and analytics',
}

export const INTERNSHIP_PHASE_LABELS: Record<InternshipPhase, string> = {
  aptitude: 'General Aptitude',
  domain: 'Domain Knowledge',
  soft_skills: 'Workplace Skills',
  interest: 'Interest Profile',
}

export const INTERNSHIP_PHASE_DESCRIPTIONS: Record<InternshipPhase, string> = {
  aptitude: 'Verbal and numerical reasoning',
  domain: 'Track-specific applied knowledge',
  soft_skills: 'Workplace scenarios and professional judgement',
  interest: 'Work style and preference mapping',
}

// Subjects as stored in questions.subject and assessment_sessions.current_subject
export type InternshipSubject =
  | 'aptitude_verbal'
  | 'aptitude_math'
  | 'domain_tech'
  | 'domain_business'
  | 'domain_data_analytics'
  | 'domain_digital_marketing'
  | 'soft_skills'
  | 'interest_profile'

export const INTERNSHIP_QUESTIONS_PER_SUBJECT: Record<InternshipSubject, number> = {
  aptitude_verbal: 5,
  aptitude_math: 5,
  domain_tech: 10,
  domain_business: 10,
  domain_data_analytics: 10,
  domain_digital_marketing: 10,
  soft_skills: 8,
  interest_profile: 6,
}

export function getInternshipSubjects(track: InternshipTrack): InternshipSubject[] {
  return ['aptitude_verbal', 'aptitude_math', `domain_${track}` as InternshipSubject, 'soft_skills', 'interest_profile']
}

export function getInternshipPhase(subject: InternshipSubject): InternshipPhase {
  if (subject === 'aptitude_verbal' || subject === 'aptitude_math') return 'aptitude'
  if (subject.startsWith('domain_')) return 'domain'
  if (subject === 'soft_skills') return 'soft_skills'
  return 'interest'
}

export const INTERNSHIP_TOTAL_QUESTIONS = 34 // 5+5+10+8+6

export type ReadinessTier = 'Internship Ready' | 'Developing' | 'Needs Support'

export function getReadinessTier(overallScore: number): ReadinessTier {
  if (overallScore >= 70) return 'Internship Ready'
  if (overallScore >= 45) return 'Developing'
  return 'Needs Support'
}

export interface InternshipScores {
  aptitude: number       // 0–100
  domain: number         // 0–100
  soft_skills: number    // 0–100
  overall: number        // 0–100 (aptitude*0.3 + domain*0.35 + soft_skills*0.35)
  tier: ReadinessTier
  track_fit: Record<InternshipTrack, number>  // 0–100 per track
}

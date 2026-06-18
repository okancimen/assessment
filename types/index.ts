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

export const QUESTIONS_PER_SUBJECT = 2

export const SUBJECT_TOPICS: Record<Subject, string[]> = {
  english: ['comprehension', 'grammar', 'spelling', 'punctuation', 'vocabulary'],
  mathematics: ['number_operations', 'algebra', 'geometry', 'data_handling', 'fractions'],
  verbal_reasoning: ['analogies', 'word_relationships', 'sequencing', 'classification', 'logic'],
  nonverbal_reasoning: ['patterns', 'sequences', 'matrices', 'spatial_reasoning', 'rotation'],
}

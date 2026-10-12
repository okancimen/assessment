// Classifies AI/question-generation failures into a user-safe message + code.
// Keeps raw provider errors (e.g. "credit balance too low") out of API
// responses while giving the client enough to decide whether to retry.

export type AiErrorKind = 'overloaded' | 'unavailable' | 'unknown'

export interface ClassifiedAiError {
  kind: AiErrorKind
  status: number
  /** Safe to show the end user. */
  message: string
}

export function classifyAiError(err: unknown): ClassifiedAiError {
  const raw = (err instanceof Error ? err.message : String(err)).toLowerCase()

  // Billing / credit / auth / quota problems — generation is down until the
  // operator fixes it. Retrying won't help, so don't signal the client to.
  if (
    raw.includes('credit balance') ||
    raw.includes('billing') ||
    raw.includes('insufficient') ||
    raw.includes('quota') ||
    raw.includes('authentication') ||
    raw.includes('invalid x-api-key') ||
    raw.includes('permission_error') ||
    raw.includes('permission denied')
  ) {
    return {
      kind: 'unavailable',
      status: 503,
      message:
        'Assessments are temporarily unavailable. Our team has been notified — please try again a little later.',
    }
  }

  // Transient load / rate limiting — a short wait and retry usually works.
  if (
    raw.includes('overloaded') ||
    raw.includes('529') ||
    raw.includes('rate limit') ||
    raw.includes('rate_limit') ||
    raw.includes('429')
  ) {
    return {
      kind: 'overloaded',
      status: 503,
      message: 'Our question generator is very busy right now. Please wait a moment and try again.',
    }
  }

  return {
    kind: 'unknown',
    status: 500,
    message: 'Something went wrong preparing your next question. Please try again.',
  }
}

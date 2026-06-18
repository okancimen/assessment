import { DifficultyLevel, SubjectSessionScore, Subject, AssessmentResult, SUBJECTS, IRTResponse } from '@/types'

// ── IRT parameters ────────────────────────────────────────────────────────────

// Map our 1–10 difficulty to the IRT b (difficulty) logit scale: −2.7 to +2.7
function irtB(difficulty: number): number {
  return (difficulty - 5.5) * 0.6
}

// Discrimination (a) parameter: harder items discriminate more sharply
function irtA(difficulty: number): number {
  if (difficulty <= 3) return 0.8
  if (difficulty <= 6) return 1.0
  return 1.2
}

// 2PL probability of a correct response
function p2PL(theta: number, a: number, b: number): number {
  return 1 / (1 + Math.exp(-a * (theta - b)))
}

// Fisher information for one item at ability theta
function fisherInfo(theta: number, a: number, b: number): number {
  const p = p2PL(theta, a, b)
  return a * a * p * (1 - p)
}

// ── Theta estimation (MLE via Newton-Raphson) ─────────────────────────────────

export function estimateTheta(responses: IRTResponse[]): number {
  if (responses.length === 0) return 0

  // MAP estimation: MLE + N(0,1) prior on theta.
  // The prior adds -θ to L' and -1 to L'', pulling extreme estimates toward 0.
  // This prevents 53%-correct patterns from scoring the same as 100%-correct.
  let theta = 0

  for (let iter = 0; iter < 100; iter++) {
    let L1 = -theta      // prior gradient: d/dθ [-θ²/2] = -θ
    let L2 = -1          // prior curvature: d²/dθ² [-θ²/2] = -1

    for (const { difficulty, correct } of responses) {
      const a = irtA(difficulty)
      const b = irtB(difficulty)
      const p = p2PL(theta, a, b)
      const u = correct ? 1 : 0

      L1 += a * (u - p)
      L2 -= a * a * p * (1 - p)
    }

    if (Math.abs(L2) < 1e-10) break

    const delta = L1 / L2
    theta -= delta
    theta = Math.max(-4, Math.min(4, theta))

    if (Math.abs(delta) < 0.001) break
  }

  return theta
}

// ── Adaptive item selection ───────────────────────────────────────────────────

// Return the difficulty level that maximises Fisher information at the current theta.
// Constrained to ±2 steps from currentDifficulty to prevent over-rapid escalation.
export function optimalDifficulty(theta: number, currentDifficulty = 5): DifficultyLevel {
  const minD = Math.max(1, currentDifficulty - 2)
  const maxD = Math.min(10, currentDifficulty + 2)

  let bestDiff = currentDifficulty as DifficultyLevel
  let bestInfo = -Infinity

  for (let d = minD; d <= maxD; d++) {
    const info = fisherInfo(theta, irtA(d), irtB(d))
    if (info > bestInfo) {
      bestInfo = info
      bestDiff = d as DifficultyLevel
    }
  }

  return bestDiff
}

// ── Starting difficulty ───────────────────────────────────────────────────────

export function getInitialDifficulty(age: number): DifficultyLevel {
  // θ₀ assumed 0 for all ages; use Fisher-optimal difficulty at θ=0 (which is 5)
  // Slight upward adjustment for older children who face a harder expected baseline
  const ageOffset = Math.round(((age - 6) / 11) * 2) // 0 for age 6, +2 for age 17
  return Math.max(1, Math.min(10, 5 + ageOffset)) as DifficultyLevel
}

// ── Scoring ───────────────────────────────────────────────────────────────────

// Convert IRT theta to the 70–130 standardized scale (mean 100, SD 15)
export function thetaToStandardized(theta: number): number {
  return Math.max(70, Math.min(130, Math.round(100 + theta * 15)))
}

export function computeResults(
  subjectScores: Record<string, SubjectSessionScore>,
): AssessmentResult['subject_scores'] {
  const results: Partial<AssessmentResult['subject_scores']> = {}

  for (const subject of SUBJECTS) {
    const score = subjectScores[subject]
    if (!score || score.total === 0) {
      results[subject] = { raw_score: 0, standardized_score: 85, percentage: 0, topics: {} }
      continue
    }

    const theta = estimateTheta(score.responses ?? [])
    const standardized = thetaToStandardized(theta)

    const topics: Record<string, { correct: number; total: number; percentage: number }> = {}
    for (const [topic, t] of Object.entries(score.topics)) {
      topics[topic] = {
        ...t,
        percentage: t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0,
      }
    }

    results[subject] = {
      raw_score: score.correct,
      standardized_score: standardized,
      percentage: Math.round((score.correct / score.total) * 100),
      topics,
    }
  }

  return results as AssessmentResult['subject_scores']
}

export function computeOverallScore(
  subjectResults: AssessmentResult['subject_scores'],
): { overall_score: number; standardized_score: number } {
  const subjects = Object.values(subjectResults)
  if (subjects.length === 0) return { overall_score: 0, standardized_score: 85 }

  const totalRaw = subjects.reduce((s, r) => s + r.raw_score, 0)
  const avgStandardized = Math.round(
    subjects.reduce((s, r) => s + r.standardized_score, 0) / subjects.length
  )

  return { overall_score: totalRaw, standardized_score: avgStandardized }
}

// ── Score labels ──────────────────────────────────────────────────────────────

export function getScoreLabel(standardizedScore: number): string {
  if (standardizedScore >= 120) return 'Exceptional'
  if (standardizedScore >= 110) return 'Above Average'
  if (standardizedScore >= 95) return 'Average'
  if (standardizedScore >= 85) return 'Below Average'
  return 'Needs Support'
}

export function getScoreColor(standardizedScore: number): string {
  if (standardizedScore >= 120) return 'text-blue-500'
  if (standardizedScore >= 110) return 'text-green-500'
  if (standardizedScore >= 95)  return 'text-yellow-500'
  if (standardizedScore >= 85)  return 'text-orange-500'
  return 'text-red-500'
}

export function getScoreBgColor(standardizedScore: number): string {
  if (standardizedScore >= 120) return 'bg-blue-50 border-blue-200'
  if (standardizedScore >= 110) return 'bg-green-50 border-green-200'
  if (standardizedScore >= 95)  return 'bg-yellow-50 border-yellow-200'
  if (standardizedScore >= 85)  return 'bg-orange-50 border-orange-200'
  return 'bg-red-50 border-red-200'
}

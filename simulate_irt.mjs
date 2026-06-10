function irtB(d) { return (d - 5.5) * 0.6 }
function irtA(d) { return d <= 3 ? 0.8 : d <= 6 ? 1.0 : 1.2 }
function p2PL(theta, a, b) { return 1 / (1 + Math.exp(-a * (theta - b))) }
function fisherInfo(theta, a, b) { const p = p2PL(theta, a, b); return a * a * p * (1 - p) }

function estimateTheta(responses) {
  if (!responses.length) return 0
  let theta = 0
  for (let i = 0; i < 100; i++) {
    let L1 = -theta, L2 = -1
    for (const { difficulty, correct } of responses) {
      const a = irtA(difficulty), b = irtB(difficulty), p = p2PL(theta, a, b)
      L1 += a * ((correct ? 1 : 0) - p)
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

function optimalDifficulty(theta, current = 5) {
  const minD = Math.max(1, current - 2), maxD = Math.min(10, current + 2)
  let best = current, bestInfo = -Infinity
  for (let d = minD; d <= maxD; d++) {
    const info = fisherInfo(theta, irtA(d), irtB(d))
    if (info > bestInfo) { bestInfo = info; best = d }
  }
  return best
}

function thetaToScore(theta) { return Math.max(70, Math.min(130, Math.round(100 + theta * 15))) }
function label(s) {
  if (s >= 120) return 'Exceptional'
  if (s >= 110) return 'Above Average'
  if (s >= 95) return 'Average'
  if (s >= 85) return 'Below Average'
  return 'Needs Support'
}

const QUESTIONS = 15

const SCENARIOS = [
  { name: 'All correct (15/15)',  pattern: _ => true },
  { name: '13/15 correct (87%)', pattern: i => i < 13 },
  { name: '10/15 correct (67%)', pattern: i => i < 10 },
  { name: '8/15 correct  (53%)', pattern: i => i < 8 },
  { name: '5/15 correct  (33%)', pattern: i => i < 5 },
  { name: 'All wrong    (0/15)', pattern: _ => false },
]

for (const { name, pattern } of SCENARIOS) {
  const responses = []
  let theta = 0, diff = 5
  for (let q = 0; q < QUESTIONS; q++) {
    const correct = pattern(q)
    responses.push({ difficulty: diff, correct })
    theta = estimateTheta(responses)
    diff = optimalDifficulty(theta, diff)
  }
  const score = thetaToScore(theta)
  const diffs = responses.map(r => r.difficulty)
  const avgDiff = (diffs.reduce((a,b)=>a+b,0)/diffs.length).toFixed(1)
  console.log(`${name}  →  θ=${theta.toFixed(2).padStart(5)}  score=${score}  (${label(score)})  avg_diff=${avgDiff}`)
}

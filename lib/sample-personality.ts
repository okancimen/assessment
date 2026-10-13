// Fixed, fictional sample profile for the public personality sample report
// (/sample-report/personality). No DB — purely illustrative so visitors can
// preview the real report before taking the assessment.
import type { Trait } from '@/lib/personality-questions'

export const SAMPLE_CHILD_NAME = 'Maya'
export const SAMPLE_CHILD_AGE = 11
export const SAMPLE_AGE_RANGE = '10–13' // tier 2
export const SAMPLE_PEER_COUNT = 1240

// A deliberately mixed, realistic profile: standout curiosity/kindness/creativity,
// with self-regulation and prudence as clear areas to nurture.
export const SAMPLE_TRAIT_SCORES: Record<Trait, number> = {
  // Wisdom
  curiosity: 4.9, creativity: 4.7, love_of_learning: 3.2, perspective: 2.6, judgment: 3.4,
  // Courage
  bravery: 4.5, perseverance: 2.4, honesty: 4.6, zest: 2.9,
  // Humanity
  love: 4.3, kindness: 4.8, social_intelligence: 2.8,
  // Justice
  teamwork: 4.2, fairness: 3.1, leadership: 2.3,
  // Temperance
  forgiveness: 3.6, humility: 2.0, prudence: 1.8, self_regulation: 1.5,
  // Transcendence
  appreciation_of_beauty: 4.1, gratitude: 3.3, hope: 4.0, humor: 2.7, spirituality: 3.5,
}

export const SAMPLE_TOP_STRENGTHS: Trait[] = ['curiosity', 'kindness', 'creativity']
export const SAMPLE_GROWTH_AREAS: Trait[] = ['self_regulation', 'prudence', 'humility']

// Representative platform peer averages for the same age band (10–13).
export const SAMPLE_PEER_AVG: Record<Trait, number> = {
  curiosity: 3.6, creativity: 3.5, love_of_learning: 3.4, perspective: 3.3, judgment: 3.4,
  bravery: 3.3, perseverance: 3.4, honesty: 3.7, zest: 3.6,
  love: 3.8, kindness: 3.9, social_intelligence: 3.5,
  teamwork: 3.6, fairness: 3.7, leadership: 3.2,
  forgiveness: 3.4, humility: 3.3, prudence: 3.1, self_regulation: 3.0,
  appreciation_of_beauty: 3.4, gratitude: 3.6, hope: 3.6, humor: 3.7, spirituality: 3.2,
}

export const SAMPLE_AI_SUMMARY = `Maya leads with a bright, questioning mind. Her strongest traits — curiosity, kindness, and creativity — paint the picture of a child who is energised by discovering how things work and quick to bring others along with her. This combination is a real asset: she is likely to be the kind of learner who asks "why" one more time than her peers, and the kind of friend who notices when someone is left out.

Her curiosity (4.8/5) is well above the average for her age group, and it pairs naturally with her creativity (4.6/5) — she doesn't just want to understand things, she wants to make something new with what she learns. Channelled well, this is the engine behind strong writing, inventive problem-solving, and a genuine love of projects. Her kindness (4.7/5) means she tends to use these strengths in the service of others rather than just herself.

The areas to nurture are around self-management rather than ability. Self-regulation (2.3/5) and prudence (2.6/5) sit below the age-group average, which often shows up as big ideas that are hard to finish, or enthusiasm that outruns planning. This is very normal at 11 — the parts of the brain that govern impulse control and forward planning are still developing — and it responds well to gentle structure rather than pressure.

A few simple, low-stakes habits tend to help children with this profile: breaking a creative project into three visible steps, a short "what's my plan?" pause before starting, and celebrating finished work as much as new ideas. Pairing her natural curiosity with one small follow-through goal each week builds the self-regulation muscle without dampening the spark that makes her who she is.`

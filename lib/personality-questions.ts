import { getAge } from './utils'

export type Trait =
  | 'curiosity' | 'creativity' | 'love_of_learning' | 'perspective' | 'judgment'
  | 'bravery' | 'perseverance' | 'honesty' | 'zest'
  | 'love' | 'kindness' | 'social_intelligence'
  | 'teamwork' | 'fairness' | 'leadership'
  | 'forgiveness' | 'humility' | 'prudence' | 'self_regulation'
  | 'appreciation_of_beauty' | 'gratitude' | 'hope' | 'humor' | 'spirituality'

export type Tier = 1 | 2 | 3 | 4

export interface PQuestion {
  key: string
  trait: Trait
  text: string
}

export const TRAIT_LABELS: Record<Trait, string> = {
  curiosity:              'Curiosity',
  creativity:             'Creativity',
  love_of_learning:       'Love of Learning',
  perspective:            'Perspective',
  judgment:               'Judgment',
  bravery:                'Bravery',
  perseverance:           'Perseverance',
  honesty:                'Honesty',
  zest:                   'Zest',
  love:                   'Love',
  kindness:               'Kindness',
  social_intelligence:    'Social Intelligence',
  teamwork:               'Teamwork',
  fairness:               'Fairness',
  leadership:             'Leadership',
  forgiveness:            'Forgiveness',
  humility:               'Humility',
  prudence:               'Prudence',
  self_regulation:        'Self-Regulation',
  appreciation_of_beauty: 'Appreciation of Beauty',
  gratitude:              'Gratitude',
  hope:                   'Hope',
  humor:                  'Humor',
  spirituality:           'Spirituality',
}

export const TRAIT_DESCRIPTIONS: Record<Trait, string> = {
  curiosity:              'A deep desire to explore and understand the world.',
  creativity:             'Finding new and original ways to think and make things.',
  love_of_learning:       'A passion for mastering new skills and knowledge.',
  perspective:            'Offering wise counsel and seeing the bigger picture.',
  judgment:               'Thinking things through and examining ideas from all angles.',
  bravery:                'Acting despite fear, doubt, or difficulty.',
  perseverance:           'Finishing what you start, even when it is hard.',
  honesty:                'Speaking the truth and living with integrity.',
  zest:                   'Approaching life with energy and enthusiasm.',
  love:                   'Valuing deep, caring relationships with others.',
  kindness:               'Doing good for others — being generous and caring.',
  social_intelligence:    'Understanding feelings and knowing how to fit in socially.',
  teamwork:               'Working well as part of a group toward shared goals.',
  fairness:               'Treating everyone equally and justly.',
  leadership:             'Organising groups and encouraging them to get things done.',
  forgiveness:            'Letting go of hurt and giving people second chances.',
  humility:               'Not seeking the spotlight and acknowledging your own limits.',
  prudence:               'Being careful about choices and avoiding undue risks.',
  self_regulation:        'Managing your emotions, impulses, and habits.',
  appreciation_of_beauty: 'Noticing and being moved by beauty all around you.',
  gratitude:              'Being aware of and thankful for the good in life.',
  hope:                   'Believing in and working toward a bright future.',
  humor:                  'Bringing lightness and laughter to yourself and others.',
  spirituality:           'Having beliefs about a higher purpose and meaning in life.',
}

export const TRAIT_VIRTUE: Record<Trait, string> = {
  curiosity: 'Wisdom', creativity: 'Wisdom', love_of_learning: 'Wisdom',
  perspective: 'Wisdom', judgment: 'Wisdom',
  bravery: 'Courage', perseverance: 'Courage', honesty: 'Courage', zest: 'Courage',
  love: 'Humanity', kindness: 'Humanity', social_intelligence: 'Humanity',
  teamwork: 'Justice', fairness: 'Justice', leadership: 'Justice',
  forgiveness: 'Temperance', humility: 'Temperance', prudence: 'Temperance', self_regulation: 'Temperance',
  appreciation_of_beauty: 'Transcendence', gratitude: 'Transcendence',
  hope: 'Transcendence', humor: 'Transcendence', spirituality: 'Transcendence',
}

// Traits per tier (cumulative)
const TIER1_TRAITS: Trait[] = [
  'curiosity', 'creativity', 'kindness', 'bravery', 'fairness',
  'gratitude', 'zest', 'love', 'teamwork', 'perseverance', 'humor', 'honesty',
]
const TIER2_TRAITS: Trait[] = [...TIER1_TRAITS, 'love_of_learning', 'leadership', 'self_regulation']
const TIER3_TRAITS: Trait[] = [...TIER2_TRAITS, 'judgment', 'social_intelligence', 'forgiveness', 'hope', 'perspective']
const TIER4_TRAITS: Trait[] = [...TIER3_TRAITS, 'appreciation_of_beauty', 'humility', 'prudence', 'spirituality']

export const TRAITS_BY_TIER: Record<Tier, Trait[]> = {
  1: TIER1_TRAITS,
  2: TIER2_TRAITS,
  3: TIER3_TRAITS,
  4: TIER4_TRAITS,
}

// Question texts per trait — 2 questions each
// Written from a parent's perspective: "My child..."
const QUESTION_TEXT: Record<Trait, [string, string]> = {
  curiosity: [
    'My child asks lots of questions about how things work.',
    'My child gets excited when they discover something new.',
  ],
  creativity: [
    'My child loves making up stories, drawings, or new games.',
    'My child finds different or surprising ways to solve problems.',
  ],
  kindness: [
    'My child tries to help others when they are sad or hurt.',
    'My child shares willingly with friends or siblings.',
  ],
  bravery: [
    'My child tries things even when they feel nervous.',
    'My child stands up for what they think is right.',
  ],
  fairness: [
    'My child gets upset when rules are not fair.',
    'My child treats everyone the same, no matter who they are.',
  ],
  gratitude: [
    'My child says thank you and appreciates what others do for them.',
    'My child often notices the good things in their life.',
  ],
  zest: [
    'My child throws themselves into activities with lots of energy.',
    'My child seems excited and lively in most things they do.',
  ],
  love: [
    'My child shows a lot of warmth and affection to those close to them.',
    'My child feels happy when people they care about are doing well.',
  ],
  teamwork: [
    'My child enjoys working together with others.',
    'My child does their fair share when working in a group.',
  ],
  perseverance: [
    'My child keeps trying even when something is difficult.',
    'My child finishes tasks they start, even when they get bored.',
  ],
  humor: [
    'My child loves to laugh and make others laugh.',
    'My child uses funny observations to lighten the mood.',
  ],
  honesty: [
    'My child tells the truth even when it is difficult.',
    'My child does what they say they will do.',
  ],
  love_of_learning: [
    'My child loves mastering new skills and topics beyond what school requires.',
    'My child seeks out interesting information just because they are curious.',
  ],
  leadership: [
    'My child naturally takes charge in group situations.',
    'My child encourages others and helps the group stay focused.',
  ],
  self_regulation: [
    'My child can manage their emotions in difficult situations.',
    'My child thinks before reacting rather than acting on impulse.',
  ],
  judgment: [
    'My child looks at all sides of an issue before making a decision.',
    'My child is willing to change their mind when they get new information.',
  ],
  social_intelligence: [
    'My child understands how people are feeling and adjusts their approach accordingly.',
    'My child knows the right thing to say or do in most social situations.',
  ],
  forgiveness: [
    'My child lets go of grudges and moves on after conflicts.',
    'My child gives people a second chance when they make mistakes.',
  ],
  hope: [
    'My child believes that good things will happen in their future.',
    'My child stays positive even when things go wrong.',
  ],
  perspective: [
    'My child thinks about the bigger picture when dealing with problems.',
    'Others come to my child for advice because they offer a thoughtful view.',
  ],
  appreciation_of_beauty: [
    'My child notices and appreciates beauty in art, music, nature, or everyday life.',
    'My child is moved by excellence in creative works or the natural world.',
  ],
  humility: [
    'My child does not seek to be the centre of attention.',
    'My child acknowledges their mistakes and limitations honestly.',
  ],
  prudence: [
    'My child thinks carefully about long-term consequences before making decisions.',
    'My child avoids choices they might later regret.',
  ],
  spirituality: [
    'My child has a clear sense of meaning and purpose in life.',
    'My child finds comfort and strength in their beliefs or values.',
  ],
}

export function getTier(dateOfBirth: string): Tier {
  const age = getAge(dateOfBirth)
  if (age <= 9)  return 1
  if (age <= 13) return 2
  if (age <= 17) return 3
  return 4
}

const TEST_MODE_LIMIT = 10 // remove when testing is done

export function getQuestions(tier: Tier): PQuestion[] {
  return TRAITS_BY_TIER[tier].flatMap((trait) =>
    QUESTION_TEXT[trait].map((text, i) => ({
      key: `${trait}_${i + 1}`,
      trait,
      text,
    }))
  ).slice(0, TEST_MODE_LIMIT)
}

export function computeTraitScores(answers: { question_key: string; score: number }[]): Record<Trait, number> {
  const sums: Record<string, number> = {}
  const counts: Record<string, number> = {}
  for (const { question_key, score } of answers) {
    const trait = question_key.replace(/_\d+$/, '')
    sums[trait] = (sums[trait] ?? 0) + score
    counts[trait] = (counts[trait] ?? 0) + 1
  }
  const result: Record<string, number> = {}
  for (const trait of Object.keys(sums)) {
    result[trait] = Math.round((sums[trait] / counts[trait]) * 10) / 10
  }
  return result as Record<Trait, number>
}

export function getTopStrengths(scores: Record<Trait, number>, n = 3): Trait[] {
  return (Object.entries(scores) as [Trait, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([t]) => t)
}

export function getGrowthAreas(scores: Record<Trait, number>, n = 2): Trait[] {
  return (Object.entries(scores) as [Trait, number][])
    .sort((a, b) => a[1] - b[1])
    .slice(0, n)
    .map(([t]) => t)
}

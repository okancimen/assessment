import type { BlogPostMeta } from './posts'

export const TAG_META: Record<string, { title: string; description: string }> = {
  '11+': {
    title: '11+ Exam Guides',
    description: 'Complete guides on 11+ exam preparation, verbal reasoning, non-verbal reasoning, and grammar school entrance requirements for UK parents and students.',
  },
  'Grammar Schools': {
    title: 'Grammar School Admissions Guides',
    description: 'Everything parents need to know about grammar school entry requirements, admissions processes, and selective school preparation in England.',
  },
  'Gifted Education': {
    title: 'Gifted Education & Testing Guides',
    description: 'Guides to gifted identification, CAT4 and CogAT testing, and gifted programmes in the UK, US, Canada, Australia, the Netherlands and the UAE.',
  },
  'Career Development': {
    title: 'Career Development Guides for Students',
    description: 'Research-backed guides on student career development, internship benefits, work experience, and building a professional profile before university.',
  },
  'Work Experience': {
    title: 'Work Experience Guides for Students',
    description: 'How to find, apply for, and make the most of work experience placements in the UK — covering business, technology, digital marketing, and more.',
  },
  'Internship': {
    title: 'Internship Guides for Students',
    description: 'Guides on finding internships as a student with no experience, internship readiness assessments, and making the most of professional placements.',
  },
  'CAT4': {
    title: 'CAT4 Test Guides',
    description: 'What is the CAT4 test, how it is scored, and how to prepare. Covers CAT4 results interpretation, stanines, and how scores are used for school setting.',
  },
  'Parent Guide': {
    title: 'Parent Guides to Academic Assessment',
    description: 'Clear guides for parents on standardised scores, percentile rankings, grammar school admissions, gifted identification, and academic benchmarking.',
  },
  'Australia': {
    title: 'Australian Education & Testing Guides',
    description: 'Guides on ACER scholarship exams, OC tests, GATE gifted programs, NAPLAN, and selective school preparation in Australia.',
  },
  'UAE': {
    title: 'UAE Education & Testing Guides',
    description: 'Guides on CAT4 testing in UAE schools, British curriculum school admissions, gifted programmes, and international school entrance exams in Dubai and the UAE.',
  },
  'Canada': {
    title: 'Canadian Gifted Education & Testing Guides',
    description: 'Guides on gifted programme identification in Canada, Ontario gifted testing, WISC-V, private school entrance exams, and French immersion programmes.',
  },
  'Netherlands': {
    title: 'Netherlands Education Guides',
    description: 'Guides on the Cito Toets, VWO and gymnasium selection, hoogbegaafd identification, and international school admissions in the Netherlands.',
  },
  'UK Education': {
    title: 'UK Education System Guides',
    description: 'Guides on GCSE preparation, 11+ exams, grammar school admissions, standardised scores, and the UK selective education system.',
  },
  'US Education': {
    title: 'US Education & Gifted Testing Guides',
    description: 'Guides on gifted program testing in the US, CogAT, ISEE, SSAT, private school admissions, and gifted identification for American students.',
  },
  'Academic Assessment': {
    title: 'Academic Assessment Guides',
    description: 'Guides on standardised testing, adaptive assessments, CAT4, NWEA MAP, PISA, and international academic benchmarks for parents and students.',
  },
  'University Admissions': {
    title: 'University Admissions & UCAS Guides',
    description: 'How work experience, internships, and academic performance affect university applications and UCAS personal statements.',
  },
  'Child Development': {
    title: 'Child Development & Academic Potential Guides',
    description: 'Research on child development, cognitive testing, learning strengths and weaknesses, and how early benchmarking helps children reach their potential.',
  },
  'Character Strengths': {
    title: 'Child Character Strengths Guides',
    description: "Guides on VIA character strengths for children — how to identify your child's Signature Strengths and Growth Areas, and use them to boost confidence, wellbeing, and academic success.",
  },
  'Personality Assessment': {
    title: 'Child Personality Assessment Guides',
    description: "Complete guides on child personality assessment — what VIA character strengths tests measure, how to interpret results, and how a free personality assessment can support your child's development.",
  },
  'VIA Strengths': {
    title: 'VIA Character Strengths Guides',
    description: "In-depth guides on the VIA Character Strengths framework — the 24 strengths across 6 virtues, how they're measured, and how parents can use VIA results to support children aged 6–20.",
  },
  'Gifted Testing': {
    title: 'Gifted Testing Guides for Parents',
    description: 'How gifted testing works — CogAT, WISC-V, CAT4, and ACER explained. Score interpretation, percentile thresholds, and what gifted test results mean for your child\'s education.',
  },
  'Gifted Programs': {
    title: 'Gifted Programs Guides',
    description: 'Guides to gifted programmes worldwide — UK, US, Canada, Australia, Netherlands and UAE. Eligibility criteria, application processes, and how to prepare your child for gifted identification.',
  },
  'NWEA MAP': {
    title: 'NWEA MAP Test Guides',
    description: 'Complete guides to NWEA MAP Growth testing — how RIT scores work, percentile rankings by grade, score interpretation, and how MAP results affect gifted programme eligibility.',
  },
  'CogAT': {
    title: 'CogAT Test Guides',
    description: "What is the CogAT, how is it scored, and how to prepare. Covers CogAT score interpretation, percentile bands, battery profiles, and how it's used for gifted identification in the US and Canada.",
  },
  'WISC-V': {
    title: 'WISC-V IQ Test Guides',
    description: 'Guides on the WISC-V IQ test — what the five index scores measure, gifted eligibility thresholds (130+ for most programmes), score interpretation, and what to do with WISC-V results.',
  },
  'Wellbeing': {
    title: 'Child Wellbeing Guides',
    description: 'Guides on child wellbeing, positive psychology, and character strengths — how VIA strengths research links to academic resilience, emotional health, and long-term life satisfaction.',
  },
}

export const TAG_SLUGS: [string, string][] = [
  ['11-plus', '11+'],
  ['academic-assessment', 'Academic Assessment'],
  ['australia', 'Australia'],
  ['canada', 'Canada'],
  ['career-development', 'Career Development'],
  ['cat4', 'CAT4'],
  ['character-strengths', 'Character Strengths'],
  ['child-development', 'Child Development'],
  ['cogat', 'CogAT'],
  ['gifted-education', 'Gifted Education'],
  ['gifted-programs', 'Gifted Programs'],
  ['gifted-testing', 'Gifted Testing'],
  ['grammar-schools', 'Grammar Schools'],
  ['internship', 'Internship'],
  ['netherlands', 'Netherlands'],
  ['nwea-map', 'NWEA MAP'],
  ['parent-guide', 'Parent Guide'],
  ['personality-assessment', 'Personality Assessment'],
  ['uae', 'UAE'],
  ['uk-education', 'UK Education'],
  ['university-admissions', 'University Admissions'],
  ['us-education', 'US Education'],
  ['via-strengths', 'VIA Strengths'],
  ['wellbeing', 'Wellbeing'],
  ['wisc-v', 'WISC-V'],
  ['work-experience', 'Work Experience'],
]

const slugToTagMap = new Map(TAG_SLUGS.map(([slug, tag]) => [slug, tag]))
const tagToSlugMap = new Map(TAG_SLUGS.map(([slug, tag]) => [tag, slug]))

export function tagToSlug(tag: string): string | null {
  return tagToSlugMap.get(tag) ?? null
}

export function slugToTag(slug: string): string | null {
  return slugToTagMap.get(slug) ?? null
}

export function getPostsByTag(tag: string, posts: BlogPostMeta[]): BlogPostMeta[] {
  return posts.filter((p) => p.tags.includes(tag))
}

export function getAllTagSlugs(): string[] {
  return TAG_SLUGS.map(([slug]) => slug)
}

export function getLocalePostsByTag<T extends { contentSlug?: string | null }>(
  tagName: string,
  localePosts: T[],
  enPosts: BlogPostMeta[],
): T[] {
  const enSlugsWithTag = new Set(enPosts.filter(p => p.tags.includes(tagName)).map(p => p.slug))
  return localePosts.filter(p => p.contentSlug && enSlugsWithTag.has(p.contentSlug))
}

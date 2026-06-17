export interface BlogPostMeta {
  slug: string
  title: string
  shortTitle: string
  description: string
  date: string
  readTime: string
  tags: string[]
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'global-academic-benchmarks-report-2026',
    title: 'Global Academic Benchmarks Report: 2026 International Scoring and Assessment Trends',
    shortTitle: 'Global Academic Benchmarks Report 2026',
    description:
      'A 2026 breakdown of international standardised testing trends — SAS scores, PISA/TIMSS benchmarks, Digital SAT adaptive testing, and the percentile thresholds families need to track for selective admissions.',
    date: '2026-06-16',
    readTime: '9 min read',
    tags: ['Standardised Testing', 'International Benchmarks', '11+', 'Digital SAT', 'PISA'],
  },
  {
    slug: 'how-to-prepare-for-11-plus',
    title: 'How to Prepare for the 11+ at Home: A Complete Parent\'s Guide',
    shortTitle: 'How to Prepare for the 11+ at Home',
    description:
      'A practical guide for parents on preparing children for the 11+ exam at home — covering verbal reasoning, non-verbal reasoning, maths and English, with a recommended 18-month practice timeline.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['11+', 'Grammar Schools', 'Preparation', 'Parent Guide'],
  },
  {
    slug: 'what-is-a-standardised-score',
    title: 'What Is a Standardised Score? A Clear Guide for Parents',
    shortTitle: 'What Is a Standardised Score?',
    description:
      'Standardised scores, percentile rankings and Standardised Age Scores (SAS) explained in plain language — what the numbers mean, what counts as a good score, and how Eduentry uses the same scale as professional assessments.',
    date: '2026-06-17',
    readTime: '6 min read',
    tags: ['Standardised Testing', 'Scores', 'Percentile', 'Parent Guide'],
  },
  {
    slug: 'verbal-reasoning-11-plus-guide',
    title: 'Verbal Reasoning for the 11+: Question Types, Examples and Practice Tips',
    shortTitle: 'Verbal Reasoning for the 11+',
    description:
      'A complete guide to the verbal reasoning questions your child will face in the 11+ — covering all major question types with worked examples, common mistakes to avoid, and tips for effective home practice.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Verbal Reasoning', '11+', 'Practice', 'Question Types'],
  },
  {
    slug: 'grammar-school-entry-requirements-2026',
    title: 'Grammar School Entry Requirements 2026: Scores, Percentiles and How to Qualify',
    shortTitle: 'Grammar School Entry Requirements 2026',
    description:
      'What score does your child need for a grammar school place in 2026? This guide covers the SAS thresholds, percentile benchmarks and entry requirements across England\'s key grammar school areas.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Grammar Schools', '11+', 'Entry Requirements', '2026'],
  },
  {
    slug: 'gifted-program-testing-guide',
    title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare',
    shortTitle: 'US Gifted Program Testing Guide',
    description:
      'How US gifted and talented programs identify students — CogAT, WISC-V, NWEA MAP, and OLSAT explained, with score thresholds by program type and a practical preparation guide for families.',
    date: '2026-06-17',
    readTime: '9 min read',
    tags: ['Gifted Testing', 'CogAT', 'WISC', 'US Education', 'Gifted Programs'],
  },
  {
    slug: 'nwea-map-scores-explained',
    title: 'NWEA MAP Scores Explained: What RIT Scores Mean and How to Interpret Your Child\'s Results',
    shortTitle: 'NWEA MAP Scores Explained',
    description:
      'A complete parent\'s guide to NWEA MAP Growth scores — what RIT scores mean, grade-level benchmarks, percentile comparison, growth norms, and how high MAP scores relate to gifted identification.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['NWEA MAP', 'RIT Scores', 'US Education', 'Gifted Programs', 'Assessment'],
  },
  {
    slug: 'isee-ssat-private-school-guide',
    title: 'ISEE vs SSAT: The Complete Guide to Private School Entrance Exams in the US',
    shortTitle: 'ISEE vs SSAT Private School Guide',
    description:
      'Everything you need to know about the ISEE and SSAT — how each test works, score reporting, key differences, which to choose for your target schools, and how to prepare effectively.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['ISEE', 'SSAT', 'Private School', 'US Education', 'Entrance Exam'],
  },
  {
    slug: 'how-to-prepare-gifted-test',
    title: 'How to Prepare Your Child for a Gifted Test: A Practical Guide for US Families',
    shortTitle: 'How to Prepare for a Gifted Test',
    description:
      'A practical, evidence-based guide for US families preparing for gifted identification testing — what each test measures, what is and isn\'t preparation-responsive, and how to build the right skills over time.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Gifted Testing', 'CogAT', 'NNAT', 'US Education', 'Preparation'],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

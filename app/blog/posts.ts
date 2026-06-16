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
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

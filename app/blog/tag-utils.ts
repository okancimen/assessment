import type { BlogPostMeta } from './posts'

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

import type { BlogPostMeta } from './posts'

export const TAG_SLUGS: [string, string][] = [
  ['11-plus', '11+'],
  ['academic-assessment', 'Academic Assessment'],
  ['australia', 'Australia'],
  ['canada', 'Canada'],
  ['career-development', 'Career Development'],
  ['cat4', 'CAT4'],
  ['child-development', 'Child Development'],
  ['gifted-education', 'Gifted Education'],
  ['grammar-schools', 'Grammar Schools'],
  ['internship', 'Internship'],
  ['netherlands', 'Netherlands'],
  ['parent-guide', 'Parent Guide'],
  ['uae', 'UAE'],
  ['uk-education', 'UK Education'],
  ['university-admissions', 'University Admissions'],
  ['us-education', 'US Education'],
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

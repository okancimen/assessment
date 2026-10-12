export interface RelatedPost {
  slug: string
  shortTitle: string
  description: string
  readTime: string
  tags: string[]
  date: string
}

export function getRelatedFromPosts<T extends RelatedPost>(
  posts: T[],
  current: T,
  count = 5,
): T[] {
  const others = posts.filter(p => p.slug !== current.slug)

  const scored = others
    .map(p => ({ p, score: p.tags.filter(t => current.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)

  const matched = scored.filter(({ score }) => score > 0).slice(0, count).map(s => s.p)
  if (matched.length >= count) return matched

  // Fallback: fill remaining slots with most-recent posts
  const matchedSlugs = new Set(matched.map(p => p.slug))
  const recent = others
    .filter(p => !matchedSlugs.has(p.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count - matched.length)

  return [...matched, ...recent]
}

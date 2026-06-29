import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/app/blog/posts'

const BASE = 'https://eduentry.ai'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,           lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS
    .filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t)))
    .map(post => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...blogPages]
}

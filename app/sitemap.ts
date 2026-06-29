import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './blog/posts'
import { GRAMMAR_AREAS } from './grammar-schools/data'

const BASE = 'https://eduentry.com'

const SUBJECTS = ['english', 'maths', 'verbal-reasoning', 'non-verbal-reasoning']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/11-plus`,           lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/grammar-schools`,   lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/subjects`,          lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,             lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/methodology`,       lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/internship`,        lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/demo`,              lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,              lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/privacy`,           lastModified: '2026-06-14', changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,             lastModified: '2026-06-14', changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const subjectPages: MetadataRoute.Sitemap = SUBJECTS.map((slug) => ({
    url: `${BASE}/subjects/${slug}`,
    lastModified: '2026-06-14',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const grammarPages: MetadataRoute.Sitemap = GRAMMAR_AREAS.map((area) => ({
    url: `${BASE}/grammar-schools/${area.slug}`,
    lastModified: '2026-06-17',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...subjectPages, ...grammarPages, ...blogPages]
}

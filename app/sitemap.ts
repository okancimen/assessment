import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './blog/posts'
import { BLOG_POSTS_ES } from './blog/posts-es'
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
    { url: `${BASE}/internship`,        lastModified: '2026-09-08', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/demo`,              lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,              lastModified: '2026-09-08', changeFrequency: 'weekly', priority: 0.7 },
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

  const esPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/es`,                    lastModified: '2026-09-09', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/blog`,               lastModified: '2026-09-09', changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/es/sobre-nosotros`,     lastModified: '2026-09-09', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/es/metodologia`,        lastModified: '2026-09-09', changeFrequency: 'monthly', priority: 0.6 },
    ...BLOG_POSTS_ES.map((post) => ({
      url: `${BASE}/es/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticPages, ...subjectPages, ...grammarPages, ...blogPages, ...esPages]
}

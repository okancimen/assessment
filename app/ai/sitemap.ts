import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE = 'https://eduentry.ai'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/tr`,                        lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/es`,                        lastModified: '2026-07-02', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tech`,                      lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/business`,                  lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/data-analytics`,            lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/digital-marketing`,         lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`,                     lastModified: '2026-06-30', changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/blog`,                      lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/tr/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/es/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
  ]

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS
    .filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t)))
    .map(post => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const trBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_TR.map(post => ({
    url: `${BASE}/tr/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const esBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_ES.map(post => ({
    url: `${BASE}/es/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages, ...trBlogPages, ...esBlogPages]
}

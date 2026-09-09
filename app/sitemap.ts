import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './blog/posts'
import { BLOG_POSTS_ES } from './blog/posts-es'
import { BLOG_POSTS_TR } from './blog/posts-tr'
import { BLOG_POSTS_FR } from './blog/posts-fr'
import { BLOG_POSTS_AR } from './blog/posts-ar'
import { GRAMMAR_AREAS } from './grammar-schools/data'

const BASE = 'https://eduentry.com'

const SUBJECTS = ['english', 'maths', 'verbal-reasoning', 'non-verbal-reasoning']

function maxDate(...dates: (string | undefined)[]): string {
  return dates.filter(Boolean).sort().at(-1) as string
}

const latestEN = maxDate(...BLOG_POSTS.map((p) => p.dateModified ?? p.date))
const latestES = maxDate(...BLOG_POSTS_ES.map((p) => p.dateModified ?? p.date))
const latestTR = maxDate(...BLOG_POSTS_TR.map((p) => p.dateModified ?? p.date))
const latestFR = maxDate(...BLOG_POSTS_FR.map((p) => p.dateModified ?? p.date))
const latestAR = maxDate(...BLOG_POSTS_AR.map((p) => p.dateModified ?? p.date))

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: { languages: { 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, 'x-default': BASE } },
    },
    { url: `${BASE}/11-plus`,         lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/grammar-schools`, lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/subjects`,        lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE}/about`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: { 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/methodology`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, 'x-default': `${BASE}/methodology` } },
    },
    { url: `${BASE}/internship`, lastModified: '2026-09-08', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/demo`,            lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${BASE}/blog`,
      lastModified: latestEN,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: { languages: { 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, 'x-default': `${BASE}/blog` } },
    },
    { url: `${BASE}/privacy`,         lastModified: '2026-06-14', changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,           lastModified: '2026-06-14', changeFrequency: 'yearly',  priority: 0.3 },
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
    {
      url: `${BASE}/es`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { es: `${BASE}/es`, 'en-GB': BASE, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/es/blog`,
      lastModified: latestES,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { es: `${BASE}/es/blog`, 'en-GB': `${BASE}/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/es/sobre-nosotros`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { es: `${BASE}/es/sobre-nosotros`, 'en-GB': `${BASE}/about`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/es/metodologia`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { es: `${BASE}/es/metodologia`, 'en-GB': `${BASE}/methodology`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, 'x-default': `${BASE}/methodology` } },
    },
    ...BLOG_POSTS_ES.map((post) => ({
      url: `${BASE}/es/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  const trPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/tr`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { tr: `${BASE}/tr`, 'en-GB': BASE, es: `${BASE}/es`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/tr/blog`,
      lastModified: latestTR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { tr: `${BASE}/tr/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/tr/hakkimizda`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { tr: `${BASE}/tr/hakkimizda`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/tr/metodoloji`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { tr: `${BASE}/tr/metodoloji`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, 'x-default': `${BASE}/methodology` } },
    },
    ...BLOG_POSTS_TR.map((post) => ({
      url: `${BASE}/tr/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  const frPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/fr`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { fr: `${BASE}/fr`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, ar: `${BASE}/ar`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/fr/blog`,
      lastModified: latestFR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { fr: `${BASE}/fr/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, ar: `${BASE}/ar/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/fr/a-propos`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { fr: `${BASE}/fr/a-propos`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, ar: `${BASE}/ar/hawlana`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/fr/methodologie`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { fr: `${BASE}/fr/methodologie`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, ar: `${BASE}/ar/manhajiyya`, 'x-default': `${BASE}/methodology` } },
    },
    ...BLOG_POSTS_FR.map((post) => ({
      url: `${BASE}/fr/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  const arPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/ar`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { ar: `${BASE}/ar`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/ar/blog`,
      lastModified: latestAR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { ar: `${BASE}/ar/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/ar/hawlana`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ar: `${BASE}/ar/hawlana`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/ar/manhajiyya`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ar: `${BASE}/ar/manhajiyya`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, 'x-default': `${BASE}/methodology` } },
    },
    ...BLOG_POSTS_AR.map((post) => ({
      url: `${BASE}/ar/blog/${post.slug}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticPages, ...subjectPages, ...grammarPages, ...blogPages, ...esPages, ...trPages, ...frPages, ...arPages]
}

import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './blog/posts'
import { BLOG_POSTS_ES } from './blog/posts-es'
import { BLOG_POSTS_TR } from './blog/posts-tr'
import { BLOG_POSTS_FR } from './blog/posts-fr'
import { BLOG_POSTS_AR } from './blog/posts-ar'
import { BLOG_POSTS_RU } from './blog/posts-ru'
import { BLOG_POSTS_ZH } from './blog/posts-zh'
import { GRAMMAR_AREAS } from './grammar-schools/data'

const BASE = 'https://eduentry.com'

const SUBJECTS = ['english', 'maths', 'verbal-reasoning', 'non-verbal-reasoning']

// contentSlug → slug maps for cross-language hreflang
const trByContentSlug = new Map(BLOG_POSTS_TR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const esByContentSlug = new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const frByContentSlug = new Map(BLOG_POSTS_FR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const arByContentSlug = new Map(BLOG_POSTS_AR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const ruByContentSlug = new Map(BLOG_POSTS_RU.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const zhByContentSlug = new Map(BLOG_POSTS_ZH.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
// EN slug → slug maps (for translating from non-EN post's contentSlug back to other locales)
const enByContentSlug = new Map(BLOG_POSTS.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))

function maxDate(...dates: (string | undefined)[]): string {
  return dates.filter(Boolean).sort().at(-1) as string
}

const latestEN = maxDate(...BLOG_POSTS.map((p) => p.dateModified ?? p.date))
const latestES = maxDate(...BLOG_POSTS_ES.map((p) => p.dateModified ?? p.date))
const latestTR = maxDate(...BLOG_POSTS_TR.map((p) => p.dateModified ?? p.date))
const latestFR = maxDate(...BLOG_POSTS_FR.map((p) => p.dateModified ?? p.date))
const latestAR = maxDate(...BLOG_POSTS_AR.map((p) => p.dateModified ?? p.date))
const latestRU = maxDate(...BLOG_POSTS_RU.map((p) => p.dateModified ?? p.date))
const latestZH = maxDate(...BLOG_POSTS_ZH.map((p) => p.dateModified ?? p.date))

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: { languages: { 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, ru: `${BASE}/ru`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    { url: `${BASE}/11-plus`,         lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/grammar-schools`, lastModified: '2026-09-23', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/subjects`,        lastModified: '2026-09-09', changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE}/about`,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: { 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, ru: `${BASE}/ru/o-nas`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/methodology`,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, ru: `${BASE}/ru/metodologiya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/internship`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, fr: `${BASE}/fr/stage`, es: `${BASE}/es/practicas`, ar: `${BASE}/ar/tadrib`, ru: `${BASE}/ru/stazhirovka`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    { url: `${BASE}/demo`,            lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/sample-report`,   lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE}/blog`,
      lastModified: latestEN,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: { languages: { 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, ru: `${BASE}/ru/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
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
    lastModified: '2026-09-23',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const s = post.slug
    const langs: Record<string, string> = { 'en-GB': `${BASE}/blog/${s}`, 'x-default': `${BASE}/blog/${s}` }
    if (trByContentSlug.has(s)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(s)}`
    if (esByContentSlug.has(s)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(s)}`
    if (frByContentSlug.has(s)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(s)}`
    if (arByContentSlug.has(s)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(s)}`
    if (ruByContentSlug.has(s)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(s)}`
    if (zhByContentSlug.has(s)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(s)}`
    return {
      url: `${BASE}/blog/${s}`,
      lastModified: post.dateModified ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: langs },
    }
  })

  const esPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/es`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { es: `${BASE}/es`, 'en-GB': BASE, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, ru: `${BASE}/ru`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/es/blog`,
      lastModified: latestES,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { es: `${BASE}/es/blog`, 'en-GB': `${BASE}/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, ru: `${BASE}/ru/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/es/sobre-nosotros`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { es: `${BASE}/es/sobre-nosotros`, 'en-GB': `${BASE}/about`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, ru: `${BASE}/ru/o-nas`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/es/metodologia`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { es: `${BASE}/es/metodologia`, 'en-GB': `${BASE}/methodology`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, ru: `${BASE}/ru/metodologiya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/es/practicas`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { es: `${BASE}/es/practicas`, 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, fr: `${BASE}/fr/stage`, ar: `${BASE}/ar/tadrib`, ru: `${BASE}/ru/stazhirovka`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_ES.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { es: `${BASE}/es/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (trByContentSlug.has(cs)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(cs)}`
        if (frByContentSlug.has(cs)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(cs)}`
        if (arByContentSlug.has(cs)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(cs)}`
        if (ruByContentSlug.has(cs)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(cs)}`
        if (zhByContentSlug.has(cs)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/es/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  const trPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/tr`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { tr: `${BASE}/tr`, 'en-GB': BASE, es: `${BASE}/es`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, ru: `${BASE}/ru`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/tr/blog`,
      lastModified: latestTR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { tr: `${BASE}/tr/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, ru: `${BASE}/ru/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/tr/hakkimizda`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { tr: `${BASE}/tr/hakkimizda`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, ru: `${BASE}/ru/o-nas`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/tr/metodoloji`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { tr: `${BASE}/tr/metodoloji`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, ru: `${BASE}/ru/metodologiya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/tr/staj`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { tr: `${BASE}/tr/staj`, 'en-GB': `${BASE}/internship`, fr: `${BASE}/fr/stage`, es: `${BASE}/es/practicas`, ar: `${BASE}/ar/tadrib`, ru: `${BASE}/ru/stazhirovka`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_TR.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { tr: `${BASE}/tr/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (esByContentSlug.has(cs)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(cs)}`
        if (frByContentSlug.has(cs)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(cs)}`
        if (arByContentSlug.has(cs)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(cs)}`
        if (ruByContentSlug.has(cs)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(cs)}`
        if (zhByContentSlug.has(cs)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/tr/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  const frPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/fr`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { fr: `${BASE}/fr`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, ar: `${BASE}/ar`, ru: `${BASE}/ru`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/fr/blog`,
      lastModified: latestFR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { fr: `${BASE}/fr/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, ar: `${BASE}/ar/blog`, ru: `${BASE}/ru/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/fr/a-propos`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { fr: `${BASE}/fr/a-propos`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, ar: `${BASE}/ar/hawlana`, ru: `${BASE}/ru/o-nas`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/fr/methodologie`,
      lastModified: '2026-09-09',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { fr: `${BASE}/fr/methodologie`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, ar: `${BASE}/ar/manhajiyya`, ru: `${BASE}/ru/metodologiya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/fr/stage`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { fr: `${BASE}/fr/stage`, 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, es: `${BASE}/es/practicas`, ar: `${BASE}/ar/tadrib`, ru: `${BASE}/ru/stazhirovka`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_FR.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { fr: `${BASE}/fr/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (trByContentSlug.has(cs)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(cs)}`
        if (esByContentSlug.has(cs)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(cs)}`
        if (arByContentSlug.has(cs)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(cs)}`
        if (ruByContentSlug.has(cs)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(cs)}`
        if (zhByContentSlug.has(cs)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/fr/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  const arPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/ar`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { ar: `${BASE}/ar`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ru: `${BASE}/ru`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/ar/blog`,
      lastModified: latestAR,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { ar: `${BASE}/ar/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ru: `${BASE}/ru/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/ar/hawlana`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ar: `${BASE}/ar/hawlana`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ru: `${BASE}/ru/o-nas`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/ar/manhajiyya`,
      lastModified: '2026-09-10',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ar: `${BASE}/ar/manhajiyya`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ru: `${BASE}/ru/metodologiya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/ar/tadrib`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { ar: `${BASE}/ar/tadrib`, 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, fr: `${BASE}/fr/stage`, es: `${BASE}/es/practicas`, ru: `${BASE}/ru/stazhirovka`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_AR.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { ar: `${BASE}/ar/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (trByContentSlug.has(cs)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(cs)}`
        if (esByContentSlug.has(cs)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(cs)}`
        if (frByContentSlug.has(cs)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(cs)}`
        if (ruByContentSlug.has(cs)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(cs)}`
        if (zhByContentSlug.has(cs)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/ar/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  const ruPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/ru`,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { ru: `${BASE}/ru`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, zh: `${BASE}/zh`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/ru/blog`,
      lastModified: latestRU,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { ru: `${BASE}/ru/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, zh: `${BASE}/zh/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/ru/o-nas`,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ru: `${BASE}/ru/o-nas`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, zh: `${BASE}/zh/guanyu-women`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/ru/metodologiya`,
      lastModified: '2026-09-11',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { ru: `${BASE}/ru/metodologiya`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, zh: `${BASE}/zh/fangfalun`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/ru/stazhirovka`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { ru: `${BASE}/ru/stazhirovka`, 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, fr: `${BASE}/fr/stage`, es: `${BASE}/es/practicas`, ar: `${BASE}/ar/tadrib`, zh: `${BASE}/zh/shixi`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_RU.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { ru: `${BASE}/ru/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (trByContentSlug.has(cs)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(cs)}`
        if (esByContentSlug.has(cs)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(cs)}`
        if (frByContentSlug.has(cs)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(cs)}`
        if (arByContentSlug.has(cs)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(cs)}`
        if (zhByContentSlug.has(cs)) langs.zh = `${BASE}/zh/blog/${zhByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/ru/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  const zhPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/zh`,
      lastModified: '2026-09-15',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: { zh: `${BASE}/zh`, 'en-GB': BASE, es: `${BASE}/es`, tr: `${BASE}/tr`, fr: `${BASE}/fr`, ar: `${BASE}/ar`, ru: `${BASE}/ru`, 'x-default': BASE } },
    },
    {
      url: `${BASE}/zh/blog`,
      lastModified: latestZH,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: { languages: { zh: `${BASE}/zh/blog`, 'en-GB': `${BASE}/blog`, es: `${BASE}/es/blog`, tr: `${BASE}/tr/blog`, fr: `${BASE}/fr/blog`, ar: `${BASE}/ar/blog`, ru: `${BASE}/ru/blog`, 'x-default': `${BASE}/blog` } },
    },
    {
      url: `${BASE}/zh/guanyu-women`,
      lastModified: '2026-09-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { zh: `${BASE}/zh/guanyu-women`, 'en-GB': `${BASE}/about`, es: `${BASE}/es/sobre-nosotros`, tr: `${BASE}/tr/hakkimizda`, fr: `${BASE}/fr/a-propos`, ar: `${BASE}/ar/hawlana`, ru: `${BASE}/ru/o-nas`, 'x-default': `${BASE}/about` } },
    },
    {
      url: `${BASE}/zh/fangfalun`,
      lastModified: '2026-09-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: { languages: { zh: `${BASE}/zh/fangfalun`, 'en-GB': `${BASE}/methodology`, es: `${BASE}/es/metodologia`, tr: `${BASE}/tr/metodoloji`, fr: `${BASE}/fr/methodologie`, ar: `${BASE}/ar/manhajiyya`, ru: `${BASE}/ru/metodologiya`, 'x-default': `${BASE}/methodology` } },
    },
    {
      url: `${BASE}/zh/shixi`,
      lastModified: '2026-09-18',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: { zh: `${BASE}/zh/shixi`, 'en-GB': `${BASE}/internship`, tr: `${BASE}/tr/staj`, fr: `${BASE}/fr/stage`, es: `${BASE}/es/practicas`, ar: `${BASE}/ar/tadrib`, ru: `${BASE}/ru/stazhirovka`, 'x-default': `${BASE}/internship` } },
    },
    ...BLOG_POSTS_ZH.map((post) => {
      const cs = post.contentSlug
      const langs: Record<string, string> = { zh: `${BASE}/zh/blog/${post.slug}` }
      if (cs) {
        langs['en-GB'] = `${BASE}/blog/${cs}`
        langs['x-default'] = `${BASE}/blog/${cs}`
        if (trByContentSlug.has(cs)) langs.tr = `${BASE}/tr/blog/${trByContentSlug.get(cs)}`
        if (esByContentSlug.has(cs)) langs.es = `${BASE}/es/blog/${esByContentSlug.get(cs)}`
        if (frByContentSlug.has(cs)) langs.fr = `${BASE}/fr/blog/${frByContentSlug.get(cs)}`
        if (arByContentSlug.has(cs)) langs.ar = `${BASE}/ar/blog/${arByContentSlug.get(cs)}`
        if (ruByContentSlug.has(cs)) langs.ru = `${BASE}/ru/blog/${ruByContentSlug.get(cs)}`
      }
      return { url: `${BASE}/zh/blog/${post.slug}`, lastModified: post.dateModified ?? post.date, changeFrequency: 'monthly' as const, priority: 0.6, alternates: { languages: langs } }
    }),
  ]

  return [...staticPages, ...subjectPages, ...grammarPages, ...blogPages, ...esPages, ...trPages, ...frPages, ...arPages, ...ruPages, ...zhPages]
}

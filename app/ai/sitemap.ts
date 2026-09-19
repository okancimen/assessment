import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE = 'https://eduentry.ai'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/en`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tr`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/es`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/fr`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ar`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ru`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/zh`,                        lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tech`,                      lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/business`,                  lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/data-analytics`,            lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/digital-marketing`,         lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`,                     lastModified: '2026-09-19', changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/blog`,                      lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/tr/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/es/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/fr/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/ar/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/ru/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/zh/blog`,                   lastModified: new Date().toISOString().slice(0, 10), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/tr/teknoloji`,               lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/is-dunyasi`,              lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/veri-analitigi`,          lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/dijital-pazarlama`,       lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/tecnologia`,              lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/empresa`,                 lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/analisis-de-datos`,       lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/marketing-digital`,       lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/technologie`,             lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/entreprise`,              lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/analyse-de-donnees`,      lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/marketing-digital`,       lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/taqniya`,                 lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/aamal`,                   lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/bayanat`,                 lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/tawiq`,                   lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/keji`,                    lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/shangye`,                 lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/shuju`,                   lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/yingxiao`,                lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/tekhnologii`,             lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/biznes`,                  lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/analiz-dannykh`,          lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/tsifrovoy-marketing`,     lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
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
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const esBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_ES.map(post => ({
    url: `${BASE}/es/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const frBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_FR.map(post => ({
    url: `${BASE}/fr/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const arBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_AR.map(post => ({
    url: `${BASE}/ar/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const ruBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_RU.map(post => ({
    url: `${BASE}/ru/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const zhBlogPages: MetadataRoute.Sitemap = BLOG_POSTS_ZH.map(post => ({
    url: `${BASE}/zh/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages, ...trBlogPages, ...esBlogPages, ...frBlogPages, ...arBlogPages, ...ruBlogPages, ...zhBlogPages]
}

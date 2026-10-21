import type { MetadataRoute } from 'next'
import { INSIGHT_SLUGS } from './insights/content'
import { INSIGHT_SLUGS_TR } from './tr/insights/content'

const BASE = 'https://eduentry.ai'

const POST_DATES: Record<string, string> = {
  'high-school-internship-benefits-university':    '2026-10-01',
  'how-to-get-tech-internship-before-university':  '2026-10-01',
  'business-work-experience-high-school-uk':       '2026-10-02',
  'digital-marketing-work-experience-student-reviews': '2026-10-02',
  'how-to-get-internship-no-experience-high-school': '2026-10-03',
  'how-to-differentiate-yourself-at-15':           '2026-10-03',
  'oecd-teenage-work-experience-career-outcomes':  '2026-10-05',
  'pisa-2025-work-experience-student-readiness':   '2026-10-05',
  'how-to-find-internship-as-student':             '2026-10-07',
  'oecd-teenage-part-time-work-benefits':          '2026-10-07',
  'uluslararasi-staj-programi-2026':               '2026-10-15',
  'ulusal-staj-programi-rehberi':                  '2026-10-15',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const insightPages: MetadataRoute.Sitemap = INSIGHT_SLUGS.map(slug => ({
    url: `${BASE}/insights/${slug}`,
    lastModified: POST_DATES[slug] ?? '2026-10-15',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const insightPagesTR: MetadataRoute.Sitemap = INSIGHT_SLUGS_TR.map(slug => ({
    url: `${BASE}/tr/insights/${slug}`,
    lastModified: POST_DATES[slug] ?? '2026-10-15',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                lastModified: '2026-10-19', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/tr`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/es`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/fr`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ar`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ru`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/zh`,                        lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tech`,                      lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/business`,                  lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/data-analytics`,            lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/digital-marketing`,         lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/insights`,                       lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/work-experience`,               lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/work-experience/apply`,         lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tr/insights`,                   lastModified: '2026-10-15', changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/tr/work-experience`,            lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tr/work-experience/apply`,      lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`,                     lastModified: '2026-10-15', changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/tr/teknoloji`,               lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/is-dunyasi`,              lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/veri-analitigi`,          lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tr/dijital-pazarlama`,       lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/tecnologia`,              lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/empresa`,                 lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/analisis-de-datos`,       lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/es/marketing-digital`,       lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/technologie`,             lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/entreprise`,              lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/analyse-de-donnees`,      lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fr/marketing-digital`,       lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/taqniya`,                 lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/aamal`,                   lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/bayanat`,                 lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ar/tawiq`,                   lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/keji`,                    lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/shangye`,                 lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/shuju`,                   lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/yingxiao`,                lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/tekhnologii`,             lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/biznes`,                  lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/analiz-dannykh`,          lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ru/tsifrovoy-marketing`,     lastModified: '2026-10-15', changeFrequency: 'monthly', priority: 0.8 },
  ]

  // Blog posts live on eduentry.com; eduentry.ai/…/blog URLs redirect there
  return [...staticPages, ...insightPages, ...insightPagesTR]
}

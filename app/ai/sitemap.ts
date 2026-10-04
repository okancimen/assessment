import type { MetadataRoute } from 'next'

const BASE = 'https://eduentry.ai'

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

  // Blog posts live on eduentry.com; eduentry.ai/…/blog URLs redirect there
  return staticPages
}

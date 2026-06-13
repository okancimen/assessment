import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://eduentry.com', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://eduentry.com/about', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://eduentry.com/methodology', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://eduentry.com/subjects/english', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eduentry.com/subjects/maths', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eduentry.com/subjects/verbal-reasoning', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eduentry.com/subjects/non-verbal-reasoning', lastModified: new Date('2026-06-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://eduentry.com/privacy', lastModified: new Date('2026-06-13'), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://eduentry.com/terms', lastModified: new Date('2026-06-13'), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

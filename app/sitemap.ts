import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eduentry.com',
      lastModified: new Date('2026-06-13'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://eduentry.com/methodology',
      lastModified: new Date('2026-06-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

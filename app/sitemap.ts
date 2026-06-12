import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eduentry.com',
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

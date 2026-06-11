import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/children/',
          '/assessment/',
          '/results/',
          '/api/',
          '/auth/callback',
        ],
      },
    ],
    sitemap: 'https://eduentry.com/sitemap.xml',
  }
}

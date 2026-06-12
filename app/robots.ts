import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow all major AI crawlers to index the public homepage
      { userAgent: 'GPTBot',          allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'ClaudeBot',       allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'PerplexityBot',   allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'Amazonbot',       allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'anthropic-ai',    allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'cohere-ai',       allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'Meta-ExternalAgent', allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      { userAgent: 'Bytespider',      allow: '/', disallow: ['/dashboard', '/children/', '/assessment/', '/results/', '/api/', '/auth/'] },
      // Default rule for all other bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/children/',
          '/assessment/',
          '/results/',
          '/api/',
          '/auth/',
        ],
      },
    ],
    sitemap: 'https://eduentry.com/sitemap.xml',
  }
}

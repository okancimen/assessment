import type { MetadataRoute } from 'next'

const PRIVATE = [
  '/dashboard',
  '/children/',
  '/assessment/',
  '/results/',
  '/api/',
  '/auth/',
  '/admin/',
  '/internship/apply',
  '/internship/register',
]

const AI_BOTS = [
  'GPTBot', 'ClaudeBot', 'Google-Extended', 'PerplexityBot',
  'Amazonbot', 'anthropic-ai', 'cohere-ai', 'Meta-ExternalAgent', 'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_BOTS, allow: '/', disallow: PRIVATE },
      { userAgent: '*',     allow: '/', disallow: PRIVATE },
    ],
    sitemap: 'https://eduentry.com/sitemap.xml',
  }
}

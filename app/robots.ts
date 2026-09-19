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
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'Bytespider',
  'Applebot-Extended',
  'CCBot',
  'YouBot',
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

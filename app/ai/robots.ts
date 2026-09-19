import type { MetadataRoute } from 'next'

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

const PRIVATE = ['/apply', '/register', '/dashboard', '/admin/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_BOTS, allow: ['/', '/llms.txt'], disallow: ['/dashboard', '/admin/'] },
      { userAgent: '*',     allow: '/', disallow: PRIVATE },
    ],
    sitemap: 'https://eduentry.ai/sitemap.xml',
  }
}

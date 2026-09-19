import type { MetadataRoute } from 'next'

const AI_BOTS = [
  'GPTBot', 'ClaudeBot', 'Google-Extended', 'PerplexityBot',
  'Amazonbot', 'anthropic-ai', 'cohere-ai', 'Meta-ExternalAgent', 'Bytespider',
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

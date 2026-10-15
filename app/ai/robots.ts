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

const PRIVATE = ['/register', '/dashboard', '/admin/']

const ALWAYS_BLOCK = [
  '/*/opengraph-image',   // Next.js image generation endpoints — not indexable pages
  '/_next/',              // Next.js static assets, fonts, build files
  '/ai/',                 // Proxy leak: app/ai/ exposed under /ai/ prefix by Plesk
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_BOTS, allow: ['/', '/llms.txt'], disallow: ['/dashboard', '/admin/', ...ALWAYS_BLOCK] },
      { userAgent: '*',     allow: '/', disallow: [...PRIVATE, ...ALWAYS_BLOCK] },
    ],
    sitemap: 'https://eduentry.ai/sitemap.xml',
  }
}

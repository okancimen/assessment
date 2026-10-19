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
  '/opengraph-image',
  '/_next/',              // Next.js static assets, fonts, build files
  '/ai/',                 // Proxy leak: app/ai/ exposed under /ai/ prefix by Plesk
  '/blog/',               // Blog lives on eduentry.com; redirects handled in next.config.ts
  '/blog',
  '/tr/blog/',            // Locale blogs live on eduentry.com
  '/tr/blog',
  '/es/blog/',
  '/es/blog',
  '/fr/blog/',
  '/fr/blog',
  '/ar/blog/',
  '/ar/blog',
  '/ru/blog/',
  '/ru/blog',
  '/zh/blog/',
  '/zh/blog',
  // eduentry.com-only pages accessible via Plesk proxy — canonical points to eduentry.com
  '/subjects/',
  '/grammar-schools/',
  '/terms',
  '/demo',
  '/sample-report/',
  '/methodology',
  '/11-plus/',
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

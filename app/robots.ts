import type { MetadataRoute } from 'next'

const PRIVATE = [
  '/dashboard',
  '/children/',
  '/assessment/',
  '/results/',
  '/api/',
  '/auth/',
  '/admin/',
  // Internship paths — all redirect cross-domain to eduentry.ai; prefix covers apply/register too.
  '/internship',
  '/tr/staj',
  '/es/practicas',
  '/fr/stage',
  '/ar/tadrib',
  '/ru/stazhirovka',
  '/zh/shixi',
  // Next.js image generation routes — return PNG, not indexable pages
  '/*/opengraph-image',
  '/opengraph-image',
  // Web manifest — JSON file, not a page
  '/manifest.json',
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
      { userAgent: AI_BOTS, allow: ['/', '/llms.txt', '/llms-full.txt'], disallow: PRIVATE },
      { userAgent: '*',     allow: '/', disallow: PRIVATE },
    ],
    sitemap: 'https://eduentry.com/sitemap.xml',
  }
}

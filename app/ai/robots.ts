import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/apply', '/register', '/dashboard', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web', 'PerplexityBot'],
        allow: ['/', '/llms.txt'],
        disallow: ['/dashboard', '/admin/'],
      },
    ],
    sitemap: 'https://eduentry.ai/sitemap.xml',
  }
}

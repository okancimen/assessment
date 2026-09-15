import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '实习与职业指南 — Eduentry博客',
  description:
    '关于早期工作经验、职业发展和大学申请的循证指南——来自Eduentry团队，面向技术、商业、数据和营销方向的高中生。',
  keywords: [
    '实习指南',
    '高中工作经验',
    '大学前实习',
    '技术实习学生',
    '职业发展青少年',
    '大学申请工作经验',
    '职业路径指南',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh/blog`,
    languages: {
      zh: `${BASE_URL}/zh/blog`,
      tr: `${BASE_URL}/tr/blog`,
      es: `${BASE_URL}/es/blog`,
      'en-GB': `${BASE_URL}/blog`,
      fr: `${BASE_URL}/fr/blog`,
      ru: `${BASE_URL}/ru/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: '实习与职业指南 — Eduentry博客',
    description: '关于早期工作经验、职业发展和大学申请的循证指南。',
    url: `${BASE_URL}/zh/blog`,
    siteName: 'Eduentry',
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/blog/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry博客' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '实习与职业指南 — Eduentry博客',
    description: '关于早期工作经验、职业发展和大学申请的循证指南。',
    images: [`${BASE_URL}/zh/blog/opengraph-image`],
  },
}

export default function ZHBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
      { '@type': 'ListItem', position: 2, name: '博客', item: `${BASE_URL}/zh/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '实习与职业指南',
    url: `${BASE_URL}/zh/blog`,
    itemListElement: BLOG_POSTS_ZH.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/zh/blog/${p.slug}`,
    })),
  }

  return (
    <main lang="zh" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/zh" className="hover:text-[#1d1d1f]">首页</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">博客</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            实习 &amp; 职业指南
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            关于早期工作经验、职业发展和大学申请的循证指南——面向高中生。
          </p>
        </div>

        <div className="space-y-6">
          {[...BLOG_POSTS_ZH].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/zh/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('zh-CN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-snug">{post.title}</h2>
              <p className="text-[#6e6e73] leading-relaxed mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

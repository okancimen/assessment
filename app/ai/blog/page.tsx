import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/app/blog/posts'

const BASE_URL = 'https://eduentry.ai'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']

const posts = BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t)))

export const metadata: Metadata = {
  title: 'Blog — Internship Readiness & Career Development',
  description:
    'Research and guides on early internship experience, career development for high school students, and university admissions work experience.',
  keywords: [
    'internship readiness blog',
    'high school career development',
    'work experience university admissions',
    'early internship benefits',
    'student career guides',
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Eduentry.ai Blog — Internship & Career Development',
    description: 'Research and guides on early internship experience and career development for high school students.',
    url: `${BASE_URL}/blog`,
  },
}

export default function AIBlogPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    ],
  }

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            Internship &amp; Career Research
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Evidence-based guides on early work experience, career development, and university admissions for high school students.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
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

import type { Metadata } from 'next'
import { brandedTitle } from '@/lib/seo'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from '../../posts'
import { slugToTag, getPostsByTag, getAllTagSlugs } from '../../tag-utils'
import { notFound } from 'next/navigation'

const BASE_URL = 'https://eduentry.com'

// Tag display names and descriptions for metadata
const TAG_META: Record<string, { title: string; description: string }> = {
  '11+': {
    title: '11+ Exam Guides',
    description: 'Complete guides on 11+ exam preparation, verbal reasoning, non-verbal reasoning, and grammar school entrance requirements for UK parents and students.',
  },
  'Grammar Schools': {
    title: 'Grammar School Admissions Guides',
    description: 'Everything parents need to know about grammar school entry requirements, admissions processes, and selective school preparation in England.',
  },
  'Gifted Education': {
    title: 'Gifted Education & Testing Guides',
    description: 'Guides to gifted identification, CAT4 and CogAT testing, and gifted programmes in the UK, US, Canada, Australia, the Netherlands and the UAE.',
  },
  'Career Development': {
    title: 'Career Development Guides for Students',
    description: 'Research-backed guides on student career development, internship benefits, work experience, and building a professional profile before university.',
  },
  'Work Experience': {
    title: 'Work Experience Guides for Students',
    description: 'How to find, apply for, and make the most of work experience placements in the UK — covering business, technology, digital marketing, and more.',
  },
  'Internship': {
    title: 'Internship Guides for Students',
    description: 'Guides on finding internships as a student with no experience, internship readiness assessments, and making the most of professional placements.',
  },
  'CAT4': {
    title: 'CAT4 Test Guides',
    description: 'What is the CAT4 test, how it is scored, and how to prepare. Covers CAT4 results interpretation, stanines, and how scores are used for school setting.',
  },
  'Parent Guide': {
    title: 'Parent Guides to Academic Assessment',
    description: 'Clear guides for parents on standardised scores, percentile rankings, grammar school admissions, gifted identification, and academic benchmarking.',
  },
  'Australia': {
    title: 'Australian Education & Testing Guides',
    description: 'Guides on ACER scholarship exams, OC tests, GATE gifted programs, NAPLAN, and selective school preparation in Australia.',
  },
  'UAE': {
    title: 'UAE Education & Testing Guides',
    description: 'Guides on CAT4 testing in UAE schools, British curriculum school admissions, gifted programmes, and international school entrance exams in Dubai and the UAE.',
  },
  'Canada': {
    title: 'Canadian Gifted Education & Testing Guides',
    description: 'Guides on gifted programme identification in Canada, Ontario gifted testing, WISC-V, private school entrance exams, and French immersion programmes.',
  },
  'Netherlands': {
    title: 'Netherlands Education Guides',
    description: 'Guides on the Cito Toets, VWO and gymnasium selection, hoogbegaafd identification, and international school admissions in the Netherlands.',
  },
  'UK Education': {
    title: 'UK Education System Guides',
    description: 'Guides on GCSE preparation, 11+ exams, grammar school admissions, standardised scores, and the UK selective education system.',
  },
  'US Education': {
    title: 'US Education & Gifted Testing Guides',
    description: 'Guides on gifted program testing in the US, CogAT, ISEE, SSAT, private school admissions, and gifted identification for American students.',
  },
  'Academic Assessment': {
    title: 'Academic Assessment Guides',
    description: 'Guides on standardised testing, adaptive assessments, CAT4, NWEA MAP, PISA, and international academic benchmarks for parents and students.',
  },
  'University Admissions': {
    title: 'University Admissions & UCAS Guides',
    description: 'How work experience, internships, and academic performance affect university applications and UCAS personal statements.',
  },
  'Child Development': {
    title: 'Child Development & Academic Potential Guides',
    description: 'Research on child development, cognitive testing, learning strengths and weaknesses, and how early benchmarking helps children reach their potential.',
  },
  'Character Strengths': {
    title: 'Child Character Strengths Guides',
    description: 'Guides on VIA character strengths for children — how to identify your child\'s Signature Strengths and Growth Areas, and use them to boost confidence, wellbeing, and academic success.',
  },
  'Personality Assessment': {
    title: 'Child Personality Assessment Guides',
    description: 'Complete guides on child personality assessment — what VIA character strengths tests measure, how to interpret results, and how a free personality assessment can support your child\'s development.',
  },
  'VIA Strengths': {
    title: 'VIA Character Strengths Guides',
    description: 'In-depth guides on the VIA Character Strengths framework — the 24 strengths across 6 virtues, how they\'re measured, and how parents can use VIA results to support children aged 6–20.',
  },
  'Gifted Testing': {
    title: 'Gifted Testing Guides for Parents',
    description: 'How gifted testing works — CogAT, WISC-V, CAT4, and ACER explained. Score interpretation, percentile thresholds, and what gifted test results mean for your child\'s education.',
  },
  'Gifted Programs': {
    title: 'Gifted Programs Guides',
    description: 'Guides to gifted programmes worldwide — UK, US, Canada, Australia, Netherlands and UAE. Eligibility criteria, application processes, and how to prepare your child for gifted identification.',
  },
  'NWEA MAP': {
    title: 'NWEA MAP Test Guides',
    description: 'Complete guides to NWEA MAP Growth testing — how RIT scores work, percentile rankings by grade, score interpretation, and how MAP results affect gifted programme eligibility.',
  },
  'CogAT': {
    title: 'CogAT Test Guides',
    description: 'What is the CogAT, how is it scored, and how to prepare. Covers CogAT score interpretation, percentile bands, battery profiles, and how it\'s used for gifted identification in the US and Canada.',
  },
  'WISC-V': {
    title: 'WISC-V IQ Test Guides',
    description: 'Guides on the WISC-V IQ test — what the five index scores measure, gifted eligibility thresholds (130+ for most programmes), score interpretation, and what to do with WISC-V results.',
  },
  'Wellbeing': {
    title: 'Child Wellbeing Guides',
    description: 'Guides on child wellbeing, positive psychology, and character strengths — how VIA strengths research links to academic resilience, emotional health, and long-term life satisfaction.',
  },
}

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const meta = TAG_META[tagName]
  const title = meta?.title ?? `${tagName} Guides`
  const description = meta?.description ?? `Guides and articles about ${tagName}.`
  const url = `${BASE_URL}/blog/tag/${tagSlug}`
  return {
    title: brandedTitle(title),
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: `${title} | Eduentry Blog`, description, url, images: [`${BASE_URL}/blog/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: `${title} | Eduentry Blog`, description, images: [`${BASE_URL}/blog/opengraph-image`] },
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()

  const posts = getPostsByTag(tagName, BLOG_POSTS).sort((a, b) => b.date.localeCompare(a.date))
  if (posts.length === 0) notFound()

  const meta = TAG_META[tagName]
  const url = `${BASE_URL}/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: meta?.title ?? tagName, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: meta?.title ?? tagName,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{meta?.title ?? tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {meta?.title ?? `${tagName} Guides`}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            {meta?.description ?? `Guides and articles about ${tagName}.`}
          </p>
          <p className="text-sm text-gray-500 mt-3">{posts.length} {posts.length === 1 ? 'guide' : 'guides'}</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← All guides
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

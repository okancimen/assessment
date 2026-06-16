import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS, getPostBySlug } from '../posts'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/blog/${slug}`
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url, languages: { 'en-GB': url, 'x-default': url } },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      images: [{ url: `/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/blog/${slug}/opengraph-image`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.shortTitle, item: url },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
    author: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Eduentry',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PublicNav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{post.shortTitle}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>Eduentry Research Team</span>
          </div>
        </div>

        <article className="prose prose-gray max-w-none space-y-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Predicting and tracking student placement success requires an understanding of cross-border data metrics.
            As regional and international educational boards integrate adaptive digital testing models, standard
            cut-off expectations are shifting. This report details the global performance parameters, standardised
            testing trends, and milestone targets across primary, secondary, and pre-university systems for the
            2026 academic cycle.
          </p>

          {/* Baselines */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 Global Performance Baselines &amp; Data-Driven Milestones</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To evaluate student trajectories accurately, educational consultants analyse raw scores translated into
              standardised metrics. Standardised modelling removes discrepancies across varying global test
              conditions by establishing an immutable global mean.
            </p>
            <ul className="space-y-5 mb-6">
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>11+ Verbal Reasoning Trend (2026):</strong> Across competitive UK and international grammar
                  pathways, the baseline Standardised Age Score (SAS) is anchored at 100. Top-tier selective placement
                  generally requires an SAS threshold between 115 and 121.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>Global Mathematics Competency (PISA/TIMSS Benchmarks):</strong> Based on the multi-year
                  aggregate data feeding into the 2026 curriculum baselines, top-performing international hubs
                  (such as Singapore, Hong Kong, and Estonia) maintain a mathematics scale score baseline of
                  540–575, compared to the OECD median baseline of 472.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>The Pre-University Shift (SAT/ACT Adaptive Testing):</strong> Following the full
                  digitisation of international college entry frameworks, the median score for the top 10% of
                  global applicants has consolidated at 1480+ on the Digital SAT, with an average sub-score
                  requirement of 720+ in Evidence-Based Reading and Writing (EBRW).
                </span>
              </li>
            </ul>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-indigo-900">Key takeaway:</strong> Raw scores are increasingly obsolete.
                Educational institutions now prioritise percentile ranking metrics adjusted for age and demographic
                cohorts. For international transitions, a student must track in the 85th percentile or higher within
                their specific target curriculum to be considered competitive for selective admissions.
              </p>
            </div>
          </section>

          {/* Frameworks table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Admissions Frameworks and Standardised Baselines</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Different tiers of education rely on entirely different assessment ecosystems. The table below outlines
              the core international benchmarks across primary, secondary, and pre-university checkpoints.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-700">Assessment Tier</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Core Standardised Metrics</th>
                    <th className="text-left p-4 font-semibold text-gray-700">2026 Global Competitive Baseline</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Assessment Engine / Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ['Primary Admissions (Age 11+)', 'Standardised Age Score (SAS)', '115–121+', 'GL Assessment / CEM / ISEB'],
                    ['Middle Years Baseline (Age 14–15)', 'Scale Scores / Proficiency Bands', 'Level 4+ (PISA Baseline)', 'OECD / National Assessment Frameworks'],
                    ['US/International University Track', 'Digital Scale Score (400–1600)', '1450+ (Ivy Plus Average: 1540+)', 'College Board (Digital SAT)'],
                    ['UK / Commonwealth University Track', 'Grade Boundaries (A*–U / 9–1)', 'Minimum 3 A-Level Predictions at A*/A', 'UCAS / Pearson Edexcel / Cambridge'],
                  ].map((row) => (
                    <tr key={row[0]} className="hover:bg-gray-50/50">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-4 ${i === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Technical analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Analysis of Major Global Testing Engines</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. K-12 Multi-Stage Adaptive Testing (MST)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern standardised test engines, notably the Digital SAT and the ISEB Common Pre-Test, have completely
              transitioned to Multi-Stage Adaptive Testing models. Unlike traditional assessments, these exams do not
              feature a fixed set of questions — instead, a student&apos;s performance on the initial module
              determines the algorithmic difficulty of the subsequent module.
            </p>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 mb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 font-semibold text-gray-800 shadow-sm text-sm text-center">
                  Module 1: Baseline Question Mix
                </div>
              </div>
              <div className="flex justify-center text-gray-300 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="20" />
                  <polyline points="6 14 12 20 18 14" />
                </svg>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-emerald-600 mb-2">High Accuracy Performance</div>
                  <div className="bg-white border border-emerald-200 rounded-xl px-4 py-3 text-sm text-gray-700">
                    Module 2: Advanced Questions Route
                  </div>
                  <div className="text-xs text-emerald-600 mt-2">↑ Higher score ceiling range</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-amber-600 mb-2">Lower Accuracy Performance</div>
                  <div className="bg-white border border-amber-200 rounded-xl px-4 py-3 text-sm text-gray-700">
                    Module 2: Standard Questions Route
                  </div>
                  <div className="text-xs text-amber-600 mt-2">Capped max score threshold</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-amber-800">Strategic risk:</strong> If a student makes unforced errors in
                Module 1, the algorithm routes them to a lower-difficulty Module 2. This caps their maximum possible
                scale score, regardless of whether they achieve perfect accuracy in that second phase.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Standardised Age Score (SAS) Systems</h3>
            <p className="text-gray-700 leading-relaxed">
              Used primarily in lower secondary and grammar entry models, SAS normalises outcomes to account for
              development gaps between the oldest and youngest students in a cohort. A 10-month age gap equals
              massive vocabulary variance. The formula factors in chronological age in months to generate a standard
              deviation curve where 100 is the exact median.
            </p>
          </section>

          {/* Subject adaptations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Subject Adaptations and Curriculum Weightings</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="font-semibold text-gray-900 mb-3">Mathematics &amp; Quantitative Logic</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  <strong>The trend:</strong> Global standardisations are moving away from abstract calculations
                  toward applied data handling and non-routine problem solving.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Benchmark indicator:</strong> High-tier performance bands require a student to demonstrate
                  procedural fluency up to two years ahead of their chronological grade level.
                </p>
              </div>
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="font-semibold text-gray-900 mb-3">Verbal and Textual Analysis</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  <strong>The trend:</strong> Structural grammar tracking has dropped in favour of advanced context
                  decoding and informational text analysis.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Benchmark indicator:</strong> Students are routinely tested on high-density non-fiction
                  passages, with questions targeting implicit author intent and synthesis of conflicting texts.
                </p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Roadmap for International Academic Readiness</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To position students effectively within these global benchmarks, families and school leaders must
              execute an ordered academic strategy.
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Curriculum Gap Mapping', when: '18–24 Months Out', detail: 'Run international diagnostic comparisons (e.g. matching a local curriculum against the international IB or UK National Curriculum baselines) to identify systemic gaps in data handling or advanced textual interpretation.' },
                { step: '2', title: 'Adaptive Testing Familiarisation', when: '12 Months Out', detail: 'Move students off linear paper-based practice sets. Introduce digital, time-restricted platforms to build stamina for multi-stage adaptive algorithmic testing environments.' },
                { step: '3', title: 'Pacing Optimisation Intervals', when: '6 Months Out', detail: 'Implement strict per-question time limits (e.g. targeting a 60–90 second execution limit per quantitative item) to prevent performance drops caused by cognitive fatigue during official testing.' },
                { step: '4', title: 'Target Score Calibration', when: 'Exam Month', detail: 'Analyse final mock assessments strictly through percentile bands rather than percentage scores. Calibrate school selection strategies based on verified 85th to 95th percentile data ranges.' },
              ].map(({ step, title, when, detail }) => (
                <div key={step} className="flex gap-4 p-5 rounded-xl border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{title}</span>
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">{when}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">References and Strategic Framework Data Sources</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>OECD (Organisation for Economic Co-operation and Development) — International Student Performance Metrics Matrix Database.</li>
              <li>The College Board — Annual Report on International Digital SAT Performance Metrics and Cohort Scaling.</li>
              <li>GL Assessment &amp; IEA — Trend reports on international mathematics, science, and linguistic standardisation standards.</li>
            </ul>
          </section>
        </article>

        {/* Internal links */}
        <section className="mt-14 mb-14">
          <Link href="/methodology" className="flex items-center justify-between bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-4 hover:bg-indigo-100/60 transition-colors group">
            <div>
              <div className="font-semibold text-indigo-900 mb-0.5">How does Eduentry calculate standardised scores?</div>
              <div className="text-sm text-indigo-600">Read the full scoring methodology and international benchmarks →</div>
            </div>
            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">See where your child stands today</h2>
          <p className="text-indigo-200 mb-8">Free adaptive assessment with an instant standardised score and percentile ranking.</p>
          <Link href="/auth/register" prefetch={false} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free assessment
          </Link>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}

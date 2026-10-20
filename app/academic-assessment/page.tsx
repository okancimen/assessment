import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import GuestAcademicStartForm from './GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Free Child Academic Assessment | AI-Powered — Eduentry',
  description:
    'Measure your child\'s academic ability across English, Mathematics, Verbal & Non-Verbal Reasoning with our adaptive AI assessment. Ages 6–20. No registration required. Instant results.',
  keywords: [
    'child academic assessment',
    'free 11 plus practice test',
    'adaptive academic test children',
    'AI academic assessment online',
    'child maths english test',
    'verbal reasoning test children',
    'non-verbal reasoning test children',
    'primary school assessment',
    'child academic ability test',
    'online school readiness test',
  ],
  alternates: {
    canonical: `${BASE_URL}/academic-assessment`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/academic-assessment`,
    siteName: 'Eduentry',
    title: 'Free Child Academic Assessment | AI-Powered — Eduentry',
    description:
      "Measure your child's academic ability across English, Maths, Verbal & Non-Verbal Reasoning. Ages 6–20. No registration needed.",
    locale: 'en_GB',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Child Academic Assessment — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Child Academic Assessment | AI-Powered — Eduentry',
    description:
      "Measure your child's academic ability across English, Maths, Verbal & Non-Verbal Reasoning. Ages 6–20. No registration needed.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'What subjects does the assessment cover?',
    a: 'The assessment covers four core subjects: English (comprehension, grammar, spelling, punctuation), Mathematics (number operations, algebra, geometry, data handling), Verbal Reasoning, and Non-Verbal Reasoning. Together these form the foundation of most UK 11+ and secondary admissions tests.',
  },
  {
    q: 'How does the adaptive difficulty work?',
    a: 'Our AI uses Item Response Theory (IRT) to adjust question difficulty in real time based on your child\'s answers. If they answer correctly, the next question gets slightly harder; if they struggle, it eases back. This gives a far more precise ability estimate than a fixed test.',
  },
  {
    q: 'How long does the assessment take?',
    a: 'Each subject has 15 questions, giving 60 questions in total. Most children complete the full assessment in 25–35 minutes. You can pause between subjects and continue from where you left off.',
  },
  {
    q: 'Do I need to create an account to start?',
    a: "No. You can start immediately with just your child's first name and age. After the assessment you'll see a summary score. To unlock the full subject-by-subject analysis, AI insights, and topic breakdown, simply create a free account.",
  },
  {
    q: 'How accurate is the score?',
    a: 'Our standardised score (mean 100, SD 15) places your child on the same scale used by many UK selective schools and educational psychologists. The adaptive algorithm typically achieves clinically reliable precision in 15 questions per subject.',
  },
  {
    q: 'Can I retake the assessment?',
    a: "Yes. We recommend retaking every 3–6 months to track progress. Each session generates a fresh set of questions using our question bank, so there's no advantage to memorising previous answers.",
  },
]

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Academic Assessment', item: `${BASE_URL}/academic-assessment` },
  ],
}

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/academic-assessment#webpage`,
  url: `${BASE_URL}/academic-assessment`,
  name: 'Free Child Academic Assessment | AI-Powered — Eduentry',
  description: "Measure your child's academic ability across English, Mathematics, Verbal & Non-Verbal Reasoning with our adaptive AI assessment.",
  inLanguage: 'en',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const SUBJECTS = [
  {
    label: 'English',
    icon: '📖',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    topics: ['Comprehension', 'Grammar', 'Spelling', 'Punctuation', 'Vocabulary'],
  },
  {
    label: 'Mathematics',
    icon: '🔢',
    badge: 'bg-green-100 text-green-800',
    border: 'border-green-200',
    topics: ['Number Operations', 'Algebra', 'Geometry', 'Data Handling', 'Fractions'],
  },
  {
    label: 'Verbal Reasoning',
    icon: '💬',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    topics: ['Analogies', 'Word Relationships', 'Sequencing', 'Classification', 'Logic'],
  },
  {
    label: 'Non-Verbal Reasoning',
    icon: '🔷',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    topics: ['Pattern Recognition', 'Shape Sequences', 'Matrix Reasoning', 'Spatial Rotation', 'Odd One Out'],
  },
]

const TIERS = [
  { label: 'Junior', age: 'Ages 6–8', desc: 'Foundation concepts, simple reasoning', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Lower Intermediate', age: 'Ages 9–11', desc: '11+ preparation, core curriculum', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Upper Intermediate', age: 'Ages 12–14', desc: 'Secondary level, advanced reasoning', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Senior', age: 'Ages 15–20', desc: 'GCSE and beyond, extended maths', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function AcademicAssessmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Adaptive AI · 4 Subjects · Ages 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Know Exactly Where Your Child<br />
            <span className="text-[#4F46E5]">Stands Academically</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            An adaptive assessment covering English, Maths, Verbal &amp; Non-Verbal Reasoning — scored on the same standardised scale used by UK selective schools. No account needed, and your progress saves as you go.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-[#6e6e73] mb-5">
            {['Free · no account needed', 'Instant standardised score', 'Pause & resume anytime', 'Ages 6–20'].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {t}
              </span>
            ))}
          </div>
          <GuestAcademicStartForm />
          <p className="mt-1 text-sm text-[#6e6e73]">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </section>

      {/* What the assessment measures */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Four Subjects, One Complete Picture</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-10">
            Most academic tests measure only maths and reading. We go further. Our four-subject design mirrors the structure of the UK 11+ and secondary admissions process, giving you the full picture of your child&apos;s academic profile — strengths, weaknesses, and topic-level gaps — in a single session.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {SUBJECTS.map((s) => (
              <div key={s.label} className={`rounded-2xl border ${s.border} bg-white p-5`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${s.badge}`}>{s.label}</span>
                </div>
                <ul className="space-y-1.5">
                  {s.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Enter Name & Age',
                desc: "No account needed. Just your child's first name and age — that's it. The system calibrates starting difficulty to their age group automatically.",
              },
              {
                step: '2',
                title: 'Adaptive Questions',
                desc: '15 questions per subject. The AI adjusts difficulty in real time using Item Response Theory, zeroing in on your child\'s true ability level efficiently.',
              },
              {
                step: '3',
                title: 'Instant Results',
                desc: 'See an overall standardised score and subject breakdown immediately. Register free to unlock topic-level analysis and personalised AI recommendations.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Calibrated for Every Stage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">What You Walk Away With</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Standardised Score',
                desc: "Your child's overall academic ability on a scale where 100 = age-average, directly comparable to national norms.",
              },
              {
                icon: '🎯',
                title: 'Subject Breakdown',
                desc: 'Individual scores for all four subjects, showing exact strengths and areas for improvement.',
              },
              {
                icon: '🤖',
                title: 'AI Topic Insights',
                desc: 'Topic-level detail (e.g. algebra vs. geometry) and personalised AI recommendations — available after free registration.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg
                    className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to find your child&apos;s academic baseline?</h2>
          <p className="text-indigo-200 mb-6 text-sm">Enter a name and age above — results in under 35 minutes.</p>
          <a
            href="#guest-name"
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Start Free Assessment
          </a>
          <p className="mt-5 text-indigo-200 text-sm">
            Also want to know who your child <em>is</em>, not just how they score?{' '}
            <Link href="/personality-assessment" className="text-white underline hover:text-indigo-100 font-medium">
              Try the 5-minute personality assessment →
            </Link>
          </p>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}

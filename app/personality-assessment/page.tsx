import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/auth/register`

export const metadata: Metadata = {
  title: 'Child Personality Assessment | VIA Character Strengths Test — Eduentry',
  description:
    'Discover your child\'s unique character strengths with our AI-powered, scientifically backed personality assessment. Ages 6–20. Free parent-rated survey. Instant personalised growth report.',
  keywords: [
    'child personality assessment',
    'VIA character strengths test',
    'child strengths and weaknesses',
    'free child personality test',
    'VIA character strengths children',
    'child character assessment online',
    'parenting tools personality',
    'positive psychology child test',
    'child development assessment',
    'AI child personality report',
  ],
  alternates: {
    canonical: `${BASE_URL}/personality-assessment`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/personality-assessment`,
    siteName: 'Eduentry',
    title: 'Child Personality Assessment | VIA Character Strengths Test — Eduentry',
    description:
      'Discover your child\'s unique character strengths with our AI-powered, scientifically backed personality assessment. Ages 6–20. Free parent-rated survey.',
    locale: 'en_GB',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Child Personality Assessment — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Personality Assessment | VIA Character Strengths Test — Eduentry',
    description:
      'Discover your child\'s unique character strengths with our AI-powered, scientifically backed personality assessment. Ages 6–20. Free parent-rated survey.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'Why is this a parent-rated test instead of a test for my child?',
    a: "Children's self-perceptions change rapidly, and younger kids can easily get distracted or misunderstand questionnaire formats. As a parent, your daily observations of their real-world behaviours provide the most stable, accurate baseline for an assessment.",
  },
  {
    q: 'What if my child falls right on the edge of an age tier?',
    a: 'Our system calculates the exact age down to the day using their Date of Birth. The questions are mathematically optimised for that precise developmental bracket. Trust the tier the system assigns!',
  },
  {
    q: 'How often should I retake this assessment for my child?',
    a: 'We recommend retaking the test once every 6 to 12 months or when they transition into a new age tier. This lets you track how their character strengths grow and evolve over time.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/personality-assessment#webpage`,
  url: `${BASE_URL}/personality-assessment`,
  name: 'Child Personality Assessment | VIA Character Strengths Test — Eduentry',
  description: "Discover your child's unique character strengths with our AI-powered, scientifically backed personality assessment. Ages 6–20.",
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

const VIRTUES = [
  {
    label: 'Wisdom',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['Curiosity', 'Creativity', 'Love of Learning', 'Perspective', 'Judgment'],
  },
  {
    label: 'Courage',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['Bravery', 'Perseverance', 'Honesty', 'Zest'],
  },
  {
    label: 'Humanity',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['Love', 'Kindness', 'Social Intelligence'],
  },
  {
    label: 'Justice',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['Teamwork', 'Fairness', 'Leadership'],
  },
  {
    label: 'Temperance',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['Forgiveness', 'Humility', 'Prudence', 'Self-Regulation'],
  },
  {
    label: 'Transcendence',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['Appreciation of Beauty', 'Gratitude', 'Hope', 'Humor', 'Spirituality'],
  },
]

const TIERS = [
  { label: 'Junior', age: 'Ages 6–9', traits: '12 foundational traits', questions: '24 questions', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Intermediate', age: 'Ages 10–13', traits: '15 traits', questions: '30 questions', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Adolescent', age: 'Ages 14–17', traits: '20 traits', questions: '40 questions', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Young Adult', age: 'Ages 18–20', traits: 'All 24 traits', questions: '48 questions', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function PersonalityAssessmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">VIA Character Strengths · Ages 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Discover Your Child&apos;s Unique<br />
            <span className="text-[#4F46E5]">Strengths &amp; Growth Areas</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            An AI-powered, scientifically backed character assessment tailored perfectly to your child&apos;s developmental age.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Start Free Assessment
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Why Character Matters More Than Grades</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            As parents, we often focus entirely on school grades or report cards. But academic scores only tell part of the story. True success and resilience come from a child&apos;s character, emotional habits, and personality strengths. Our assessment helps you look beyond the grades to see who your child is becoming. It highlights what they excel at naturally (their &ldquo;Signature Strengths&rdquo;) and pinpoints the exact areas where they could use a little extra coaching (their &ldquo;Growth Areas&rdquo;).
          </p>
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
                title: 'Smart Age Routing 🗓️',
                desc: "During registration, simply enter your child's Date of Birth. Our system automatically calculates their developmental stage and assigns them to the correct assessment tier.",
              },
              {
                step: '2',
                title: '5-Minute Parent Survey ⭐',
                desc: 'You will answer a series of quick, observation-based, 1-to-5 star questions about behaviours you see every day. No guesswork, no stressful testing for your child.',
              },
              {
                step: '3',
                title: 'AI-Driven Growth Report 🤖',
                desc: 'Our advanced AI analyses your inputs against a globally recognised psychological model to generate a custom, deeply personalised roadmap full of actionable parenting exercises.',
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

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Built on the Gold Standard of Positive Psychology</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Our platform adapts the world-renowned VIA Character Strengths framework, developed by pioneer psychologists Dr. Martin Seligman and Dr. Neal Mayerson. Used in over 190 countries by researchers and educators, this model identifies 24 universal traits grouped under 6 core virtues: Wisdom, Courage, Humanity, Justice, Temperance, and Transcendence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Perfectly Calibrated for Every Stage of Childhood</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">What You Walk Away With</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Top 5 Signature Strengths',
                desc: 'The areas where your child naturally shines.',
              },
              {
                icon: '🌱',
                title: 'Bottom 3 Growth Pillars',
                desc: 'Gentle insights into their blind spots or current weaknesses.',
              },
              {
                icon: '🤖',
                title: 'Actionable AI Toolkit',
                desc: 'Tailored, real-world exercises you can practise at home to help them thrive.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to discover who your child truly is?</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Start Free Assessment
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}

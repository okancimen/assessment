import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'About Eduentry — Free Academic Assessment for Children Ages 6–17',
  description: 'Eduentry provides free adaptive academic assessments for children aged 6–17, benchmarked against UK National Curriculum, PISA, and IB standards. Standardised scores and international percentile rankings.',
  keywords: 'about Eduentry, free children assessment platform, international academic benchmark, adaptive testing children, UK PISA IB benchmark ages 6-17',
  alternates: { canonical: 'https://eduentry.com/about', languages: { 'en-GB': 'https://eduentry.com/about', 'x-default': 'https://eduentry.com/about' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'About Eduentry — Free Academic Assessment for Children Ages 6–17',
    description: 'Free adaptive academic assessments benchmarked against UK, PISA, and IB standards. Standardised scores and international percentile rankings for children aged 6–17.',
    url: 'https://eduentry.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Eduentry — Free Academic Assessment for Children Ages 6–17',
    description: 'Free adaptive academic assessments benchmarked against UK, PISA, and IB standards. Standardised scores and international percentile rankings for children aged 6–17.',
  },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: 'https://eduentry.com/icon.png',
  description: 'Free AI-powered adaptive academic assessment platform for children aged 6–17. Standardised scores and international percentile rankings across English, Maths, Verbal and Non-Verbal Reasoning.',
  foundingDate: '2026',
  areaServed: ['United Kingdom', 'United States', 'Netherlands', 'United Arab Emirates', 'Canada', 'Australia', 'International'],
  sameAs: [],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://eduentry.com/about' },
}

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Eduentry',
  description: 'Eduentry provides free adaptive academic assessments for children aged 6–17, producing standardised scores and international percentile rankings.',
  url: 'https://eduentry.com/about',
  mainEntity: {
    '@type': 'EducationalOrganization',
    name: 'Eduentry',
    url: 'https://eduentry.com',
    description: 'Free AI-powered adaptive academic assessment platform for children aged 6–17. Standardised scores and international percentile rankings across English, Maths, Verbal and Non-Verbal Reasoning.',
    foundingDate: '2026',
    areaServed: ['United Kingdom', 'International'],
    educationalCredentialAwarded: 'Standardised academic assessment report',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Free Academic Assessments',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'English Assessment', description: 'Comprehension, grammar, spelling and punctuation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Mathematics Assessment', description: 'Number operations, algebra, geometry and data handling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Verbal Reasoning Assessment', description: 'Problem-solving using words and critical thinking' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Non-Verbal Reasoning Assessment', description: 'Pattern recognition using shapes and abstract visuals' } },
      ],
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Free for all families
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Free academic assessment<br />
            <span className="text-indigo-600">for every child, everywhere</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Eduentry gives parents a clear, internationally benchmarked picture of where their child stands academically — at no cost, in under 30 minutes.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Every child deserves to know where they stand — not just relative to their classmates, but against children across the UK and internationally. Professional standardised assessments have traditionally been expensive and inaccessible. Eduentry makes this benchmarking free, instant, and available to any family with an internet connection.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Adaptive questions',
                body: 'Our AI generates questions calibrated to your child\'s age and adjusts difficulty in real time based on their responses — the same approach used in PISA and MAP assessments.',
              },
              {
                step: '02',
                title: 'IRT scoring',
                body: 'We use 2-Parameter Logistic Item Response Theory (2PL IRT) to produce a standardised score (mean 100, SD 15) that is statistically comparable across age groups and test sessions.',
              },
              {
                step: '03',
                title: 'International benchmarks',
                body: 'Scores are mapped to percentiles based on UK National Curriculum, PISA, US Common Core, and IB frameworks — so you can see exactly where your child stands globally.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="space-y-3">
                <div className="text-3xl font-bold text-indigo-200">{step}</div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Four subjects, one complete picture</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { slug: 'english', label: 'English', desc: 'Comprehension, grammar, spelling, punctuation and vocabulary — aligned to UK KS1–KS4 and Cambridge IGCSE.' },
              { slug: 'maths', label: 'Mathematics', desc: 'Number operations, algebra, geometry, fractions and data handling — benchmarked to PISA numeracy.' },
              { slug: 'verbal-reasoning', label: 'Verbal Reasoning', desc: 'Analogies, word relationships, sequencing and logic — tested in 11+, grammar school, and independent school entrance exams.' },
              { slug: 'non-verbal-reasoning', label: 'Non-Verbal Reasoning', desc: 'Pattern recognition, matrices, sequences and spatial reasoning — assesses problem-solving independent of language.' },
            ].map(({ slug, label, desc }) => (
              <Link key={slug} href={`/subjects/${slug}`} className="group border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{label} →</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Built on proven science</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Assessment questions are generated by <strong className="text-gray-800">Claude AI</strong> (Anthropic), constrained to the exact topic, difficulty level, and age range determined by our IRT engine. Each question is calibrated in real time — when a child answers correctly, the next question is harder; when they struggle, it becomes easier.
            </p>
            <p>
              This adaptive approach means shorter tests with greater statistical precision. A typical Eduentry assessment takes 20–30 minutes across four subjects and produces a score as reliable as a 90-minute fixed-format test.
            </p>
            <p>
              Read more about our scoring methodology on the <Link href="/methodology" className="text-indigo-600 hover:underline">Methodology page</Link>.
            </p>
          </div>
        </section>

        {/* Ages */}
        <section className="mb-16 border border-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ages 6–17</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Eduentry adapts to children across all primary and secondary school years. Questions are generated for the appropriate UK Key Stage or international year level:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            {[
              { range: 'Ages 6–7', label: 'KS1 / Year 1–2' },
              { range: 'Ages 8–10', label: 'KS2 / Year 3–5' },
              { range: 'Ages 11–13', label: 'KS3 / Year 7–9' },
              { range: 'Ages 14–16', label: 'KS4 / Year 10–11' },
            ].map(({ range, label }) => (
              <div key={range} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="font-semibold text-gray-900">{range}</div>
                <div className="text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start your child&rsquo;s free assessment</h2>
          <p className="text-indigo-200 mb-8 text-lg">Takes 20–30 minutes. No payment required. Results immediately.</p>
          <Link href="/auth/register" prefetch={false} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Get started free
          </Link>
        </section>

      </main>

      <PublicFooter />
    </div>
  )
}

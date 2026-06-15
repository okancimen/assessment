import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'Assessment Methodology — How Eduentry Works',
  description: 'How Eduentry measures academic ability: 2PL Item Response Theory, MAP estimation, standardised scoring (mean 100, SD 15), and international benchmarking against UK, PISA, US and IB frameworks.',
  keywords: 'Item Response Theory children, IRT adaptive assessment, standardised score children, MAP estimation, educational benchmarking methodology, adaptive testing UK',
  alternates: { canonical: 'https://eduentry.com/methodology', languages: { 'en-GB': 'https://eduentry.com/methodology', 'x-default': 'https://eduentry.com/methodology' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'How Eduentry Works — IRT Adaptive Assessment Methodology',
    description: '2PL Item Response Theory, MAP estimation, standardised scoring (mean 100, SD 15) and international benchmarking against UK National Curriculum, PISA, US and IB frameworks.',
    url: 'https://eduentry.com/methodology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Eduentry Works — IRT Adaptive Assessment Methodology',
    description: '2PL Item Response Theory, MAP estimation and international benchmarking against UK, PISA, US and IB frameworks. Ages 6–17.',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://eduentry.com/methodology' },
  ],
}

const METHODOLOGY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eduentry Assessment Methodology',
  description: 'Technical explanation of how Eduentry uses Item Response Theory to produce standardised academic scores and international percentile rankings for children aged 6–17.',
  url: 'https://eduentry.com/methodology',
  datePublished: '2026-01-01',
  dateModified: '2026-06-01',
  image: 'https://eduentry.com/methodology/opengraph-image',
  author: { '@type': 'Organization', name: 'Eduentry', url: 'https://eduentry.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Eduentry',
    url: 'https://eduentry.com',
    logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.jpg' },
  },
  about: [
    { '@type': 'Thing', name: 'Item Response Theory' },
    { '@type': 'Thing', name: 'Adaptive Testing' },
    { '@type': 'Thing', name: 'Standardised Scoring' },
    { '@type': 'Thing', name: 'International Academic Benchmarking' },
  ],
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(METHODOLOGY_SCHEMA) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Methodology</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Eduentry&rsquo;s Adaptive Assessment Works</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Eduentry uses the same psychometric methodology as professional cognitive assessments —
            Item Response Theory with adaptive questioning — to produce accurate, internationally
            comparable scores for children aged 6–17.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-12">

          {/* Adaptive Testing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Testing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike a fixed test where every child answers the same questions, Eduentry adapts in real time.
              After each answer, the system updates its estimate of the child&apos;s ability level and selects
              the next question to provide maximum measurement precision at that level.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This means a child who answers correctly receives harder questions; a child who struggles
              receives easier ones. The result: fewer questions are needed to achieve the same measurement
              accuracy as a traditional fixed-length test.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="text-sm font-semibold text-indigo-700 mb-2">Key benefit</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A 15-question adaptive test can match the accuracy of a 100 question fixed test,
                because every question is chosen to be maximally informative for that specific child.
              </p>
            </div>
          </section>

          {/* IRT */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Response Theory (IRT)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eduentry uses the <strong>2-Parameter Logistic (2PL) IRT model</strong> — the same model
              used by PISA, large-scale standardised assessments, and professional educational psychologists.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each question has two parameters:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                <span className="text-gray-600"><strong className="text-gray-800">Difficulty (b)</strong> — the ability level at which a child has a 50% probability of answering correctly.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                <span className="text-gray-600"><strong className="text-gray-800">Discrimination (a)</strong> — how well the question differentiates between children just below and just above the difficulty threshold.</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Ability estimation uses <strong>Maximum A Posteriori (MAP) estimation</strong> with a
              standard normal prior. After each response, the posterior distribution over ability is
              updated using Bayes&apos; theorem, and the MAP estimate is taken as the current ability estimate.
            </p>
          </section>

          {/* Scoring Scale */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scoring Scale</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Raw IRT ability estimates (θ) are transformed to a standardised scale with
              <strong> mean 100 and standard deviation 15</strong> — the same scale used by
              CAT4, the 11+ standardised tests, and professional cognitive assessments such as
              WISC and WASI.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Score Range</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Band</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Percentile</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">SD from Mean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-emerald-50">
                    <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                    <td className="py-3 px-4 text-emerald-700">Exceptional</td>
                    <td className="py-3 px-4 text-gray-600">90th+</td>
                    <td className="py-3 px-4 text-gray-600">+1.33σ and above</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-3 px-4 font-semibold text-blue-700">110–119</td>
                    <td className="py-3 px-4 text-blue-700">Above Average</td>
                    <td className="py-3 px-4 text-gray-600">75th–90th</td>
                    <td className="py-3 px-4 text-gray-600">+0.67σ to +1.33σ</td>
                  </tr>
                  <tr className="bg-indigo-50">
                    <td className="py-3 px-4 font-semibold text-indigo-700">95–109</td>
                    <td className="py-3 px-4 text-indigo-700">Average</td>
                    <td className="py-3 px-4 text-gray-600">37th–73rd</td>
                    <td className="py-3 px-4 text-gray-600">−0.33σ to +0.67σ</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="py-3 px-4 font-semibold text-amber-700">85–94</td>
                    <td className="py-3 px-4 text-amber-700">Below Average</td>
                    <td className="py-3 px-4 text-gray-600">16th–37th</td>
                    <td className="py-3 px-4 text-gray-600">−1σ to −0.33σ</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-3 px-4 font-semibold text-red-700">Below 85</td>
                    <td className="py-3 px-4 text-red-700">Needs Support</td>
                    <td className="py-3 px-4 text-gray-600">Below 16th</td>
                    <td className="py-3 px-4 text-gray-600">Below −1σ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              68% of children score between 85 and 115 (within ±1 standard deviation of the mean).
            </p>
          </section>

          {/* International Benchmarks */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Benchmarks</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eduentry maps each score band to four internationally recognised educational frameworks,
              giving families a global context for their child&apos;s performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  flag: '🇬🇧',
                  name: 'UK National Curriculum',
                  detail: 'Scores map to: below expected standard / approaching / meeting / above expected / highly able. Competitive grammar school scores are typically 115+.',
                  color: 'border-blue-100 bg-blue-50',
                },
                {
                  flag: '🇺🇸',
                  name: 'US Grade Levels',
                  detail: 'Scores map to: below / approaching / at / above / significantly above grade level, aligned to Common Core and NAEP proficiency descriptors.',
                  color: 'border-violet-100 bg-violet-50',
                },
                {
                  flag: '🌍',
                  name: 'PISA (OECD)',
                  detail: 'Scores map to PISA proficiency Levels 1–6. Average OECD performance corresponds to approximately Level 3, equivalent to a standardised score near 100.',
                  color: 'border-emerald-100 bg-emerald-50',
                },
                {
                  flag: '🎓',
                  name: 'IB Programme',
                  detail: 'Scores indicate readiness for IB Middle Years Programme, IB Standard Level, or IB Higher Level subjects in the Diploma Programme.',
                  color: 'border-amber-100 bg-amber-50',
                },
              ].map(({ flag, name, detail, color }) => (
                <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{flag}</span>
                    <span className="font-semibold text-gray-800 text-sm">{name}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What You Learn from the Results */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Learn from the Results</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike a traditional school test that grades a child against a local cohort, a student and their parent
              who complete the Eduentry assessment will receive a comprehensive results screen and a printable report
              showing exactly where the child stands globally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-medium">Here is exactly what they will learn from the results:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>Standardised Score and Performance Category</strong> — a score on the mean-100, SD-15 scale,
                  placed into one of five bands: Needs Support (70–84), Below Average (85–94), Average (95–109),
                  Above Average (110–119), or Exceptional (120+).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>Global Percentile Ranking</strong> — how the child performs compared to same-age peers
                  worldwide, expressed as a percentile (e.g. top 10%, top 25%).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>Detailed Subject Breakdowns</strong> — individual scores and performance bands for
                  English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning, so parents and children can
                  see exactly where strengths and gaps lie.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>International Benchmarking</strong> — the score mapped to UK National Curriculum levels,
                  US grade-level equivalents, PISA proficiency levels, and IB programme readiness.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
                </span>
                <span className="text-gray-700 leading-relaxed">
                  <strong>AI-Generated Personalised Recommendations</strong> — targeted study recommendations
                  based on the child&apos;s specific performance profile, highlighting the areas most likely to
                  improve their overall score.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Together, these five outputs give families a clear picture of their child&apos;s global standing,
              specific weaknesses, and actionable steps to improve — all from a single 90-minute assessment.
            </p>
          </section>

          {/* Subjects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Assessed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'English', icon: '📚', detail: 'Reading comprehension, grammar, vocabulary, spelling, and written language conventions.' },
                { name: 'Mathematics', icon: '🔢', detail: 'Arithmetic, algebra, geometry, statistics, and mathematical problem-solving.' },
                { name: 'Verbal Reasoning', icon: '💬', detail: 'Word analogies, classifications, logical sequences, and language-based problem solving.' },
                { name: 'Non-Verbal Reasoning', icon: '🔷', detail: 'Pattern recognition, spatial reasoning, matrix completion, and visual logic.' },
              ].map(({ name, icon, detail }) => (
                <div key={name} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{icon}</span>
                    <span className="font-semibold text-gray-800">{name}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Transparency */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Eduentry offers a robust and adaptive approach to student assessment, generating results that
                provide an accurate representation of each learner&apos;s academic capabilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Traditional assessments are often limited by fixed question sets, where performance can be
                unduly affected by the difficulty level of the questions rather than the student&apos;s actual
                ability. Eduentry addresses this limitation through an AI-driven adaptive engine that
                continuously adjusts question difficulty based on each student&apos;s responses, ensuring that
                outcomes reflect true academic potential rather than the structure of the test itself. This
                produces a consistent, fair, and meaningful measure of each learner&apos;s strengths and
                developmental needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While Eduentry&apos;s methodology differs from CAT4, GL Assessment, and WISC, its results
                serve as a reliable and actionable basis for educational planning and decision-making. In cases
                where formal diagnostic evaluation is required, Eduentry functions as a valuable complement to
                established psychometric assessment tools.
              </p>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-indigo-50 rounded-2xl border border-indigo-100 p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">See your child&apos;s percentile ranking</h2>
          <p className="text-gray-500 mb-6">Free assessment · Ages 6–17 · Results in 90 minutes</p>
          <Link href="/auth/register" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
            Start Free Assessment
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, SUBJECTS } from '@/types'
import BellCurve from '@/components/landing/BellCurve'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from '@/app/blog/posts'
import CtaLink from '@/components/ui/CtaLink'

export const metadata: Metadata = {
  title: 'Eduentry — Academic Assessment & Internship Readiness Platform',
  description:
    'Free adaptive assessments for students at every stage — international academic benchmarking for ages 6–17, and internship readiness assessment for high school students 14+.',
  alternates: { canonical: 'https://eduentry.com', languages: { 'en-GB': 'https://eduentry.com', 'x-default': 'https://eduentry.com' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: 'https://eduentry.com',
    title: 'Eduentry — Academic Assessment & Internship Readiness Platform',
    description:
      'Free adaptive assessments built on the same science as PISA, GCSE and SAT. Academic benchmarking for ages 6–17 and internship readiness for high school students 14+.',
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Eduentry free to use?', acceptedAnswer: { '@type': 'Answer', text: "Yes, Eduentry is completely free. There are no subscriptions, hidden fees, or premium tiers." } },
    { '@type': 'Question', name: 'What subjects does the assessment cover?', acceptedAnswer: { '@type': 'Answer', text: "English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning. Each subject has 15 adaptive questions." } },
    { '@type': 'Question', name: 'What is a percentile ranking?', acceptedAnswer: { '@type': 'Answer', text: "A percentile ranking shows how your child compares to all other children of the same age." } },
    { '@type': 'Question', name: 'How long does the assessment take?', acceptedAnswer: { '@type': 'Answer', text: "The full assessment is 60 questions across 4 subjects. Most children complete it in 60–90 minutes." } },
  ],
}

const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  description: 'Free AI-powered adaptive assessments for students aged 6 and above.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free — no subscription required' },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  sameAs: [],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:            { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:        { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:   { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning:{ border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const subjectSlugs: Record<string, string> = {
  english: 'english',
  mathematics: 'maths',
  verbal_reasoning: 'verbal-reasoning',
  nonverbal_reasoning: 'non-verbal-reasoning',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-[0.15em] mb-6">
            Assessments for every stage of learning
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            The right assessment,
            <br />
            <span className="text-[#4F46E5]">at the right stage.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Free adaptive assessments built on the same science as PISA, GCSE and SAT.
          </p>

          {/* Two product cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#86868b] font-medium uppercase tracking-[0.12em] mb-6">
                Academic Assessment
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                How does your child compare globally?
              </h2>
              <p className="text-[#86868b] text-sm leading-relaxed mb-8 flex-1">
                Benchmarked against UK, US, PISA and IB standards — standardised scores and percentile
                rankings across English, Maths, Verbal and Non-Verbal Reasoning.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#6e6e73] mb-8">
                <span>60 adaptive questions</span>
                <span>·</span>
                <span>4 subjects</span>
                <span>·</span>
                <span>Ages 6–17</span>
                <span>·</span>
                <span>Free</span>
              </div>
              <CtaLink
                href="/auth/register"
                label="hero_academic"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                Start free assessment
              </CtaLink>
              <Link href="#academic" className="text-center text-xs text-[#6e6e73] hover:text-[#86868b] transition-colors mt-4">
                Learn more ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  Internship Assessment
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  New
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                Is your student ready for the workplace?
              </h2>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-8 flex-1">
                A 34-question adaptive assessment across aptitude, domain knowledge, workplace skills,
                and interest profile. Personalised readiness report and AI career insights.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#6e6e73] mb-8">
                <span>34 adaptive questions</span>
                <span>·</span>
                <span>4 career tracks</span>
                <span>·</span>
                <span>Ages 14+</span>
                <span>·</span>
                <span>Free</span>
              </div>
              <Link
                href="/internship"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Learn about the programme
              </Link>
              <Link href="#internship" className="text-center text-xs text-[#4F46E5]/60 hover:text-[#4F46E5] transition-colors mt-4">
                Learn more ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#6e6e73] tracking-wide">
          Built on the same science as PISA, GCSE &amp; SAT &nbsp;·&nbsp; GDPR-compliant &nbsp;·&nbsp; Free
        </p>
      </section>

      {/* ── Social proof ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We used Eduentry before my daughter's 11+ exam. The verbal reasoning score flagged exactly where she needed more practice — she got into her first choice grammar school.",
                name: 'Rachel T.',
                role: 'Parent, London',
                product: 'Academic Assessment',
              },
              {
                quote: "I didn't realise how strong my son was at maths relative to his international peers. The percentile ranking gave us real context that school grades simply don't provide.",
                name: 'Marcus O.',
                role: 'Parent, Manchester',
                product: 'Academic Assessment',
              },
              {
                quote: "The internship report told me my aptitude was strongest in Data Analytics, which I'd never really considered. I applied for a placement in that track and got it.",
                name: 'Aisha P.',
                role: 'Year 12 Student, Birmingham',
                product: 'Internship Assessment',
              },
              {
                quote: "My son is only 9 but I wanted to know where he stood internationally before secondary school. The PISA benchmarking was exactly what I needed — clear, no-nonsense, and completely free.",
                name: 'Daniel F.',
                role: 'Parent, Edinburgh',
                product: 'Academic Assessment',
              },
              {
                quote: "The non-verbal reasoning score was the biggest surprise. My daughter had never been formally tested on spatial reasoning — seeing she was in the 88th percentile gave us real confidence going into school selection.",
                name: 'Priya K.',
                role: 'Parent, Bristol',
                product: 'Academic Assessment',
              },
              {
                quote: "I used the internship assessment as part of my UCAS prep. The AI summary gave me specific language for my personal statement — my school counsellor said it was one of the strongest she'd seen.",
                name: 'Tom W.',
                role: 'Year 13 Student, Leeds',
                product: 'Internship Assessment',
              },
            ].map(({ quote, name, role, product }) => (
              <div key={name} className="bg-[#f5f5f7] rounded-3xl p-7 flex flex-col gap-5">
                <svg className="w-6 h-6 text-[#4F46E5] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-[#1d1d1f] leading-relaxed flex-1">{quote}</p>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{name}</p>
                  <p className="text-xs text-[#6e6e73]">{role}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold text-[#4F46E5] bg-[#eef2ff] px-2 py-0.5 rounded-full">{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic section header + sample result ───────────────────── */}
      <section id="academic" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">Academic Assessment · Ages 6–17</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                See where your child<br />stands internationally.
              </h2>
              <p className="text-[#6e6e73] text-lg leading-relaxed mb-8 max-w-lg">
                A free adaptive benchmark measuring English, Maths, Verbal and Non-Verbal Reasoning
                against UK, US, PISA and IB standards. Results include a standardised score,
                percentile ranking, and AI-generated recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/auth/register"
                  label="academic_section_cta"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Start free assessment
                </CtaLink>
                <Link href="/methodology" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  How scoring works →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              {/* Score card */}
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Sample result</p>
                    <p className="font-bold text-white mt-1">Emma · Age 11</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Above Average</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'English',              score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Mathematics',          score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Verbal Reasoning',     score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'Non-Verbal Reasoning', score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#86868b] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#6e6e73]">Powered by</span>
                  <span className="text-[10px] font-semibold text-[#86868b]">Claude AI · Anthropic</span>
                </div>
              </div>

              {/* Bell curve */}
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Four subjects. One global picture.
            </h2>
            <p className="text-[#6e6e73] max-w-xl mx-auto text-lg">
              The four domains tested by PISA, TIMSS, and the UK and US national curricula —
              each adapting in difficulty to pinpoint your child&apos;s exact level.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <Link
                  key={subject}
                  href={`/subjects/${subjectSlugs[subject]}`}
                  className="rounded-3xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: c.accent + '22' }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS[subject]}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{SUBJECT_DESCRIPTIONS[subject]}</p>
                  <span className="text-xs font-semibold mt-4 block" style={{ color: c.accent }}>Learn more →</span>
                </Link>
              )
            })}
          </div>
          {/* 11+ callout */}
          <div className="mt-8 bg-[#f5f3ff] rounded-3xl border border-[#ddd6fe] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-2">11+ &amp; Grammar School Preparation</p>
              <h3 className="font-bold text-[#1d1d1f] text-lg mb-1">Preparing for the 11+?</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed max-w-lg">
                The four subjects directly mirror the 11+ exam structure used by grammar schools in England.
                Eduentry gives you a real benchmark — standardised scores, not just right and wrong.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap">
              <Link href="/11-plus" className="bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6D28D9] transition-colors whitespace-nowrap">
                11+ guide →
              </Link>
              <Link href="/grammar-schools" className="border border-[#ddd6fe] text-[#7C3AED] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#f5f3ff] transition-colors whitespace-nowrap">
                Grammar schools →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="methodology" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-[0.15em] mb-5">The science behind the score</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Built on the same science as
              <br />international assessments.
            </h2>
            <p className="text-[#6e6e73] max-w-2xl mx-auto text-lg">
              Eduentry uses the same psychometric models that power PISA, GCSE and SAT —
              so your child&apos;s results are directly comparable to international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: '2-Parameter IRT Model',
                desc: 'Each question has a calibrated difficulty and discrimination value. Scores reflect the difficulty of questions answered correctly — not just the raw count.',
                tag: 'Used in PISA · SAT · GCSE',
                color: '#4F46E5',
              },
              {
                title: 'Real-time Adaptive Algorithm',
                desc: 'Questions are selected using Fisher Information to maximise measurement precision. Each answer updates the ability estimate and selects the optimal next question.',
                tag: 'Computerised Adaptive Testing',
                color: '#0D9488',
              },
              {
                title: 'International Benchmarking',
                desc: "Scores use the same mean-100, SD-15 scale as PISA. Results are mapped to UK National Curriculum, US grade expectations, PISA proficiency tiers, and IB readiness.",
                tag: 'UK · US · PISA · IB',
                color: '#7C3AED',
              },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">What the score means</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Needs Support',  color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'Below Average',  color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Average',        color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Above Average',  color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Exceptional',    color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6e6e73] text-center mt-4">
              68% of children score between 85–115 (within 1 standard deviation of the mean)
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#6e6e73] uppercase tracking-[0.15em] mb-5">Academic Assessment · Simple to start</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              From signup to results
              <br />in under two hours.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Create a free account',
                desc: "Register as a parent and add your child's name and date of birth. The assessment automatically adapts to their exact age.",
              },
              {
                step: '02',
                title: 'Your child takes 4 adaptive tests',
                desc: '60 questions across four subjects, taken at home at their own pace. Each question adapts — harder for correct answers, easier for wrong ones.',
              },
              {
                step: '03',
                title: 'See the global context',
                desc: 'Standardised scores, international benchmarks across UK, US, PISA and IB frameworks, AI-generated recommendations, and a printable report.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink
              href="/auth/register"
              label="how_it_works_cta"
              className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Start free assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ───────────────────────────────────────────── */}
      <section id="internship" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Internship Assessment · New
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Find your internship readiness.
            </h2>
            <p className="text-[#6e6e73] text-lg max-w-2xl mx-auto leading-relaxed">
              A 34-question adaptive assessment for high school students aged 14+. Discover your aptitude,
              domain strengths, workplace skills, and ideal career track — with a personalised AI report.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Create a free student account',
                desc: 'Register yourself or accept a parent invite. Fill in your school, year group, career track preferences, and a short personal statement about your goals.',
              },
              {
                step: '02',
                title: 'Complete 4 assessment phases',
                desc: 'General aptitude, domain knowledge, workplace skills (SJT), and interest profile — 34 adaptive questions in total. Fully resumable, takes around 35 minutes.',
              },
              {
                step: '03',
                title: 'Receive your readiness report',
                desc: 'Get your internship-ready tier, an AI-generated summary of your strengths, and personalised phase insights across aptitude, domain, and workplace skills.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Track pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Technology', color: '#4F46E5' },
              { label: 'Business', color: '#0D9488' },
              { label: 'Data Analytics', color: '#7C3AED' },
              { label: 'Digital Marketing', color: '#DB2777' },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="text-xs font-semibold px-4 py-2 rounded-full border"
                style={{ color, background: color + '12', borderColor: color + '33' }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/internship"
              className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Learn about the programme →
            </Link>
          </div>

        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-[0.15em] text-center mb-14">What you get</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Academic */}
            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider mb-5">Academic Assessment</p>
              <ul className="space-y-3">
                {[
                  'Standardised score on an 85–130 scale',
                  'Percentile ranking by exact age',
                  'Per-subject breakdown across 4 subjects',
                  'International benchmarks — UK, US, PISA, IB',
                  'AI-generated study recommendations',
                  'Printable full report',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#86868b]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/auth/register" label="what_you_get_academic" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  Start free →
                </CtaLink>
              </div>
            </div>

            {/* Internship */}
            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">Internship Assessment</p>
              <ul className="space-y-3">
                {[
                  'Readiness tier — Internship Ready / Developing / Needs Support',
                  'AI-generated career summary paragraph',
                  'Per-phase insights — aptitude, domain, workplace skills',
                  'Career track match across 4 tracks',
                  'Personalised strengths and growth areas',
                  'Report you can reference in university applications',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#6e6e73]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <Link href="/internship" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  Learn more →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">Questions.</h2>
          </div>
          <div className="space-y-2">
            {[
              { q: 'Is Eduentry free to use?', a: "Yes, completely free. No subscriptions, hidden fees, or premium tiers. Create a free account, add your child's profile, and start the assessment at no cost." },
              { q: 'What subjects does the academic assessment cover?', a: "English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry, problem-solving), Verbal Reasoning (analogies, classifications, sequences), and Non-Verbal Reasoning (patterns, spatial reasoning, matrices). Each subject has 15 adaptive questions." },
              { q: 'What is a percentile ranking?', a: "A percentile ranking shows how your child compares to all other children of the same age. A score in the 80th percentile means your child performed better than 80% of children at that age level. Eduentry uses a standardised scale with a mean of 100 and a standard deviation of 15 — the same scale used by PISA and most professional assessments." },
              { q: 'What is the internship assessment?', a: "A separate 34-question adaptive assessment for high school students aged 14+. It evaluates general aptitude, domain knowledge, workplace skills, and interest profile across four career tracks: Technology, Business, Data Analytics, and Digital Marketing. Results include a personalised readiness report and AI-generated career insights." },
              { q: 'Can I use Eduentry to prepare for the 11+?', a: "Yes. The four subjects — English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning — directly mirror the 11+ exam structure used by grammar schools in England. Eduentry gives you a standardised score and percentile ranking so you know exactly where your child stands before sitting the real exam." },
              { q: 'What score is considered good?', a: "A score of 100 is exactly average. 95–109 is the average range, 110–119 is Above Average, and 120+ is Exceptional. For 11+ grammar school entry, competitive scores are typically 115 and above — though the most selective schools in areas like London require 127+. The full score guide is shown in the Methodology section." },
              { q: 'How long does each assessment take?', a: "The academic assessment is 60 questions across 4 subjects — most children complete it in 60–90 minutes. The internship assessment is 34 questions — most students finish in around 35 minutes. Progress is automatically saved so both can be paused and resumed at any time." },
              { q: 'How does the adaptive technology work?', a: "Eduentry uses 2-Parameter Logistic (2PL) Item Response Theory with MAP estimation — the same model used in PISA, GCSE, and SAT. After each answer, the system updates its estimate of the student's ability and selects the next question to maximise measurement precision." },
              { q: 'Can I add more than one child?', a: "Yes. A single parent account supports multiple child profiles. Each child has their own assessment history, scores, and personalised recommendations. There is no limit on the number of children you can add." },
              { q: "Is my data private?", a: "Yes. All data is stored securely with row-level security — only you can access your results. We do not sell or share data with any third parties. The service is fully GDPR-compliant." },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#6e6e73] leading-relaxed border-t border-[#f5f5f7] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#6e6e73] mt-8">
            Want to understand the scoring methodology?{' '}
            <Link href="/methodology" className="text-[#4F46E5] hover:underline font-medium">
              Read how Eduentry works →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">Latest from the blog</h2>
            <Link href="/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#6e6e73]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-widest mb-4">Academic Assessment</p>
            <h2 className="text-2xl font-bold text-white mb-3">Discover where your child stands — globally.</h2>
            <p className="text-[#86868b] text-sm mb-8">Full international context in under 2 hours.</p>
            <CtaLink
              href="/auth/register"
              label="bottom_cta_academic"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Start free assessment →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Internship Assessment</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Find your student&apos;s internship readiness.</h2>
            <p className="text-[#6e6e73] text-sm mb-8">Personalised report and AI insights in 35 minutes.</p>
            <Link
              href="/internship"
              className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors"
            >
              Learn about the programme →
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}

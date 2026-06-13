import type { Metadata } from 'next'
import Link from 'next/link'
import { SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, SUBJECTS } from '@/types'
import BellCurve from '@/components/landing/BellCurve'
import Logo from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Eduentry — International Academic Benchmark for Children | Ages 6–17',
  description:
    'Free adaptive assessment that shows how your child compares to international education standards — UK National Curriculum, US grade levels, PISA and IB benchmarks. Ages 6–17.',
  alternates: { canonical: 'https://eduentry.com' },
  openGraph: {
    url: 'https://eduentry.com',
    title: 'Eduentry — International Academic Benchmark for Children',
    description:
      "See where your child stands globally. A free adaptive test benchmarked against UK, US, PISA and IB standards for ages 6–17.",
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Eduentry free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Eduentry is completely free. There are no subscriptions, hidden fees, or premium tiers. Create a free account, add your child's profile, and start the assessment at no cost.",
      },
    },
    {
      '@type': 'Question',
      name: 'What subjects does the assessment cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The assessment covers four subjects: English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry, problem-solving), Verbal Reasoning (analogies, classifications, sequences), and Non-Verbal Reasoning (patterns, spatial reasoning, matrices). Each subject has 15 adaptive questions.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a percentile ranking and what does it mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A percentile ranking shows how your child compares to all other children of the same age. A score in the 80th percentile means your child performed better than 80% of children at that age level. Eduentry uses a standardised scale with mean 100 and standard deviation 15 — the same scale used by professional cognitive assessments.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the score compare to international education systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every score is mapped against four international frameworks: the UK National Curriculum (including 11+ and GCSE readiness), US grade-level expectations, PISA proficiency levels, and IB programme readiness. A score of 110, for example, places a child above the expected standard in the UK and above grade level in the US — context that is difficult to get from a single school test.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Eduentry different from a school test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "School tests give every child the same questions and are graded against a local cohort. Eduentry adapts in real time and benchmarks results against international standards — showing not just how your child is doing at school, but how they compare to children in the UK, US, and globally.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Eduentry different from CAT4 or GL Assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CAT4 and GL Assessment are professionally normed tests administered in schools with large calibration populations. Eduentry uses the same IRT methodology and scoring scale, but questions are AI-generated rather than empirically calibrated. Eduentry is free and available to any family instantly — CAT4 and GL tests require school administration and cost money. Eduentry results are best used as an indicative guide, not a formal diagnostic.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the adaptive technology work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Eduentry uses 2-Parameter Logistic (2PL) Item Response Theory with Maximum A Posteriori (MAP) estimation. Each question has a difficulty and discrimination parameter. After each answer, the system updates its estimate of the child's ability and selects the next question to maximise measurement precision at that ability level. This means fewer questions are needed to achieve the same accuracy as a fixed-length test.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the score comparable to professional educational assessments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The scoring methodology is the same — 2PL Item Response Theory with MAP estimation, mean 100, SD 15 — as assessments used in PISA, GCSE and by professional educational psychologists. Question content is AI-generated and not empirically calibrated with large populations, so results should be treated as indicative rather than diagnostic.",
      },
    },
    {
      '@type': 'Question',
      name: 'What score is considered good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scores are on a standardised scale: below 85 is Needs Support, 85–94 is Below Average, 95–109 is Average, 110–119 is Above Average, and 120 or above is Exceptional. A score of 100 is exactly average. 68% of children score between 85 and 115 (within one standard deviation of the mean). For 11+ grammar school entry, competitive scores are typically 115 and above.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Eduentry to prepare for the 11+ exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The four subjects — English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning — directly mirror the 11+ exam structure used by grammar schools in England. Eduentry gives you a baseline score and percentile ranking, plus personalised recommendations showing which topics to focus on. For 11+ preparation, a standardised score of 115 or above is generally competitive for grammar school entry.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The full assessment is 60 questions across 4 subjects (15 per subject). Most children complete it in 60–90 minutes. You can take breaks between subjects — progress is automatically saved.",
      },
    },
    {
      '@type': 'Question',
      name: 'What age groups is Eduentry suitable for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Eduentry supports children aged 6 to 17. The AI adapts question content and vocabulary to the child's exact age, so a 6-year-old and a 17-year-old receive age-appropriate questions even within the same subject.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often can my child take the assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can run a new assessment at any time. We recommend waiting at least 4–6 weeks between assessments to allow meaningful progress to develop. Each assessment produces a new set of AI-generated questions, so repetition does not give an unfair advantage.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do the personalised recommendations include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "After the assessment, you can generate AI-powered personalised study recommendations for each subject. Recommendations are based on your child's topic-level performance — identifying specific weak areas and suggesting targeted activities, resources, and practice approaches tailored to your child's age and ability level.",
      },
    },
    {
      '@type': 'Question',
      name: "Is my child's data private?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Data is stored securely via Supabase with row-level security — only you can see your child's results. We do not sell or share data with third parties.",
      },
    },
  ],
}

const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  description: 'Free AI-powered adaptive assessment for children aged 6–17. Provides percentile rankings and standardised scores benchmarked against UK National Curriculum, PISA, US grade levels, and IB Programme.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free — no subscription required',
  },
  featureList: [
    'Adaptive questioning using Item Response Theory',
    'Standardised scores (mean 100, SD 15)',
    'Percentile rankings',
    'UK National Curriculum benchmarking',
    'PISA international benchmarking',
    'IB Programme readiness assessment',
    'AI-generated personalised study recommendations',
    'Four subjects: English, Maths, Verbal Reasoning, Non-Verbal Reasoning',
    'Ages 6–17',
  ],
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to assess your child with Eduentry',
  description: 'Get a free international academic benchmark for your child in four steps.',
  totalTime: 'PT90M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'GBP', value: '0' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Create a free account',
      text: 'Sign up at eduentry.com with your email address. No payment required.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: "Add your child's profile",
      text: "Enter your child's name and date of birth. Eduentry uses the age to calibrate question difficulty and vocabulary appropriately.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Complete the adaptive assessment',
      text: 'Your child answers 15 adaptive questions per subject across English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning. The assessment takes 60–90 minutes and can be paused between subjects.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'View percentile rankings and international benchmarks',
      text: 'Instantly receive standardised scores, percentile rankings, and benchmarks against UK National Curriculum, US grade levels, PISA, and IB Programme standards.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Generate personalised study recommendations',
      text: 'Request AI-generated recommendations showing exactly which topics to focus on for each subject based on your child\'s performance.',
    },
  ],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  description: 'Free adaptive assessment benchmarked against UK, US, PISA and IB standards for children aged 6–17.',
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: 'https://eduentry.com/logo.jpg',
  description: 'Free international academic benchmark for children aged 6–17, measuring performance against UK, US, PISA and IB standards.',
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

const EDUCATIONAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  description: 'Free AI-powered adaptive assessment platform providing percentile rankings and standardised scores for children aged 6–17 against international benchmarks.',
  teaches: [
    'English Language',
    'Mathematics',
    'Verbal Reasoning',
    'Non-Verbal Reasoning',
  ],
  educationalLevel: 'Ages 6–17',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'children aged 6 to 17',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free adaptive academic assessment with international benchmarking and percentile rankings',
  },
}

const subjectIcons: Record<string, string> = {
  english: '📚',
  mathematics: '🔢',
  verbal_reasoning: '💬',
  nonverbal_reasoning: '🔷',
}

const subjectColors: Record<string, string> = {
  english: 'bg-blue-50 border-blue-100',
  mathematics: 'bg-violet-50 border-violet-100',
  verbal_reasoning: 'bg-emerald-50 border-emerald-100',
  nonverbal_reasoning: 'bg-amber-50 border-amber-100',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EDUCATIONAL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-4">
            <Link href="/methodology" className="text-sm text-gray-500 hover:text-gray-900 font-medium hidden sm:block">
              Methodology
            </Link>
            <Link href="/auth/login" prefetch={false} className="text-sm text-gray-600 hover:text-gray-900 font-medium hidden sm:block">
              Sign in
            </Link>
            <Link href="/auth/register" prefetch={false} className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors">
              Get started free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-indigo-500 rounded-full inline-block animate-pulse" />
          International academic benchmarking · Ages 6–17
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
          How does your child compare{' '}
          <span className="text-indigo-600">to the world?</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          A free adaptive assessment benchmarked against UK, US, PISA and IB standards —
          so you know exactly where your child stands, not just in their class, but internationally.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <Link href="/auth/register" prefetch={false} className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100">
            Start free assessment
          </Link>
          <Link href="#methodology" className="text-gray-600 px-8 py-4 rounded-xl text-base font-semibold hover:text-gray-900 hover:bg-gray-50 transition-colors border border-gray-200">
            How it works
          </Link>
        </div>

        {/* Sample results: score card + bell curve */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_5fr] gap-5 text-left">

          {/* Mock result card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Sample result</p>
                <p className="font-bold text-gray-900 mt-0.5">Emma · Age 11</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-indigo-600">109</div>
                <div className="text-xs text-blue-600 font-semibold">Above Average</div>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                { label: 'English',              score: 103, color: 'bg-blue-500',   pct: 58 },
                { label: 'Mathematics',          score: 119, color: 'bg-violet-500', pct: 90 },
                { label: 'Verbal Reasoning',     score: 113, color: 'bg-emerald-500',pct: 79 },
                { label: 'Non-Verbal Reasoning', score:  91, color: 'bg-amber-500',  pct: 27 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{s.label}</span>
                    <span className="font-semibold text-gray-700">{s.score}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2">
              <span className="text-xs text-gray-400">Powered by</span>
              <span className="text-xs font-semibold text-gray-600">Claude AI · Anthropic</span>
            </div>
          </div>

          {/* Bell curve percentile visualisation */}
          <BellCurve hideScores />

        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gray-100 bg-gray-50 py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500">
          {[
            { icon: '🌍', text: 'Benchmarked against UK, US, PISA & IB standards' },
            { icon: '🏛️', text: 'IRT methodology used in PISA, GCSE & SAT' },
            { icon: '🤖', text: 'Questions generated by Claude AI (Anthropic)' },
            { icon: '🔒', text: 'GDPR-compliant · Data never sold' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Four subjects, one global picture</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The four domains tested by PISA, TIMSS, and the UK and US national curricula —
              each adapting in difficulty question by question to pinpoint your child&apos;s exact level.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUBJECTS.map((subject) => (
              <div key={subject} className={`rounded-2xl p-6 border ${subjectColors[subject]}`}>
                <div className="text-3xl mb-4">{subjectIcons[subject]}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{SUBJECT_LABELS[subject]}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{SUBJECT_DESCRIPTIONS[subject]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-5">
              📐 The science behind the score
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on the same science as international assessments</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Eduentry uses the same psychometric models that power PISA, GCSE and SAT —
              so your child&apos;s results are directly comparable to international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: '2-Parameter IRT Model',
                desc: 'Each question has a calibrated difficulty and discrimination value. Scores reflect the difficulty of questions answered correctly — not just the raw count.',
                tag: 'Used in PISA · SAT · GCSE',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Real-time Adaptive Algorithm',
                desc: 'Questions are selected using Fisher Information to maximise measurement precision. Each answer updates the ability estimate and selects the optimal next question.',
                tag: 'Computerised Adaptive Testing',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'International Benchmarking',
                desc: "Scores use the same mean-100, SD-15 scale as PISA and professional cognitive assessments. Results are mapped to UK National Curriculum levels, US grade expectations, PISA proficiency tiers, and IB programme readiness.",
                tag: 'UK · US · PISA · IB',
              },
            ].map(({ icon, title, desc, tag }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-5 text-center">What the score means</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84', label: 'Needs Support', color: 'text-red-600', bg: 'bg-red-50' },
                { range: '85–94', label: 'Below Average', color: 'text-amber-600', bg: 'bg-amber-50' },
                { range: '95–109', label: 'Average', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { range: '110–119', label: 'Above Average', color: 'text-blue-600', bg: 'bg-blue-50' },
                { range: '120–130', label: 'Exceptional', color: 'text-emerald-600', bg: 'bg-emerald-50' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className={`${bg} rounded-xl p-3 text-center`}>
                  <div className={`text-sm font-bold ${color}`}>{range}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              68% of children score between 85–115 (within 1 standard deviation of the mean)
            </p>
          </div>
        </div>
      </section>

      {/* Powered by */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Technology</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* Anthropic / Claude */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#D4A57A]/10 rounded-2xl flex items-center justify-center border border-[#D4A57A]/30">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M12 2L2 19.5h20L12 2z" fill="#D97706" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">Claude AI</div>
                <div className="text-xs text-gray-400">by Anthropic</div>
              </div>
            </div>
            {/* IRT */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100">
                <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">2PL IRT</div>
                <div className="text-xs text-gray-400">Psychometric model</div>
              </div>
            </div>
            {/* MAP Estimation */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">MAP Estimation</div>
                <div className="text-xs text-gray-400">Bayesian scoring</div>
              </div>
            </div>
            {/* Supabase */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
                <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.09 12.888.917 14.05 1.932 13.8l9.94-2.483a.972.972 0 00.734-.94L11.9 1.036zM12.1 22.964c.015.986 1.26 1.41 1.874.637l9.262-11.651c.673-.838-.154-2-.169-1.75l-9.94 2.483a.972.972 0 00-.734.94L12.1 22.964z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">Supabase</div>
                <div className="text-xs text-gray-400">Secure data storage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple to get started</h2>
          <p className="text-gray-500">From signup to full results in under 2 hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Create a free account',
              desc: "Register as a parent and add your child's name and date of birth. The assessment automatically adapts to their exact age.",
            },
            {
              step: '02',
              title: 'Your child takes 4 tests',
              desc: '60 questions across four subjects, taken at home at their own pace. Each question adapts — harder for correct answers, easier for wrong ones.',
            },
            {
              step: '03',
              title: 'See the global context',
              desc: 'Standardised scores with topic breakdowns, international benchmarks across UK, US, PISA and IB frameworks, AI-generated recommendations, and a printable report.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-5">
              <div className="text-4xl font-bold text-indigo-100 leading-none flex-shrink-0 select-none">{step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '60', label: 'Adaptive questions' },
            { value: '4', label: 'International frameworks' },
            { value: '10', label: 'Difficulty levels' },
            { value: '6–17', label: 'Age range' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-bold mb-1">{value}</div>
              <div className="text-indigo-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              q: 'Is Eduentry free to use?',
              a: "Yes, Eduentry is completely free. There are no subscriptions, hidden fees, or premium tiers. Create a free account, add your child's profile, and start the assessment at no cost.",
            },
            {
              q: 'What subjects does the assessment cover?',
              a: "The assessment covers four subjects: English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry, problem-solving), Verbal Reasoning (analogies, classifications, sequences), and Non-Verbal Reasoning (patterns, spatial reasoning, matrices). Each subject has 15 adaptive questions.",
            },
            {
              q: 'What is a percentile ranking and what does it mean?',
              a: "A percentile ranking shows how your child compares to all other children of the same age. A score in the 80th percentile means your child performed better than 80% of children at that age level. Eduentry uses a standardised scale with mean 100 and standard deviation 15 — the same scale used by professional cognitive assessments.",
            },
            {
              q: 'How does the score compare to international education systems?',
              a: "Every score is mapped against four frameworks: the UK National Curriculum (including 11+ and GCSE readiness), US grade-level expectations, PISA proficiency levels, and IB programme readiness. A score of 110, for example, places a child above the expected standard in the UK and above grade level in the US — context that is difficult to get from a single school test.",
            },
            {
              q: 'How is this different from a school test?',
              a: "School tests give every child the same questions and grade against a local cohort. Eduentry adapts in real time and benchmarks results against international standards — showing not just how your child is doing at school, but how they compare to children in the UK, US, and globally.",
            },
            {
              q: 'How is Eduentry different from CAT4 or GL Assessment?',
              a: "CAT4 and GL Assessment are professionally normed tests administered in schools with large calibration populations. Eduentry uses the same IRT methodology and scoring scale, but questions are AI-generated. Eduentry is free and available to any family instantly — CAT4 and GL tests require school administration and cost money. Eduentry results are best used as an indicative guide, not a formal diagnostic.",
            },
            {
              q: 'How does the adaptive technology work?',
              a: "Eduentry uses 2-Parameter Logistic (2PL) Item Response Theory with MAP estimation. After each answer, the system updates its estimate of the child's ability and selects the next question to maximise measurement precision at that level. This means fewer questions are needed to achieve the same accuracy as a fixed-length test.",
            },
            {
              q: 'Is the score comparable to professional educational assessments?',
              a: "The scoring methodology is the same — 2PL Item Response Theory with MAP estimation, mean 100, SD 15 — as assessments used in PISA, GCSE and by professional educational psychologists. Question content is AI-generated and should be treated as indicative rather than diagnostic.",
            },
            {
              q: 'What score is considered good?',
              a: "Scores are on a standardised scale: below 85 is Needs Support, 85–94 is Below Average, 95–109 is Average, 110–119 is Above Average, and 120+ is Exceptional. A score of 100 is exactly average. 68% of children score between 85 and 115. For 11+ grammar school entry, competitive scores are typically 115 and above.",
            },
            {
              q: 'Can I use Eduentry to prepare for the 11+ exam?',
              a: "Yes. The four subjects — English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning — directly mirror the 11+ exam structure used by grammar schools in England. Eduentry gives you a baseline score and percentile ranking, plus personalised recommendations showing which topics to focus on.",
            },
            {
              q: 'How long does the assessment take?',
              a: "The full assessment is 60 questions across 4 subjects (15 per subject). Most children complete it in 60–90 minutes. You can take breaks between subjects — progress is automatically saved.",
            },
            {
              q: 'What age groups is this suitable for?',
              a: "Eduentry supports children aged 6 to 17. The AI adapts question content and vocabulary to the child's exact age, so a 6-year-old and a 17-year-old receive age-appropriate questions even within the same subject.",
            },
            {
              q: 'How often can my child take the assessment?',
              a: "You can run a new assessment at any time. We recommend waiting at least 4–6 weeks between assessments to allow meaningful progress to develop. Each assessment produces a new set of AI-generated questions, so repetition does not give an unfair advantage.",
            },
            {
              q: 'What do the personalised recommendations include?',
              a: "After the assessment, you can generate AI-powered personalised study recommendations for each subject. Recommendations identify specific weak areas and suggest targeted activities and practice approaches tailored to your child's age and ability level.",
            },
            {
              q: "Is my child's data private?",
              a: "Yes. Data is stored securely via Supabase with row-level security — only you can see your child's results. We do not sell or share data with third parties.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-gray-900 select-none list-none">
                {q}
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
          Want to understand the scoring methodology?{' '}
          <Link href="/methodology" className="text-indigo-500 hover:text-indigo-700 font-medium">
            Read how Eduentry works →
          </Link>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-24 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Discover where your child stands — globally
        </h2>
        <p className="text-indigo-200 mb-10 max-w-xl mx-auto text-lg">
          Free to use. No subscription. Full international context in under 2 hours.
        </p>
        <Link
          href="/auth/register"
          className="bg-white text-indigo-600 px-10 py-4 rounded-xl text-base font-bold hover:bg-indigo-50 transition-colors shadow-lg inline-block"
        >
          Start free assessment →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <Logo size="sm" href="/" />
            <span>·</span>
            <span>International academic benchmarking</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/methodology" className="hover:text-gray-600 transition-colors">Methodology</Link>
            <Link href="/auth/login" prefetch={false} className="hover:text-gray-600 transition-colors">Sign in</Link>
            <Link href="/auth/register" prefetch={false} className="hover:text-gray-600 transition-colors">Register</Link>
            <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Powered by Claude AI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import CtaLink from '@/components/ui/CtaLink'
import type { Locale, SampleReportContent, SubjectKey } from './types'
import { SAMPLE_REPORT_PATHS } from './paths'

const BASE_URL = 'https://eduentry.com'

const HREFLANG: Record<Locale, string> = {
  en: 'en-GB', tr: 'tr', es: 'es', fr: 'fr', ar: 'ar', ru: 'ru', zh: 'zh',
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? `{${k}}`))
}

export function buildSampleReportMetadata(c: SampleReportContent): Metadata {
  const url = `${BASE_URL}${c.path}`
  const ogImage = c.locale === 'en' ? `${BASE_URL}/sample-report/opengraph-image` : `${BASE_URL}/${c.locale}/opengraph-image`
  const languages: Record<string, string> = {}
  for (const l of Object.keys(SAMPLE_REPORT_PATHS) as Locale[]) languages[HREFLANG[l]] = `${BASE_URL}${SAMPLE_REPORT_PATHS[l]}`
  languages['x-default'] = `${BASE_URL}${SAMPLE_REPORT_PATHS.en}`

  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: url, languages },
    keywords: c.meta.keywords,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'website',
      siteName: 'Eduentry',
      locale: c.ogLocale,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: c.meta.ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [ogImage],
    },
  }
}

// ── Data (identical across locales) ───────────────────────────────────────────

const CHILD_AGE   = 10
const OVERALL_SAS = 107
const PERCENTILE  = 68

const SUBJECTS: {
  key: SubjectKey
  sas: number
  raw: number
  total: number
  pct: number
  band: number
  scoreColor: string
  borderColor: string
  dotColor: string
  bellColor: string
  avgDifficulty: string
  topics: { correct: number; total: number; pct: number }[]
}[] = [
  {
    key: 'english', sas: 109, raw: 21, total: 30, pct: 70, band: 2,
    scoreColor: 'text-yellow-600', borderColor: 'border-t-indigo-400', dotColor: 'bg-indigo-400', bellColor: '#4F46E5',
    avgDifficulty: '5.8',
    topics: [{ correct: 8, total: 10, pct: 80 }, { correct: 7, total: 10, pct: 70 }, { correct: 6, total: 10, pct: 60 }],
  },
  {
    key: 'mathematics', sas: 84, raw: 14, total: 30, pct: 47, band: 0,
    scoreColor: 'text-red-600', borderColor: 'border-t-teal-400', dotColor: 'bg-teal-400', bellColor: '#0D9488',
    avgDifficulty: '5.2',
    topics: [{ correct: 6, total: 10, pct: 60 }, { correct: 4, total: 10, pct: 40 }, { correct: 4, total: 10, pct: 40 }],
  },
  {
    key: 'verbal_reasoning', sas: 122, raw: 23, total: 30, pct: 77, band: 4,
    scoreColor: 'text-violet-600', borderColor: 'border-t-violet-400', dotColor: 'bg-violet-400', bellColor: '#7C3AED',
    avgDifficulty: '7.1',
    topics: [{ correct: 8, total: 10, pct: 80 }, { correct: 7, total: 10, pct: 70 }, { correct: 8, total: 10, pct: 80 }],
  },
  {
    key: 'nonverbal_reasoning', sas: 114, raw: 21, total: 30, pct: 70, band: 3,
    scoreColor: 'text-emerald-600', borderColor: 'border-t-pink-400', dotColor: 'bg-pink-400', bellColor: '#DB2777',
    avgDifficulty: '6.2',
    topics: [{ correct: 7, total: 10, pct: 70 }, { correct: 8, total: 10, pct: 80 }, { correct: 6, total: 10, pct: 60 }],
  },
]

const SUBJECT_BY_KEY = Object.fromEntries(SUBJECTS.map((s) => [s.key, s])) as Record<SubjectKey, (typeof SUBJECTS)[number]>

const QUICK_STATS: { key: SubjectKey; color: string }[] = [
  { key: 'verbal_reasoning',    color: 'text-violet-600' },
  { key: 'mathematics',         color: 'text-red-600' },
  { key: 'nonverbal_reasoning', color: 'text-emerald-600' },
  { key: 'english',             color: 'text-indigo-600' },
]

const RECOMMENDATIONS: {
  key: SubjectKey
  subjectColor: string
  subjectBg: string
  priorityColor: string
  currentSAS: number
  targetSAS: number
}[] = [
  { key: 'english',             subjectColor: 'text-indigo-700', subjectBg: 'bg-indigo-50', priorityColor: 'text-amber-700 bg-amber-50 border border-amber-200',     currentSAS: 109, targetSAS: 115 },
  { key: 'verbal_reasoning',    subjectColor: 'text-violet-700', subjectBg: 'bg-violet-50', priorityColor: 'text-violet-700 bg-violet-50 border border-violet-200',  currentSAS: 122, targetSAS: 126 },
  { key: 'nonverbal_reasoning', subjectColor: 'text-pink-700',   subjectBg: 'bg-pink-50',   priorityColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200', currentSAS: 114, targetSAS: 121 },
  { key: 'mathematics',         subjectColor: 'text-teal-700',   subjectBg: 'bg-teal-50',   priorityColor: 'text-red-700 bg-red-50 border border-red-200',             currentSAS: 84,  targetSAS: 95 },
]

const SCORE_GUIDE = [
  { range: '70–84',   color: 'text-red-600',     bg: 'bg-red-50'     },
  { range: '85–94',   color: 'text-amber-600',   bg: 'bg-amber-50'   },
  { range: '95–109',  color: 'text-indigo-600',  bg: 'bg-indigo-50'  },
  { range: '110–119', color: 'text-blue-600',    bg: 'bg-blue-50'    },
  { range: '120–130', color: 'text-emerald-600', bg: 'bg-emerald-50' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function SampleReport({ content: c }: { content: SampleReportContent }) {
  const url = `${BASE_URL}${c.path}`
  const homeHref = c.locale === 'en' ? '/' : `/${c.locale}`
  const homeUrl = c.locale === 'en' ? BASE_URL : `${BASE_URL}/${c.locale}`
  const registerHref = c.locale === 'en' ? '/auth/register' : `/${c.locale}/auth/register`
  const labelSuffix = c.locale === 'en' ? '' : `_${c.locale}`
  const name = c.childName

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumbHome, item: homeUrl },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbCurrent, item: url },
    ],
  }
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: c.meta.ogTitle,
    description: c.meta.description,
    url,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    inLanguage: c.inLanguage,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  const bellSubjects = (['english', 'mathematics', 'verbal_reasoning', 'nonverbal_reasoning'] as SubjectKey[]).map((k) => ({
    score: SUBJECT_BY_KEY[k].sas,
    label: c.subjects[k].shortLabel,
    color: SUBJECT_BY_KEY[k].bellColor,
    dotColor: SUBJECT_BY_KEY[k].bellColor,
  }))

  const insightStyles = [
    { icon: '📊', bg: 'bg-blue-50 border-blue-100' },
    { icon: '⚡', bg: 'bg-violet-50 border-violet-100' },
    { icon: '⚠️', bg: 'bg-red-50 border-red-100' },
  ]

  const intlCards = [
    { flag: '🇬🇧', entry: c.intl.uk,   color: 'border-blue-100 bg-blue-50' },
    { flag: '🇺🇸', entry: c.intl.us,   color: 'border-violet-100 bg-violet-50' },
    { flag: '🌍',  entry: c.intl.pisa, color: 'border-emerald-100 bg-emerald-50' },
    { flag: '🎓',  entry: c.intl.ib,   color: 'border-amber-100 bg-amber-50' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Sample banner */}
      <div className="bg-indigo-600 text-white text-center text-sm font-medium py-2.5 px-4">
        {c.banner}{' '}
        <CtaLink href={registerHref} label={`sample_report_banner${labelSuffix}`} className="underline underline-offset-2 hover:no-underline font-semibold">
          {c.bannerCta}
        </CtaLink>
      </div>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 w-full">

        <nav className="text-sm text-gray-500">
          <Link href={homeHref} className="hover:text-gray-600">{c.breadcrumbHome}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{c.breadcrumbCurrent}</span>
        </nav>

        {/* ── Hero header ── */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 mb-4">
                  {fill(c.sampleBadge, { name, age: CHILD_AGE })}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{fill(c.heading, { name })}</h1>
                <p className="text-gray-500 text-sm mt-1.5">{fill(c.completedLine, { date: c.completedDate })}</p>

                {/* Quick stats row */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {QUICK_STATS.map(({ key, color }) => (
                    <div key={key} className="text-center">
                      <div className={`text-xl font-bold ${color}`}>{SUBJECT_BY_KEY[key].sas}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{c.subjects[key].label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overall score circle */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 -rotate-90" viewBox="0 0 112 112">
                    <circle cx="56" cy="56" r="48" fill="none" stroke="#fefce8" strokeWidth="8" />
                    <circle cx="56" cy="56" r="48" fill="none" stroke="#eab308" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 48}`}
                      strokeDashoffset={`${2 * Math.PI * 48 * (1 - (OVERALL_SAS - 70) / 60)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{OVERALL_SAS}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{c.overall}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-yellow-600">{c.bands[2]}</div>
                  <div className="text-xs text-gray-500">{fill(c.topPercent, { pct: 100 - PERCENTILE, age: CHILD_AGE })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key insights ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.insights.map((ins, i) => (
            <div key={ins.label} className={`rounded-2xl border p-5 ${insightStyles[i].bg}`}>
              <div className="text-2xl mb-2">{insightStyles[i].icon}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{ins.label}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{ins.text}</p>
            </div>
          ))}
        </div>

        {/* ── Bell curve ── */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6" dir="ltr">
            <BellCurve
              subjects={bellSubjects}
              title={c.bellTitle}
              overallScore={OVERALL_SAS}
              zoneLabels={c.bellBands}
              percentileFormat={c.percentileFormat}
            />
          </div>
        </div>

        {/* ── International context ── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.intlHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {intlCards.map(({ flag, entry: [system, text], color }) => (
              <div key={system} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{system}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            {fill(c.intlFootnote, { score: OVERALL_SAS })}
          </p>
        </section>

        {/* ── Subject scores ── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.subjectsHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECTS.map((s) => (
              <div key={s.key} className={`bg-white rounded-2xl border-t-4 border border-gray-100 ${s.borderColor} p-5 shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.dotColor}`} />
                    <h3 className="font-semibold text-gray-900">{c.subjects[s.key].label}</h3>
                  </div>
                  <span className={`text-2xl font-bold ${s.scoreColor}`}>{s.sas}</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>{fill(c.correctOf, { raw: s.raw, total: s.total })}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${s.pct >= 80 ? 'bg-emerald-400' : s.pct >= 65 ? 'bg-blue-400' : 'bg-amber-400'}`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">{c.topicsLabel}</p>
                  {s.topics.map((t, i) => (
                    <div key={c.subjects[s.key].topics[i]}>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span className="capitalize">{c.subjects[s.key].topics[i]}</span>
                        <span className="font-medium">{t.correct}/{t.total}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${t.pct >= 80 ? 'bg-emerald-400' : t.pct >= 60 ? 'bg-blue-400' : 'bg-amber-400'}`}
                          style={{ width: `${t.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className={`text-sm font-semibold ${s.scoreColor}`}>{c.bands[s.band]}</span>
                  <span className="text-xs text-gray-500">{fill(c.avgDifficulty, { d: s.avgDifficulty })}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Personalised recommendations ── */}
        <section>
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{c.recsHeading}</h2>
            <span className="text-xs text-gray-500">{c.recsSub}</span>
          </div>
          <div className="space-y-4">
            {RECOMMENDATIONS.map((r, i) => {
              const t = c.recommendations[r.key]
              return (
                <div key={r.key} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Card header */}
                  <div className={`px-6 pt-5 pb-4 ${r.subjectBg}`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">#{i + 1}</span>
                          <span className={`text-xs font-bold uppercase tracking-widest ${r.subjectColor}`}>{c.subjects[r.key].label}</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900">{t.headline}</h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${r.priorityColor}`}>
                          {t.priority}
                        </span>
                        <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                          {t.scorePotential}
                        </span>
                      </div>
                    </div>
                    {/* Score arrow */}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      <span className="text-sm font-bold text-gray-500">SAS {r.currentSAS}</span>
                      <svg className="w-4 h-4 text-gray-500 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span className="text-sm font-bold text-emerald-600">SAS {r.targetSAS}</span>
                      <span className="text-xs text-gray-500">{c.recsTarget}</span>
                    </div>
                  </div>

                  {/* Rationale */}
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-sm text-gray-600 leading-relaxed">{t.rationale}</p>
                  </div>

                  {/* Action steps */}
                  <div className="px-6 pb-5 pt-3">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">{c.actionPlan}</p>
                    <ul className="space-y-2.5">
                      {t.actions.map((action, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[10px] font-bold text-gray-500">{j + 1}</span>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Score legend ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">{c.scoreGuide}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {SCORE_GUIDE.map(({ range, color, bg }, i) => (
              <div key={range} className={`${bg} rounded-xl p-3 text-center`}>
                <div className={`text-sm font-bold ${color}`} dir="ltr">{range}</div>
                <div className="text-xs text-gray-500 mt-0.5">{c.bands[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.faqHeading}</h2>
          <div className="space-y-3">
            {c.faq.map(({ q, a }) => (
              <details key={q} className="border border-gray-200 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 list-none flex items-center justify-between">
                  {q}
                  <span className="text-indigo-600 ms-3 text-lg leading-none select-none">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-indigo-600 rounded-3xl p-10 sm:p-12 text-center text-white">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 rounded-full px-4 py-1.5 mb-5">
            {c.ctaBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-indigo-100 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            {c.ctaText}
          </p>
          <CtaLink
            href={registerHref}
            label={`sample_report_cta${labelSuffix}`}
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors text-base"
          >
            {c.ctaButton}
          </CtaLink>
        </div>

        {/* ── Methodology ── */}
        <div className="border-t border-gray-200 pt-6 text-xs text-gray-500 space-y-1.5 leading-relaxed">
          <p className="font-medium text-gray-500">{c.aboutHeading}</p>
          <p>{c.aboutText}</p>
        </div>

      </main>
    </>
  )
}

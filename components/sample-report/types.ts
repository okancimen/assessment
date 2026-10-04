export type SubjectKey = 'english' | 'mathematics' | 'verbal_reasoning' | 'nonverbal_reasoning'

export type Locale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

export interface SampleReportRecommendation {
  priority: string
  scorePotential: string
  headline: string
  rationale: string
  actions: string[]
}

// Every user-facing string on the sample report page. Placeholders in braces
// ({name}, {age}, {pct}, …) are filled in by the component.
export interface SampleReportContent {
  locale: Locale
  path: string
  inLanguage: string
  ogLocale: string
  meta: {
    title: string
    description: string
    keywords: string[]
    ogTitle: string
    ogDescription: string
  }
  childName: string
  completedDate: string

  banner: string
  bannerCta: string
  breadcrumbHome: string
  breadcrumbCurrent: string

  sampleBadge: string        // {name}, {age}
  heading: string            // {name}
  completedLine: string      // {date}
  overall: string
  topPercent: string         // {pct}, {age}

  subjects: Record<SubjectKey, { label: string; shortLabel: string; topics: [string, string, string] }>
  bands: [string, string, string, string, string]  // Needs Support → Exceptional
  bellBands: [string, string, string, string, string]
  percentileFormat: string   // {n}

  insights: [{ label: string; text: string }, { label: string; text: string }, { label: string; text: string }]
  bellTitle: string

  intlHeading: string
  intl: { uk: [string, string]; us: [string, string]; pisa: [string, string]; ib: [string, string] }
  intlFootnote: string       // {score}

  subjectsHeading: string
  correctOf: string          // {raw}, {total}
  topicsLabel: string
  avgDifficulty: string      // {d}

  recsHeading: string
  recsSub: string
  recsTarget: string
  actionPlan: string
  recommendations: Record<SubjectKey, SampleReportRecommendation>

  scoreGuide: string
  faqHeading: string
  faq: { q: string; a: string }[]

  ctaBadge: string
  ctaHeading: string
  ctaText: string
  ctaButton: string

  aboutHeading: string
  aboutText: string
}

import type { Locale } from './types'

// Localized URL of the sample report, per locale. Used for hreflang,
// the language picker and in-context links across the site.
export const SAMPLE_REPORT_PATHS: Record<Locale, string> = {
  en: '/sample-report',
  tr: '/tr/ornek-rapor',
  es: '/es/informe-de-ejemplo',
  fr: '/fr/exemple-de-rapport',
  ar: '/ar/taqrir-namudhaji',
  ru: '/ru/primer-otcheta',
  zh: '/zh/yangben-baogao',
}

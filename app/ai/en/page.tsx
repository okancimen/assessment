import type { Metadata } from 'next'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/en`

export const metadata: Metadata = {
  title: { absolute: 'Internship Readiness Assessment UK — Free AI Report | Eduentry.ai' },
  description: 'Free AI-powered internship assessment for high school students aged 14–18 in the UK. 34 adaptive questions across Tech, Business, Data and Marketing. Instant personalised readiness report.',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-GB': PAGE_URL,
      tr: `${BASE_URL}/tr`,
      es: `${BASE_URL}/es`,
      fr: `${BASE_URL}/fr`,
      ar: `${BASE_URL}/ar`,
      ru: `${BASE_URL}/ru`,
      zh: `${BASE_URL}/zh`,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    url: PAGE_URL,
    locale: 'en_GB',
    alternateLocale: ['tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'ru_RU', 'zh_CN'],
  },
}

export { default } from '../page'

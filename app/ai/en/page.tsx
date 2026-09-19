import type { Metadata } from 'next'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/en`

export const metadata: Metadata = {
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-GB': PAGE_URL,
      tr: `${BASE_URL}/tr`,
      es: `${BASE_URL}/es`,
      fr: `${BASE_URL}/fr`,
      ar: `${BASE_URL}/ar`,
      ru: `${BASE_URL}/ru`,
      zh: `${BASE_URL}/zh`,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    url: PAGE_URL,
    locale: 'en_GB',
    alternateLocale: ['tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'ru_RU', 'zh_CN'],
  },
}

export { default } from '../page'

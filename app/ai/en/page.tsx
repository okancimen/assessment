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
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    url: PAGE_URL,
    locale: 'en_GB',
  },
}

export { default } from '../page'

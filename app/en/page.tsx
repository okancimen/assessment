import type { Metadata } from 'next'

const BASE_URL = 'https://eduentry.com'
const PAGE_URL = `${BASE_URL}/en`

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-GB': PAGE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: { url: PAGE_URL },
}

export { default } from '../page'

import type { Metadata } from 'next'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  robots: { index: false, follow: false },
}

export { default } from '../page'

import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.tr.business
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/tr/business`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  alternates: {
    canonical: TRACK_URL,
    languages: { tr: TRACK_URL, en: `${BASE_URL}/business`, 'x-default': `${BASE_URL}/business` },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'tr_TR',
  },
}

export default function BusinessTrackTR() {
  return <TrackPageTemplate track="business" locale="tr" />
}

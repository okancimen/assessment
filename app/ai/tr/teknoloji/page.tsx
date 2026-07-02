import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.tr.tech
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/tr/teknoloji`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  alternates: {
    canonical: TRACK_URL,
    languages: { tr: TRACK_URL, en: `${BASE_URL}/tech`, 'x-default': `${BASE_URL}/tech` },
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

export default function TechTrackTR() {
  return <TrackPageTemplate track="tech" locale="tr" />
}

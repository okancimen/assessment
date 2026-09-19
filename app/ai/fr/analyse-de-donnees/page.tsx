import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.fr['data-analytics']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/fr/analyse-de-donnees`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['stage analyse données lycéen', 'évaluation stage data', 'stage statistiques lycée', 'stage SQL lycéen', 'stage data science lycée', 'stage visualisation données lycéen'],
  alternates: {
    canonical: TRACK_URL,
    languages: { fr: TRACK_URL, tr: `${BASE_URL}/tr/veri-analitigi`, es: `${BASE_URL}/es/analisis-de-datos`, ar: `${BASE_URL}/ar/bayanat`, zh: `${BASE_URL}/zh/shuju`, ru: `${BASE_URL}/ru/analiz-dannykh`, en: `${BASE_URL}/data-analytics`, 'x-default': `${BASE_URL}/data-analytics` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'fr_FR',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
}

export default function DataAnalyticsTrackFR() {
  return <TrackPageTemplate track="data-analytics" locale="fr" />
}

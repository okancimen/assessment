import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.fr.business
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/fr/entreprise`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['stage entreprise lycéen', 'évaluation stage entreprise', 'stage management lycée', 'stage finance lycéen', 'stage ressources humaines lycéen', 'stage commerce lycée'],
  alternates: {
    canonical: TRACK_URL,
    languages: { fr: TRACK_URL, tr: `${BASE_URL}/tr/is-dunyasi`, es: `${BASE_URL}/es/empresa`, ar: `${BASE_URL}/ar/aamal`, zh: `${BASE_URL}/zh/shangye`, ru: `${BASE_URL}/ru/biznes`, en: `${BASE_URL}/business`, 'x-default': `${BASE_URL}/business` },
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

export default function BusinessTrackFR() {
  return <TrackPageTemplate track="business" locale="fr" />
}

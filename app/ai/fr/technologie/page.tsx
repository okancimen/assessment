import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.fr.tech
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/fr/technologie`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['stage technologie lycéen', 'évaluation stage tech', 'stage informatique lycée', 'stage coding lycéen', 'stage cybersécurité lycéen', 'stage UX lycée', 'stage développement logiciel lycéen'],
  alternates: {
    canonical: TRACK_URL,
    languages: { fr: TRACK_URL, tr: `${BASE_URL}/tr/teknoloji`, es: `${BASE_URL}/es/tecnologia`, ar: `${BASE_URL}/ar/taqniya`, zh: `${BASE_URL}/zh/keji`, ru: `${BASE_URL}/ru/tekhnologii`, en: `${BASE_URL}/tech`, 'x-default': `${BASE_URL}/tech` },
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

export default function TechTrackFR() {
  return <TrackPageTemplate track="tech" locale="fr" />
}

import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.fr['digital-marketing']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/fr/marketing-digital`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['stage marketing digital lycéen', 'évaluation stage marketing', 'stage SEO lycée', 'stage réseaux sociaux lycéen', 'stage communication digitale lycée', 'stage contenu lycéen'],
  alternates: {
    canonical: TRACK_URL,
    languages: { fr: TRACK_URL, tr: `${BASE_URL}/tr/dijital-pazarlama`, es: `${BASE_URL}/es/marketing-digital`, ar: `${BASE_URL}/ar/tawiq`, zh: `${BASE_URL}/zh/yingxiao`, ru: `${BASE_URL}/ru/tsifrovoy-marketing`, en: `${BASE_URL}/digital-marketing`, 'x-default': `${BASE_URL}/digital-marketing` },
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

export default function DigitalMarketingTrackFR() {
  return <TrackPageTemplate track="digital-marketing" locale="fr" />
}

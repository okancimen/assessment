import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.ar.business
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/ar/aamal`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['تدريب أعمال طلاب', 'تقييم تدريب أعمال', 'تدريب تجارة طلاب ثانوي', 'تدريب ريادة أعمال طلاب', 'تجربة عمل أعمال'],
  alternates: {
    canonical: TRACK_URL,
    languages: { ar: TRACK_URL, fr: `${BASE_URL}/fr/entreprise`, tr: `${BASE_URL}/tr/is-dunyasi`, es: `${BASE_URL}/es/empresa`, zh: `${BASE_URL}/zh/shangye`, ru: `${BASE_URL}/ru/biznes`, en: `${BASE_URL}/business`, 'x-default': `${BASE_URL}/business` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'ar_AE',
    alternateLocale: ['en_GB', 'fr_FR'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
}

export default function BusinessTrackAR() {
  return <TrackPageTemplate track="business" locale="ar" />
}

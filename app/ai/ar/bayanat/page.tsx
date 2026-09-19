import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.ar['data-analytics']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/ar/bayanat`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['تدريب بيانات طلاب', 'تقييم تدريب تحليل بيانات', 'تدريب إحصاء طلاب', 'تدريب SQL طلاب', 'تجربة عمل بيانات'],
  alternates: {
    canonical: TRACK_URL,
    languages: { ar: TRACK_URL, fr: `${BASE_URL}/fr/analyse-de-donnees`, tr: `${BASE_URL}/tr/veri-analitigi`, es: `${BASE_URL}/es/analisis-de-datos`, zh: `${BASE_URL}/zh/shuju`, ru: `${BASE_URL}/ru/analiz-dannykh`, en: `${BASE_URL}/data-analytics`, 'x-default': `${BASE_URL}/data-analytics` },
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

export default function DataAnalyticsTrackAR() {
  return <TrackPageTemplate track="data-analytics" locale="ar" />
}

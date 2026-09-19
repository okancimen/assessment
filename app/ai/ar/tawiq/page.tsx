import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.ar['digital-marketing']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/ar/tawiq`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['تدريب تسويق رقمي طلاب', 'تقييم تدريب تسويق', 'تدريب سوشيال ميديا طلاب', 'تدريب SEO طلاب', 'تجربة عمل تسويق رقمي'],
  alternates: {
    canonical: TRACK_URL,
    languages: { ar: TRACK_URL, fr: `${BASE_URL}/fr/marketing-digital`, tr: `${BASE_URL}/tr/dijital-pazarlama`, es: `${BASE_URL}/es/marketing-digital`, zh: `${BASE_URL}/zh/yingxiao`, ru: `${BASE_URL}/ru/tsifrovoy-marketing`, en: `${BASE_URL}/digital-marketing`, 'x-default': `${BASE_URL}/digital-marketing` },
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

export default function DigitalMarketingTrackAR() {
  return <TrackPageTemplate track="digital-marketing" locale="ar" />
}

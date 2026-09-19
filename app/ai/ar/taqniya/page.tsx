import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.ar.tech
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/ar/taqniya`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['تدريب تقنية طلاب', 'تقييم تدريب تقنية', 'تدريب برمجة طالب ثانوي', 'تدريب أمن سيبراني طلاب', 'تدريب UX طلاب', 'تجربة عمل تقنية'],
  alternates: {
    canonical: TRACK_URL,
    languages: { ar: TRACK_URL, fr: `${BASE_URL}/fr/technologie`, tr: `${BASE_URL}/tr/teknoloji`, es: `${BASE_URL}/es/tecnologia`, zh: `${BASE_URL}/zh/keji`, ru: `${BASE_URL}/ru/tekhnologii`, en: `${BASE_URL}/tech`, 'x-default': `${BASE_URL}/tech` },
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

export default function TechTrackAR() {
  return <TrackPageTemplate track="tech" locale="ar" />
}

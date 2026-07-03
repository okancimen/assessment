import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.tr['digital-marketing']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/tr/dijital-pazarlama`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['dijital pazarlama stajı', 'pazarlama stajı hazırlığı', 'dijital pazarlama değerlendirmesi öğrenci', 'SEO stajı lise', 'sosyal medya stajı değerlendirmesi', 'içerik pazarlama stajı', 'dijital pazarlama iş deneyimi'],
  alternates: {
    canonical: TRACK_URL,
    languages: { tr: TRACK_URL, es: `${BASE_URL}/es/marketing-digital`, en: `${BASE_URL}/digital-marketing`, 'x-default': `${BASE_URL}/digital-marketing` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'tr_TR',
    alternateLocale: ['en_GB', 'es_ES'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image' as const, title: d.meta.title, description: d.meta.description },
}

export default function DigitalMarketingTrackTR() {
  return <TrackPageTemplate track="digital-marketing" locale="tr" />
}

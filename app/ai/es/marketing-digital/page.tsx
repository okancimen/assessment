import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.es['digital-marketing']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/es/marketing-digital`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['prácticas marketing digital', 'evaluación marketing instituto', 'prácticas SEO estudiantes', 'test redes sociales bachillerato', 'prácticas contenido digital', 'experiencia laboral marketing', 'evaluación marketing digital'],
  alternates: {
    canonical: TRACK_URL,
    languages: { es: TRACK_URL, tr: `${BASE_URL}/tr/dijital-pazarlama`, en: `${BASE_URL}/digital-marketing`, 'x-default': `${BASE_URL}/digital-marketing` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'es_ES',
    alternateLocale: ['en_GB', 'tr_TR'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image' as const, title: d.meta.title, description: d.meta.description },
}

export default function DigitalMarketingTrackES() {
  return <TrackPageTemplate track="digital-marketing" locale="es" />
}

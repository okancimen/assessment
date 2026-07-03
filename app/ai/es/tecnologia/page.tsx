import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.es.tech
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/es/tecnologia`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['prácticas tecnología instituto', 'evaluación prácticas tecnología', 'prácticas informática estudiantes', 'test aptitud tecnología', 'prácticas programación bachillerato', 'prácticas ciberseguridad estudiantes', 'prácticas UX diseño'],
  alternates: {
    canonical: TRACK_URL,
    languages: { es: TRACK_URL, tr: `${BASE_URL}/tr/teknoloji`, en: `${BASE_URL}/tech`, 'x-default': `${BASE_URL}/tech` },
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

export default function TechTrackES() {
  return <TrackPageTemplate track="tech" locale="es" />
}

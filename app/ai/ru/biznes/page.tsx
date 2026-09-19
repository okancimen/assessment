import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.ru.business
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/ru/biznes`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['стажировка бизнес школьники', 'оценка стажировка бизнес', 'стажировка менеджмент старшеклассники', 'стажировка финансы школьники', 'стажировка предпринимательство старшеклассники'],
  alternates: {
    canonical: TRACK_URL,
    languages: { ru: TRACK_URL, fr: `${BASE_URL}/fr/entreprise`, tr: `${BASE_URL}/tr/is-dunyasi`, es: `${BASE_URL}/es/empresa`, ar: `${BASE_URL}/ar/aamal`, zh: `${BASE_URL}/zh/shangye`, en: `${BASE_URL}/business`, 'x-default': `${BASE_URL}/business` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'ru_RU',
    alternateLocale: ['en_GB', 'fr_FR'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
}

export default function BusinessTrackRU() {
  return <TrackPageTemplate track="business" locale="ru" />
}

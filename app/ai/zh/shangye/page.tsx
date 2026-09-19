import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.zh.business
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/zh/shangye`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['高中生商业实习', '商业实习评估', '管理实习学生', '金融实习高中生', '战略实习学生', '商科实习评估'],
  alternates: {
    canonical: TRACK_URL,
    languages: { zh: TRACK_URL, fr: `${BASE_URL}/fr/entreprise`, tr: `${BASE_URL}/tr/is-dunyasi`, es: `${BASE_URL}/es/empresa`, ar: `${BASE_URL}/ar/aamal`, ru: `${BASE_URL}/ru/biznes`, en: `${BASE_URL}/business`, 'x-default': `${BASE_URL}/business` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
    locale: 'zh_CN',
    alternateLocale: ['en_GB', 'fr_FR'],
    images: [{ url: `${TRACK_URL}/opengraph-image`, width: 1200, height: 630, alt: d.meta.title }],
  },
  twitter: { card: 'summary_large_image', title: d.meta.title, description: d.meta.description },
}

export default function BusinessTrackZH() {
  return <TrackPageTemplate track="business" locale="zh" />
}

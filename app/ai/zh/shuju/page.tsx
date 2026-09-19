import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.zh['data-analytics']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/zh/shuju`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['高中生数据分析实习', '数据实习评估', 'SQL实习学生', '统计分析实习高中生', '数据可视化实习学生'],
  alternates: {
    canonical: TRACK_URL,
    languages: { zh: TRACK_URL, fr: `${BASE_URL}/fr/analyse-de-donnees`, tr: `${BASE_URL}/tr/veri-analitigi`, es: `${BASE_URL}/es/analisis-de-datos`, ar: `${BASE_URL}/ar/bayanat`, ru: `${BASE_URL}/ru/analiz-dannykh`, en: `${BASE_URL}/data-analytics`, 'x-default': `${BASE_URL}/data-analytics` },
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

export default function DataAnalyticsTrackZH() {
  return <TrackPageTemplate track="data-analytics" locale="zh" />
}

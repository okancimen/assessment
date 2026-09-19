import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.zh['digital-marketing']
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/zh/yingxiao`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['高中生数字营销实习', '营销实习评估', 'SEO实习学生', '社交媒体实习高中生', '内容营销实习学生'],
  alternates: {
    canonical: TRACK_URL,
    languages: { zh: TRACK_URL, fr: `${BASE_URL}/fr/marketing-digital`, tr: `${BASE_URL}/tr/dijital-pazarlama`, es: `${BASE_URL}/es/marketing-digital`, ar: `${BASE_URL}/ar/tawiq`, ru: `${BASE_URL}/ru/tsifrovoy-marketing`, en: `${BASE_URL}/digital-marketing`, 'x-default': `${BASE_URL}/digital-marketing` },
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

export default function DigitalMarketingTrackZH() {
  return <TrackPageTemplate track="digital-marketing" locale="zh" />
}

import type { Metadata } from 'next'
import TrackPageTemplate from '@/app/ai/_lib/TrackPageTemplate'
import { TRACK_I18N } from '@/app/ai/_lib/track-i18n'

const d = TRACK_I18N.zh.tech
const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/zh/keji`

export const metadata: Metadata = {
  title: d.meta.title,
  description: d.meta.description,
  keywords: ['高中生科技实习', '科技实习评估', '编程实习学生', '网络安全实习学生', 'UX设计实习学生', '软件开发实习高中生'],
  alternates: {
    canonical: TRACK_URL,
    languages: { zh: TRACK_URL, fr: `${BASE_URL}/fr/technologie`, tr: `${BASE_URL}/tr/teknoloji`, es: `${BASE_URL}/es/tecnologia`, ar: `${BASE_URL}/ar/taqniya`, ru: `${BASE_URL}/ru/tekhnologii`, en: `${BASE_URL}/tech`, 'x-default': `${BASE_URL}/tech` },
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

export default function TechTrackZH() {
  return <TrackPageTemplate track="tech" locale="zh" />
}

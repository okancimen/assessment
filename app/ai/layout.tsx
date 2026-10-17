import type { Metadata } from 'next'
import PublicNavAI from '@/components/layout/PublicNavAI'
import PublicFooterAI from '@/components/layout/PublicFooterAI'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Eduentry.ai — Internship Readiness Assessment',
    template: '%s | Eduentry.ai',
  },
  description:
    'Free AI-powered internship readiness assessment for high school students aged 14+. Measure aptitude, domain knowledge, and workplace skills. Get placed in a real internship.',
  keywords: [
    'internship readiness assessment',
    'free internship test students',
    'AI internship assessment',
    'high school work experience',
    'tech internship students UK',
    'business internship readiness',
    'data analytics internship test',
    'digital marketing internship',
    'year 10 11 12 13 internship',
    'university admissions work experience',
    'student internship placement',
    'career readiness assessment',
  ],
  authors: [{ name: 'Eduentry' }],
  creator: 'Eduentry',
  publisher: 'Eduentry',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'WZAglbmjRhu4WRnkuOzX_C0vSSPSXirLjVX0kDRp-Fw', yandex: '9e4c9b5ad14f3906' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Eduentry.ai',
    title: 'Eduentry.ai — Internship Readiness Assessment',
    description:
      'Free AI-powered internship readiness assessment for high school students. Get placed in Tech, Business, Data Analytics, or Digital Marketing.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Internship Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eduentrycom',
    creator: '@eduentrycom',
    title: 'Eduentry.ai — Internship Readiness Assessment',
    description: 'Free AI-powered internship readiness assessment for high school students aged 14+.',
  },
}

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eduentry',
  url: 'https://eduentry.ai',
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo-ai-long.png` },
  sameAs: [
    'https://twitter.com/eduentrycom',
    'https://www.instagram.com/eduentrycom',
    'https://www.linkedin.com/company/eduentry',
  ],
}

export default function AILayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }} />
      <PublicNavAI />
      {children}
      <PublicFooterAI />
    </>
  )
}

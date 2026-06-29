import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import PublicNavAI from '@/components/layout/PublicNavAI'
import PublicFooter from '@/components/layout/PublicFooter'
import '../globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Eduentry.ai',
    title: 'Eduentry.ai — Internship Readiness Assessment',
    description:
      'Free AI-powered internship readiness assessment for high school students. Get placed in Tech, Business, Data Analytics, or Digital Marketing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry.ai — Internship Readiness Assessment',
    description: 'Free AI-powered internship readiness assessment for high school students aged 14+.',
  },
}

export default function AILayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geist.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1d1d1f" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K6M6LHTTR7" strategy="afterInteractive" />
        <Script id="google-analytics-ai" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K6M6LHTTR7');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-white font-[family-name:var(--font-geist-sans)]">
        <PublicNavAI />
        {children}
        <PublicFooter />
      </body>
    </html>
  )
}

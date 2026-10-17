import type { Metadata } from 'next'
import Script from 'next/script'
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
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <Script id="gtm-ai" strategy="lazyOnload">{`
        (function(){
          var events=['mousedown','mousemove','keydown','touchstart','scroll','wheel'];
          function load(){
            events.forEach(function(e){document.removeEventListener(e,load,{once:true,passive:true})});
            var s=document.createElement('script');s.async=true;
            s.src='https://www.googletagmanager.com/gtag/js?id=G-K6M6LHTTR7';
            document.head.appendChild(s);
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());gtag('config','G-K6M6LHTTR7');
          }
          events.forEach(function(e){document.addEventListener(e,load,{once:true,passive:true})});
        })();
      `}</Script>
      <Script id="clarity-ai" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ygl2bx00pe");`}</Script>
      <PublicNavAI />
      {children}
      <PublicFooterAI />
    </>
  )
}

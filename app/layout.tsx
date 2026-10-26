import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import WebMCPTools from "@/components/WebMCPTools";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://eduentry.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Eduentry — Academic, Personality & Internship Assessments",
    template: "%s | Eduentry",
  },
  description:
    "Free adaptive assessments for students aged 6–20 — international academic benchmarking, VIA character strengths personality assessment, and internship readiness for high school students aged 14+.",
  keywords: [
    "free children assessment",
    "percentile ranking children",
    "international academic benchmark",
    "UK children assessment",
    "adaptive test UK",
    "PISA benchmark children",
    "UK national curriculum assessment",
    "11 plus preparation",
    "IB readiness test",
    "standardised score",
    "IRT assessment",
    "maths test for kids",
    "English test for children",
    "verbal reasoning test",
    "non-verbal reasoning test",
    "ages 6 to 20",
    "compare child internationally",
    "free academic assessment",
    "child percentile score",
    "internship readiness assessment",
    "high school internship aptitude test",
    "career readiness test UK students",
    "work experience assessment ages 14",
  ],
  authors: [{ name: "Eduentry" }],
  creator: "Eduentry",
  publisher: "Eduentry",
  verification: { yandex: '291c84c62d800eac' },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Eduentry",
    title: "Eduentry — Academic, Personality & Internship Assessment Platform",
    description:
      "Free adaptive assessments for students aged 6–20. Academic benchmarking, VIA character strengths personality assessment, and internship readiness for students 14+.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Eduentry — Academic, Personality & Internship Assessment Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eduentrycom",
    creator: "@eduentrycom",
    title: "Eduentry — Academic, Personality & Internship Assessment Platform",
    description:
      "Free adaptive assessments for students aged 6–20. Academic benchmarking, VIA personality assessment, and internship readiness for students 14+.",
    images: ["/opengraph-image"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = (await headers()).get('x-locale') ?? 'en-GB'
  return (
    <html lang={lang} className={`${geist.variable} h-full antialiased`}>
      <head>
        <meta http-equiv="origin-trial" content="Atp+SBWdNhx29ClnOpdUgDbQEO3pDDH+P0z6bqVqeLe4wctK38PxG3ddCbjBkmWQ215ECODYaam9cdAFzghnZwEAAABMeyJvcmlnaW4iOiJodHRwczovL2VkdWVudHJ5LmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViTUNQIiwiZXhwaXJ5IjoxODA2MzY0ODAwfQ==" />
        <meta name="theme-color" content="#1d1d1f" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="yandex-verification" content="f8b17ecde6325153" />
        <link type="text/plain" rel="describedby" href="/llms.txt" />
        <link type="text/plain" rel="describedby" href="/llms-full.txt" />
        <Script id="gtag-queue" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};`}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://eduentry.com/#organization",
              "name": "Eduentry",
              "url": "https://eduentry.com",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://eduentry.com/#logo",
                "url": "https://eduentry.com/logo.png",
                "contentUrl": "https://eduentry.com/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Free adaptive academic, personality and internship readiness assessments for students aged 6–22, benchmarked to PISA, UK national curriculum, and IB standards. Used in 190+ countries. Available in English, Turkish, Spanish, French, Arabic, Russian, and Chinese.",
              "foundingDate": "2023",
              "areaServed": "Worldwide",
              "availableLanguage": ["English", "Turkish", "Spanish", "French", "Arabic", "Russian", "Chinese"],
              "knowsAbout": [
                "Adaptive psychometric assessment",
                "Item Response Theory (IRT)",
                "PISA benchmarking",
                "VIA Character Strengths",
                "11+ exam preparation",
                "NWEA MAP scores",
                "CogAT gifted identification",
                "WISC-V scores",
                "Student internship readiness"
              ],
              "sameAs": [
                "https://eduentry.ai",
                "https://twitter.com/eduentrycom"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://eduentry.com/#website",
              "url": "https://eduentry.com",
              "name": "Eduentry",
              "description": "Free adaptive academic, personality and internship readiness assessments for students aged 6–22.",
              "publisher": { "@id": "https://eduentry.com/#organization" },
              "inLanguage": ["en", "tr", "es", "fr", "ar", "ru", "zh"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://eduentry.com/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })}} />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <WebMCPTools />
        <ConditionalAnalytics />
      </body>
    </html>
  );
}

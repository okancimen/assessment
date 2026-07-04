import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const BASE_URL = "https://eduentry.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Eduentry — Academic Assessment & Internship Readiness Platform",
    template: "%s | Eduentry",
  },
  description:
    "Free adaptive assessments for students at every stage — international academic benchmarking for ages 6–17, and internship readiness assessment for high school students aged 14+.",
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
    "ages 6 to 17",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Eduentry",
    title: "Eduentry — Academic Assessment & Internship Readiness Platform",
    description:
      "Free adaptive assessments built on the same science as PISA, GCSE and SAT. Academic benchmarking for ages 6–17 and internship readiness for high school students 14+.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Eduentry — Academic Assessment & Internship Readiness Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduentry — Academic Assessment & Internship Readiness Platform",
    description:
      "Free adaptive assessments for UK and international families. Academic benchmarking ages 6–17 and internship readiness assessment for students 14+.",
    images: ["/opengraph-image"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers()
  const host = headersList.get('host') ?? ''
  const isAI = host === 'eduentry.ai' || host === 'www.eduentry.ai'

  return (
    <html lang="en-GB" className={`${geist.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#1d1d1f" />
        <meta name="yandex-verification" content="f8b17ecde6325153" />
        {!isAI && <link rel="preconnect" href="https://xronkbdtsnjibwhuelni.supabase.co" />}
        {!isAI && <link rel="dns-prefetch" href="https://www.googletagmanager.com" />}
        {!isAI && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-F60J3BHJDE" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F60J3BHJDE');
            `}</Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}

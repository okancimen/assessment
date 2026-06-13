import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://eduentry.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Eduentry — International Academic Benchmark for Children",
    template: "%s | Eduentry",
  },
  description:
    "Free adaptive assessment for UK and international families — see your child's percentile ranking against global standards. UK National Curriculum, PISA and IB benchmarks. Ages 6–17.",
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
    "cognitive assessment",
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
  ],
  authors: [{ name: "Eduentry" }],
  creator: "Eduentry",
  publisher: "Eduentry",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Eduentry",
    title: "Eduentry — Free Academic Assessment for Children",
    description:
      "Free AI-powered adaptive assessment for UK and international families. Percentile rankings + standardised scores across English, Maths, Verbal and Non-Verbal Reasoning. Ages 6–17.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Eduentry — Academic Assessment for Children" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduentry — Free Academic Assessment for Children",
    description:
      "Free adaptive assessment for UK and international families. Percentile rankings + standardised scores for children aged 6–17.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${geist.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://xronkbdtsnjibwhuelni.supabase.co" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F60J3BHJDE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F60J3BHJDE');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}

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
    default: "Eduentry — Free Academic Assessment for Children",
    template: "%s | Eduentry",
  },
  description:
    "Free AI-powered adaptive assessment measuring English, Maths, Verbal and Non-Verbal Reasoning for children aged 7–16. Get standardised scores, percentile rankings and personalised AI recommendations.",
  keywords: [
    "academic assessment",
    "children assessment",
    "adaptive test",
    "11 plus preparation",
    "cognitive assessment",
    "educational assessment",
    "standardised score",
    "IRT assessment",
    "maths test for kids",
    "English test for children",
    "verbal reasoning test",
    "non-verbal reasoning test",
    "ages 7 to 16",
  ],
  authors: [{ name: "Eduentry" }],
  creator: "Eduentry",
  publisher: "Eduentry",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Eduentry",
    title: "Eduentry — Free Academic Assessment for Children",
    description:
      "Free AI-powered adaptive assessment for children aged 7–16. Standardised scores across English, Maths, Verbal and Non-Verbal Reasoning.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Eduentry — Academic Assessment for Children" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduentry — Free Academic Assessment for Children",
    description:
      "AI-powered adaptive assessment for children aged 7–16. Standardised scores + personalised recommendations.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
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

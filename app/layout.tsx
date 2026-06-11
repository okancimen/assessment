import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduentry — Academic Assessment for Children",
  description: "Adaptive cognitive assessments for children aged 7-16. Discover academic strengths and get actionable insights.",
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

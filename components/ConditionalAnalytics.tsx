'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.location.hostname.includes('eduentry.ai')) {
      setEnabled(true)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F60J3BHJDE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F60J3BHJDE');
      `}</Script>
    </>
  )
}

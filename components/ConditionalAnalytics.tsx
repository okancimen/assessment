'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.location.hostname.includes('eduentry.ai')) return

    const load = () => setEnabled(true)

    // Defer GTM until the first user interaction so it doesn't
    // affect LCP/FCP scores during passive page-load audits.
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll']
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }))

    // Fallback: load after 5 s even with no interaction
    const timer = setTimeout(load, 5000)

    return () => {
      events.forEach(e => window.removeEventListener(e, load))
      clearTimeout(timer)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F60J3BHJDE" strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F60J3BHJDE');
      `}</Script>
    </>
  )
}

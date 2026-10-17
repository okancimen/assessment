'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type Site = 'com' | 'ai' | null

export default function ConditionalAnalytics() {
  const [site, setSite] = useState<Site>(null)

  useEffect(() => {
    const isAI = window.location.hostname.includes('eduentry.ai')
    const load = () => setSite(isAI ? 'ai' : 'com')

    const events = ['mousedown', 'keydown', 'touchstart', 'scroll']
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }))
    const timer = setTimeout(load, 5000)

    return () => {
      events.forEach(e => window.removeEventListener(e, load))
      clearTimeout(timer)
    }
  }, [])

  if (!site) return null

  if (site === 'ai') {
    return (
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K6M6LHTTR7" strategy="lazyOnload" />
        <Script id="google-analytics-ai" strategy="lazyOnload">{`
          gtag('js', new Date());
          gtag('config', 'G-K6M6LHTTR7');
        `}</Script>
        <Script id="clarity-ai-root" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ygl2bx00pe");`}</Script>
      </>
    )
  }

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F60J3BHJDE" strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">{`
        gtag('js', new Date());
        gtag('config', 'G-F60J3BHJDE');
      `}</Script>
      <Script id="clarity-init" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","yf8qhuzltg");`}</Script>
    </>
  )
}

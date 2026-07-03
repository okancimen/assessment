import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This page could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl font-bold text-[#4F46E5] mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-[#6e6e73] mb-12 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of the links below.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12 text-left">
          {[
            { href: '/',                  icon: '🏠', label: 'Home',             desc: 'Back to the start' },
            { href: '/tech',              icon: '💻', label: 'Technology track', desc: 'Coding · Algorithms · Cybersecurity' },
            { href: '/business',          icon: '📈', label: 'Business track',   desc: 'Market analysis · Finance · Strategy' },
            { href: '/data-analytics',    icon: '📊', label: 'Data Analytics',   desc: 'Charts · Statistics · SQL' },
            { href: '/digital-marketing', icon: '📣', label: 'Digital Marketing',desc: 'SEO · Social media · Campaigns' },
            { href: '/blog',              icon: '📝', label: 'Blog',             desc: 'Internship guides & career advice' },
          ].map(({ href, icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 rounded-xl border border-[#d2d2d7] hover:border-[#4F46E5]/50 hover:bg-[#f5f5f7] transition-all"
            >
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <div className="font-semibold text-[#1d1d1f] text-sm group-hover:text-[#4F46E5] transition-colors">{label}</div>
                <div className="text-xs text-[#6e6e73] mt-0.5">{desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/apply"
          className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#4338CA] transition-colors"
        >
          Apply free →
        </Link>
      </div>
    </main>
  )
}

'use client'

import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNav />

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="text-8xl font-bold text-[#e5e7eb] mb-6">500</div>
          <h1 className="text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Something went wrong
          </h1>
          <p className="text-[#6e6e73] text-lg mb-10 leading-relaxed">
            An unexpected error occurred. Please try again or return home.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={reset}
              className="bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="bg-[#f5f5f7] text-[#1d1d1f] px-6 py-3 rounded-xl font-semibold hover:bg-[#e5e5ea] transition-colors"
            >
              Go home
            </Link>
          </div>

          <div className="border-t border-[#f5f5f7] pt-10">
            <p className="text-sm text-[#6e6e73] mb-5 font-medium uppercase tracking-wide">Quick links</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { href: '/about',         label: 'About Eduentry' },
                { href: '/methodology',   label: 'How it works' },
                { href: 'https://eduentry.ai/en',    label: 'Internship assessment' },
                { href: '/blog',          label: 'Browse the blog' },
                { href: '/auth/register', label: 'Create free account' },
                { href: '/auth/login',    label: 'Sign in' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#4F46E5] hover:underline py-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}

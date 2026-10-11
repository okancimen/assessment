import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://xronkbdtsnjibwhuelni.supabase.co" />
      <div className="min-h-screen flex flex-col bg-[#f5f5f7]">
        <PublicNav />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          {children}
        </div>
        <div className="border-t border-[#d2d2d7] py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f] transition-colors">Home</Link>
            <Link href="/11-plus" className="hover:text-[#1d1d1f] transition-colors">11+ Prep</Link>
            <Link href="/sample-report" className="hover:text-[#1d1d1f] transition-colors">Sample Report</Link>
            <Link href="/subjects" className="hover:text-[#1d1d1f] transition-colors">All Subjects</Link>
            <Link href="/blog" className="hover:text-[#1d1d1f] transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </>
  )
}

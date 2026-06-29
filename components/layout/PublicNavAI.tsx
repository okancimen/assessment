import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicNavAI() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/#how-it-works"    className="hover:opacity-50 transition-opacity">How it works</Link>
          <Link href="/#tracks"          className="hover:opacity-50 transition-opacity">Tracks</Link>
          <Link href="/blog"             className="hover:opacity-50 transition-opacity">Blog</Link>
          <Link href="/#organisations"   className="hover:opacity-50 transition-opacity">For Organisations</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/auth/login" className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">Sign in</Link>
          <Link href="/apply" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Apply free</Link>
        </div>
      </div>
    </nav>
  )
}

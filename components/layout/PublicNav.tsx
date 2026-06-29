import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicNav() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/11-plus"          className="hover:opacity-50 transition-opacity">11+ Prep</Link>
          <Link href="/grammar-schools"  className="hover:opacity-50 transition-opacity">Grammar Schools</Link>
          <Link href="/subjects"         className="hover:opacity-50 transition-opacity">Subjects</Link>
          <a href="https://eduentry.ai"   className="hover:opacity-50 transition-opacity">Internship</a>
          <Link href="/blog"             className="hover:opacity-50 transition-opacity">Blog</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/auth/login"    className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">Sign in</Link>
          <Link href="/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Get started</Link>
        </div>
      </div>
    </nav>
  )
}

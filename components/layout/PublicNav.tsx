import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicNav() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[#d2d2d7]/60">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo href="/" size="sm" />
          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-[#1d1d1f]">
            <Link href="/11-plus" className="hover:text-[#4F46E5] transition-colors">11+ Prep</Link>
            <Link href="/grammar-schools" className="hover:text-[#4F46E5] transition-colors">Grammar Schools</Link>
            <Link href="/subjects" className="hover:text-[#4F46E5] transition-colors">Subjects</Link>
            <Link href="/blog" className="hover:text-[#4F46E5] transition-colors">Blog</Link>
          </div>
        </div>
        <Link
          href="/auth/register"
          prefetch={false}
          className="bg-[#4F46E5] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#4338CA] transition-colors"
        >
          Start free
        </Link>
      </div>
    </nav>
  )
}

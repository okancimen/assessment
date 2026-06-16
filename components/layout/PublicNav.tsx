import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicNav() {
  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo href="/" size="sm" />
          <div className="hidden sm:flex items-center gap-5 text-sm text-gray-500">
            <Link href="/11-plus" className="hover:text-gray-900 transition-colors">11+ Prep</Link>
            <Link href="/methodology" className="hover:text-gray-900 transition-colors">Methodology</Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>
        <Link
          href="/auth/register"
          prefetch={false}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          Start free assessment
        </Link>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooter() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo href="/" size="sm" />
            <span className="text-sm text-gray-400">© 2026 Eduentry</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link href="/11-plus" className="hover:text-gray-600 transition-colors">11+ Prep</Link>
            <Link href="/subjects/english" className="hover:text-gray-600 transition-colors">English</Link>
            <Link href="/subjects/maths" className="hover:text-gray-600 transition-colors">Maths</Link>
            <Link href="/subjects/verbal-reasoning" className="hover:text-gray-600 transition-colors">Verbal Reasoning</Link>
            <Link href="/subjects/non-verbal-reasoning" className="hover:text-gray-600 transition-colors">Non-Verbal Reasoning</Link>
            <Link href="/methodology" className="hover:text-gray-600 transition-colors">Methodology</Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

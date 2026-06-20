import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooter() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Assessments</p>
            <ul className="space-y-2">
              <li><Link href="/subjects" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">All Subjects</Link></li>
              <li><Link href="/11-plus" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">11+ Prep</Link></li>
              <li><Link href="/grammar-schools" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Grammar Schools</Link></li>
              <li><Link href="/demo" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Try a Sample</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Learn</p>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
              <li><Link href="/methodology" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Methodology</Link></li>
              <li><Link href="/about" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Account</p>
            <ul className="space-y-2">
              <li><Link href="/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Sign in</Link></li>
              <li><Link href="/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Create account</Link></li>
              <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

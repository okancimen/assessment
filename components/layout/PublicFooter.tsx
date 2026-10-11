import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import PublicFooterTR from './PublicFooterTR'
import PublicFooterFR from './PublicFooterFR'
import PublicFooterES from './PublicFooterES'
import PublicFooterAR from './PublicFooterAR'
import PublicFooterRU from './PublicFooterRU'
import PublicFooterZH from './PublicFooterZH'

export default function PublicFooter({ locale }: { locale?: string }) {
  if (locale === 'tr') return <PublicFooterTR />
  if (locale === 'fr') return <PublicFooterFR />
  if (locale === 'es') return <PublicFooterES />
  if (locale === 'ar') return <PublicFooterAR />
  if (locale === 'ru') return <PublicFooterRU />
  if (locale === 'zh') return <PublicFooterZH />
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Know your child beyond the grade.
            </p>
            <Link
              href="/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start Free Assessment →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Assessments</p>
              <ul className="space-y-2.5">
                <li><Link href="/subjects" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">All Subjects</Link></li>
                <li><Link href="/11-plus" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">11+ Prep</Link></li>
                <li><Link href="/personality-assessment" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Personality Assessment</Link></li>
                <li><Link href="/grammar-schools" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Grammar Schools</Link></li>
                <li><Link href="/demo" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Try a Sample</Link></li>
                <li><Link href="/sample-report" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Sample Report</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Learn</p>
              <ul className="space-y-2.5">
                <li><Link href="/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
                <li><Link href="/methodology" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Methodology</Link></li>
                <li><Link href="/about" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Account</p>
              <ul className="space-y-2.5">
                <li><Link href="/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Sign in</Link></li>
                <li><Link href="/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Create account</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Legal</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

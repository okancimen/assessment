import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { BLOG_POSTS } from '@/app/blog/posts'

export default function PublicNav() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between gap-3 lg:gap-6 relative">
        <Logo href="/" size="sm" />

        <div className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-5 xl:gap-8 whitespace-nowrap text-[14px] font-medium text-[#1d1d1f]">
          <Link href="/11-plus"          className="hover:text-[#4F46E5] transition-colors">11+ Prep</Link>
          <Link href="/grammar-schools"  className="hover:text-[#4F46E5] transition-colors">Grammar Schools</Link>
          <Link href="/subjects"         className="hover:text-[#4F46E5] transition-colors">Subjects</Link>
          <a href="https://eduentry.ai/en" className="hover:text-[#4F46E5] transition-colors">Internship</a>
          <Link href="/your-childs-potential" className="hover:text-[#4F46E5] transition-colors">Child&apos;s Potential</Link>
          <Link href="/sample-report"         className="hover:text-[#4F46E5] transition-colors">Sample Report</Link>
          <Link href="/blog"             className="hover:text-[#4F46E5] transition-colors flex items-center gap-1.5">
            Blog
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {BLOG_POSTS.length}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 shrink-0 whitespace-nowrap">
          <Link href="/auth/login"    className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block">Sign in</Link>
          <Link href="/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Get started</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}


import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'

export default function PublicNavZH() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/zh" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/zh"               className="hover:opacity-50 transition-opacity">实习评估</Link>
          <Link href="/zh/guanyu-women"  className="hover:opacity-50 transition-opacity">关于我们</Link>
          <Link href="/zh/fangfalun"     className="hover:opacity-50 transition-opacity">方法论</Link>
          <Link href="/zh/blog"          className="hover:opacity-50 transition-opacity">博客</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/zh/auth/login"     className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">登录</Link>
          <Link href="/zh/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">免费开始</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}

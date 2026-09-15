import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterZH() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">实习评估</p>
            <ul>
              <li><Link href="/zh"               className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">实习评估</Link></li>
              <li><Link href="/internship/apply"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">申请实习</Link></li>
              <li><Link href="/zh/blog"           className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">博客</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">平台</p>
            <ul>
              <li><Link href="/zh/guanyu-women"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">关于我们</Link></li>
              <li><Link href="/zh/fangfalun"     className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">方法论</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">账户</p>
            <ul>
              <li><Link href="/zh/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">登录</Link></li>
              <li><Link href="/zh/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">创建账户</Link></li>
              <li><Link href="/dashboard"        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">控制面板</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">法律</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">隐私政策</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">使用条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/zh" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. 版权所有。</p>
        </div>
      </div>
    </footer>
  )
}

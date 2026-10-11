import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterZH() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/zh" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              超越成绩，了解您的孩子。
            </p>
            <Link
              href="/zh/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              开始免费评估 →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">实习评估</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/zh" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">实习评估</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">申请实习</Link></li>
                <li><Link href="/zh/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">博客</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">平台</p>
              <ul className="space-y-2.5">
                <li><Link href="/zh/guanyu-women" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">关于我们</Link></li>
                <li><Link href="/zh/fangfalun" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">方法论</Link></li>
                <li><Link href="/zh/yangben-baogao" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">报告样本</Link></li>
                <li><Link href="/zh/xingge-pinggu" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">性格评估</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">账户</p>
              <ul className="space-y-2.5">
                <li><Link href="/zh/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">登录</Link></li>
                <li><Link href="/zh/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">创建账户</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">控制面板</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">法律</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">隐私政策</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">使用条款</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. 版权所有。</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">隐私政策</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">使用条款</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

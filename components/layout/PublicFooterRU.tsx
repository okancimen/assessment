import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterRU() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/ru" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Узнайте своего ребёнка за пределами оценок.
            </p>
            <Link
              href="/ru/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Начать бесплатную оценку →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Стажировка</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/ru" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Оценка стажировки</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Подать заявку</Link></li>
                <li><Link href="/ru/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Блог</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Платформа</p>
              <ul className="space-y-2.5">
                <li><Link href="/ru/o-nas" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">О нас</Link></li>
                <li><Link href="/ru/metodologiya" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Методология</Link></li>
                <li><Link href="/ru/primer-otcheta" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Пример отчёта</Link></li>
                <li><Link href="/ru/otsenka-lichnosti" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Оценка личности</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Аккаунт</p>
              <ul className="space-y-2.5">
                <li><Link href="/ru/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Войти</Link></li>
                <li><Link href="/ru/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Создать аккаунт</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Панель управления</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Правовые</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Конфиденциальность</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Условия</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Конфиденциальность</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Условия</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

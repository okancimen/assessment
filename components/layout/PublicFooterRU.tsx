import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterRU() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Стажировка</p>
            <ul>
              <li><Link href="/ru"               className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Оценка стажировки</Link></li>
              <li><Link href="/internship/apply"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Подать заявку</Link></li>
              <li><Link href="/ru/blog"           className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Блог</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Платформа</p>
            <ul>
              <li><Link href="/ru/o-nas"         className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">О нас</Link></li>
              <li><Link href="/ru/metodologiya"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Методология</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Аккаунт</p>
            <ul>
              <li><Link href="/ru/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Войти</Link></li>
              <li><Link href="/ru/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Создать аккаунт</Link></li>
              <li><Link href="/dashboard"        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Панель управления</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Правовые</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Конфиденциальность</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Условия</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/ru" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

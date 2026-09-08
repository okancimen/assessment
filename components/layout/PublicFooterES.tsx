import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterES() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Prácticas</p>
            <ul>
              <li><Link href="/es"                className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Evaluación de prácticas</Link></li>
              <li><Link href="/internship/apply"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Solicitar ahora</Link></li>
              <li><Link href="/es/blog"           className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Plataforma</p>
            <ul>
              <li><Link href="/es/sobre-nosotros" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Sobre nosotros</Link></li>
              <li><Link href="/es/metodologia"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Metodología</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Cuenta</p>
            <ul>
              <li><Link href="/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Iniciar sesión</Link></li>
              <li><Link href="/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Crear cuenta</Link></li>
              <li><Link href="/dashboard"     className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Panel de control</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Legal</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Privacidad</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Condiciones</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/es" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

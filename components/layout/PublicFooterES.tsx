import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterES() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/es" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Conozca a su hijo más allá de las notas.
            </p>
            <Link
              href="/es/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Iniciar evaluación gratuita →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Prácticas</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/es" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Evaluación de prácticas</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Solicitar ahora</Link></li>
                <li><Link href="/es/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Plataforma</p>
              <ul className="space-y-2.5">
                <li><Link href="/es/sobre-nosotros" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Sobre nosotros</Link></li>
                <li><Link href="/es/metodologia" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Metodología</Link></li>
                <li><Link href="/es/informe-de-ejemplo" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Informe de ejemplo</Link></li>
                <li><Link href="/es/evaluacion-de-personalidad" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Evaluación de personalidad</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Cuenta</p>
              <ul className="space-y-2.5">
                <li><Link href="/es/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Iniciar sesión</Link></li>
                <li><Link href="/es/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Crear cuenta</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Panel de control</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Legal</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacidad</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Condiciones</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Privacidad</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Condiciones</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

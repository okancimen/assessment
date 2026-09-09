import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterFR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Stages</p>
            <ul>
              <li><Link href="/fr"               className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Évaluation de stage</Link></li>
              <li><Link href="/internship/apply"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Postuler</Link></li>
              <li><Link href="/fr/blog"           className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Plateforme</p>
            <ul>
              <li><Link href="/fr/a-propos"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">À propos</Link></li>
              <li><Link href="/fr/methodologie" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Méthodologie</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Compte</p>
            <ul>
              <li><Link href="/fr/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Se connecter</Link></li>
              <li><Link href="/fr/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Créer un compte</Link></li>
              <li><Link href="/dashboard"        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Tableau de bord</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Mentions légales</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Confidentialité</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/fr" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

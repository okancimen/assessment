import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterFR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/fr" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Connaissez votre enfant au-delà des notes.
            </p>
            <Link
              href="/fr/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Commencer l&apos;évaluation gratuite →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Stages</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/fr" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Évaluation de stage</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Postuler</Link></li>
                <li><Link href="/fr/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Plateforme</p>
              <ul className="space-y-2.5">
                <li><Link href="/fr/a-propos" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">À propos</Link></li>
                <li><Link href="/fr/methodologie" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Méthodologie</Link></li>
                <li><Link href="/fr/exemple-de-rapport" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Exemple de rapport</Link></li>
                <li><Link href="/fr/evaluation-de-personnalite" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Évaluation de personnalité</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Compte</p>
              <ul className="space-y-2.5">
                <li><Link href="/fr/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Se connecter</Link></li>
                <li><Link href="/fr/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Créer un compte</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Tableau de bord</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Mentions légales</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Confidentialité</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Confidentialité</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

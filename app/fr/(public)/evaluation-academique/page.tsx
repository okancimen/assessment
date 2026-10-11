import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: "Évaluation Académique Gratuite pour Enfants | Test Adaptatif IA — Eduentry",
  description:
    "Mesurez les capacités académiques de votre enfant en anglais, mathématiques, raisonnement verbal et non-verbal. 6–20 ans. Sans inscription. Résultats instantanés.",
  keywords: [
    'évaluation académique enfant',
    'test académique gratuit enfants',
    'test adaptatif IA enfant',
    'évaluation mathématiques anglais enfant',
    'test raisonnement verbal enfant',
    'test raisonnement non-verbal',
    'évaluation école primaire',
    'test aptitude scolaire enfant',
    'évaluation cognitive enfant en ligne',
    'test niveau scolaire gratuit',
  ],
  alternates: {
    canonical: `${BASE_URL}/fr/evaluation-academique`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/fr/evaluation-academique`,
    siteName: 'Eduentry',
    title: "Évaluation Académique Gratuite pour Enfants | Test Adaptatif IA — Eduentry",
    description: "Mesurez les capacités académiques de votre enfant en 4 matières. 6–20 ans. Sans inscription.",
    locale: 'fr_FR',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Évaluation Académique Enfant — Eduentry" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Évaluation Académique Gratuite pour Enfants | Test Adaptatif IA — Eduentry",
    description: "Mesurez les capacités académiques de votre enfant en 4 matières. 6–20 ans. Sans inscription.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: "Quelles matières l'évaluation couvre-t-elle ?",
    a: "L'évaluation couvre quatre matières principales : l'anglais (compréhension, grammaire, orthographe), les mathématiques (opérations, algèbre, géométrie), le raisonnement verbal et le raisonnement non-verbal.",
  },
  {
    q: "Comment fonctionne la difficulté adaptative ?",
    a: "Notre IA utilise la Théorie de Réponse à l'Item (TRI) pour ajuster la difficulté des questions en temps réel selon les réponses de votre enfant, offrant une estimation de capacité bien plus précise qu'un test fixe.",
  },
  {
    q: "Combien de temps dure l'évaluation ?",
    a: "Chaque matière comprend 15 questions, soit 60 questions au total. La plupart des enfants terminent en 25–35 minutes.",
  },
  {
    q: "Faut-il créer un compte pour commencer ?",
    a: "Non. Commencez immédiatement avec seulement le prénom et l'âge de votre enfant. Après l'évaluation, vous verrez un score résumé. Créez un compte gratuit pour débloquer l'analyse complète et les recommandations IA.",
  },
]

export default function FrEvaluationAcademiquePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNav locale="fr" />

      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">IA Adaptative · 4 Matières · 6–20 Ans</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Connaissez le Vrai Niveau<br />
            <span className="text-[#4F46E5]">Académique de Votre Enfant</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            60 questions adaptatives couvrant l&apos;anglais, les mathématiques, le raisonnement verbal et non-verbal — évaluées sur la même échelle standardisée que les écoles sélectives britanniques.
          </p>
          <GuestAcademicStartForm locale="fr" />
          <p className="mt-2 text-sm text-[#6e6e73]">
            Vous avez déjà un compte ?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Se connecter</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Comment ça marche ?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: "Entrez le prénom et l'âge", desc: "Aucun compte requis. Juste le prénom et l'âge de votre enfant." },
              { step: '2', title: 'Questions adaptatives', desc: "L'IA ajuste la difficulté en temps réel selon les réponses, ciblant le niveau réel de votre enfant." },
              { step: '3', title: 'Résultats instantanés', desc: "Consultez immédiatement le score global et par matière. Inscrivez-vous gratuitement pour l'analyse complète." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Questions Fréquentes</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Prêt à découvrir le niveau académique de votre enfant ?</h2>
          <Link href="/fr/evaluation-academique" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            Commencer l&apos;évaluation gratuite
          </Link>
        </div>
      </section>

      <PublicFooter locale="fr" />
    </div>
  )
}

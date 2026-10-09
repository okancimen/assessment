import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/fr/auth/register`

export const metadata: Metadata = {
  title: "Évaluation de la Personnalité de l'Enfant | Test de Forces de Caractère VIA — Eduentry",
  description:
    "Découvrez les forces de caractère uniques de votre enfant grâce à notre évaluation de personnalité scientifique et IA. Âges 6–20. Questionnaire gratuit pour les parents. Rapport personnalisé instantané.",
  keywords: [
    "évaluation de personnalité enfant",
    "test forces de caractère VIA",
    "forces et faiblesses enfant",
    "test personnalité enfant gratuit",
    "VIA forces de caractère enfants",
    "évaluation caractère enfant en ligne",
    "outils parentaux personnalité",
    "test psychologie positive enfant",
    "évaluation développement enfant",
    "rapport personnalité IA enfant",
  ],
  alternates: {
    canonical: `${BASE_URL}/fr/evaluation-de-personnalite`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/fr/evaluation-de-personnalite`,
    siteName: 'Eduentry',
    title: "Évaluation de la Personnalité de l'Enfant | Test de Forces de Caractère VIA — Eduentry",
    description:
      "Découvrez les forces de caractère uniques de votre enfant grâce à notre évaluation IA. Âges 6–20. Questionnaire gratuit pour les parents.",
    locale: 'fr_FR',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Évaluation de Personnalité Enfant — Eduentry" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Évaluation de la Personnalité de l'Enfant | Test de Forces de Caractère VIA — Eduentry",
    description:
      "Découvrez les forces de caractère uniques de votre enfant grâce à notre évaluation IA. Âges 6–20. Questionnaire gratuit pour les parents.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: "Pourquoi ce test est-il évalué par le parent plutôt que par l'enfant lui-même ?",
    a: "La perception que les enfants ont d'eux-mêmes évolue rapidement, et les plus jeunes peuvent facilement se déconcentrer ou mal comprendre les questionnaires. En tant que parent, vos observations quotidiennes de leurs comportements réels constituent la référence la plus stable et précise pour une évaluation.",
  },
  {
    q: "Et si mon enfant se trouve exactement à la limite d'un groupe d'âge ?",
    a: "Notre système calcule l'âge exact à la journée près grâce à la date de naissance. Les questions sont mathématiquement optimisées pour ce stade développemental précis. Faites confiance au groupe que le système assigne !",
  },
  {
    q: "À quelle fréquence devrais-je refaire cette évaluation pour mon enfant ?",
    a: "Nous recommandons de refaire le test tous les 6 à 12 mois, ou lorsqu'il passe dans un nouveau groupe d'âge. Cela vous permet de suivre l'évolution de ses forces de caractère au fil du temps.",
  },
]

const VIRTUES = [
  {
    label: 'Sagesse',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['Curiosité', 'Créativité', "Amour de l'apprentissage", 'Perspective', 'Jugement'],
  },
  {
    label: 'Courage',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['Bravoure', 'Persévérance', 'Honnêteté', 'Enthousiasme'],
  },
  {
    label: 'Humanité',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['Amour', 'Bienveillance', 'Intelligence sociale'],
  },
  {
    label: 'Justice',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ["Travail d'équipe", 'Équité', 'Leadership'],
  },
  {
    label: 'Tempérance',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['Pardon', 'Humilité', 'Prudence', 'Maîtrise de soi'],
  },
  {
    label: 'Transcendance',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['Appréciation de la beauté', 'Gratitude', 'Espoir', 'Humour', 'Spiritualité'],
  },
]

const TIERS = [
  { label: 'Junior', age: '6–9 ans', traits: '12 traits fondamentaux', questions: '24 questions', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Intermédiaire', age: '10–13 ans', traits: '15 traits', questions: '30 questions', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Adolescent', age: '14–17 ans', traits: '20 traits', questions: '40 questions', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Jeune Adulte', age: '18–20 ans', traits: '24 traits complets', questions: '48 questions', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function EvaluationDePersonnalitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Forces VIA · Âges 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Découvrez les Forces Uniques<br />
            <span className="text-[#4F46E5]">de Votre Enfant</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            Une évaluation de caractère scientifique et IA, parfaitement adaptée au stade de développement de votre enfant.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Commencer l&apos;évaluation gratuite
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            Vous avez déjà un compte ?{' '}
            <Link href="/fr/auth/login" className="text-[#4F46E5] hover:underline font-medium">Se connecter</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Pourquoi le Caractère Compte Plus que les Notes</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            En tant que parents, nous nous concentrons souvent uniquement sur les notes scolaires. Mais les résultats académiques ne racontent qu&apos;une partie de l&apos;histoire. Le vrai succès et la résilience proviennent du caractère, des habitudes émotionnelles et des forces de personnalité d&apos;un enfant. Notre évaluation vous aide à voir au-delà des notes pour percevoir qui devient votre enfant — en mettant en lumière ses &ldquo;Forces Signatures&rdquo; et en identifiant précisément ses &ldquo;Axes de Croissance&rdquo;.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Comment ça fonctionne</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Orientation par âge 🗓️',
                desc: "Lors de l'inscription, entrez simplement la date de naissance de votre enfant. Notre système calcule automatiquement son stade de développement et l'assigne au bon niveau d'évaluation.",
              },
              {
                step: '2',
                title: 'Questionnaire parental de 5 min ⭐',
                desc: 'Vous répondrez à une série de questions rapides, basées sur l\'observation, sur des comportements que vous observez chaque jour. Pas de devinettes, pas de stress pour votre enfant.',
              },
              {
                step: '3',
                title: 'Rapport de croissance IA 🤖',
                desc: "Notre IA analyse vos réponses selon un modèle psychologique mondialement reconnu pour générer une feuille de route personnalisée et détaillée, pleine d'exercices parentaux actionnables.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Fondé sur le Standard Or de la Psychologie Positive</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Notre plateforme adapte le cadre mondialement reconnu des Forces de Caractère VIA, développé par les psychologues pionniers Dr. Martin Seligman et Dr. Neal Mayerson. Utilisé dans plus de 190 pays par des chercheurs et éducateurs, ce modèle identifie 24 traits universels regroupés sous 6 vertus fondamentales : Sagesse, Courage, Humanité, Justice, Tempérance et Transcendance.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Parfaitement Calibré pour Chaque Étape de l&apos;Enfance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Ce que vous obtenez</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Top 5 Forces Signatures', desc: "Les domaines où votre enfant brille naturellement." },
              { icon: '🌱', title: 'Bottom 3 Piliers de Croissance', desc: "Des insights bienveillants sur leurs angles morts ou faiblesses actuelles." },
              { icon: '🤖', title: "Boîte à outils IA actionnable", desc: "Des exercices concrets et personnalisés à pratiquer à la maison pour aider votre enfant à s'épanouir." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Questions fréquemment posées</h2>
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

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Prêt à découvrir qui est vraiment votre enfant ?</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Commencer l&apos;évaluation gratuite
          </Link>
        </div>
      </section>
    </>
  )
}

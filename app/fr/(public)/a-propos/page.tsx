import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'À propos d\'Eduentry — Évaluation académique gratuite pour les enfants',
  description: 'Eduentry est une plateforme d\'évaluation adaptative gratuite pour les élèves de 6 à 17 ans. Scores standardisés comparés au programme national britannique, PISA et aux standards IB.',
  keywords: ['à propos Eduentry', 'plateforme évaluation enfants gratuite', 'référence académique internationale', 'test adaptatif enfants', 'évaluation académique 6 17 ans', 'évaluation stage lycée'],
  alternates: {
    canonical: `${BASE_URL}/fr/a-propos`,
    languages: { fr: `${BASE_URL}/fr/a-propos`, 'en-GB': `${BASE_URL}/about`, tr: `${BASE_URL}/tr/hakkimizda`, es: `${BASE_URL}/es/sobre-nosotros`, 'x-default': `${BASE_URL}/about` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'À propos d\'Eduentry — Évaluation académique gratuite pour les enfants',
    description: 'Évaluations académiques adaptatives gratuites comparées aux standards britanniques, PISA et IB. Scores standardisés et classements percentiles internationaux.',
    url: `${BASE_URL}/fr/a-propos`,
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos d\'Eduentry — Évaluation académique gratuite pour les enfants',
    description: 'Évaluations académiques adaptatives gratuites comparées aux standards britanniques, PISA et IB. Scores standardisés et classements percentiles internationaux.',
    images: [`${BASE_URL}/fr/a-propos/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://eduentry.com/fr' },
    { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://eduentry.com/fr/a-propos' },
  ],
}

export default function AProposPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/fr" className="hover:text-[#1d1d1f]">Accueil</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">À propos</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          Gratuit pour toutes les familles
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
          Évaluation académique gratuite<br />
          <span className="text-[#4F46E5]">pour tous les enfants, partout dans le monde</span>
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Eduentry offre aux parents une vision claire et comparée internationalement de la situation académique de leur enfant — sans frais, en moins de 30 minutes.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 bg-[#f5f5f7] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Notre mission</h2>
        <p className="text-[#6e6e73] leading-relaxed text-lg">
          Chaque enfant mérite de savoir où il se situe — pas seulement par rapport à ses camarades de classe, mais comparé aux enfants britanniques et à l&apos;échelle internationale. Les évaluations standardisées professionnelles ont traditionnellement été coûteuses et inaccessibles. Eduentry rend cette comparaison gratuite, immédiate et disponible pour toute famille disposant d&apos;une connexion internet.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Comment ça fonctionne</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Questions adaptatives',
              body: 'Notre IA génère des questions calibrées à l\'âge de l\'élève et ajuste la difficulté en temps réel selon ses réponses — la même approche utilisée dans PISA et les évaluations MAP.',
            },
            {
              step: '02',
              title: 'Score TRI',
              body: 'Nous utilisons la Théorie de Réponse à l\'Item (TRI) à 2 paramètres pour produire un score standardisé (moyenne 100, ET 15) statistiquement comparable entre groupes d\'âge et sessions.',
            },
            {
              step: '03',
              title: 'Références internationales',
              body: 'Les scores sont mappés en percentiles basés sur le Programme National britannique, PISA, le curriculum commun américain et les cadres IB — pour voir exactement où se situe l\'élève à l\'échelle mondiale.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="space-y-3">
              <div className="text-3xl font-bold text-[#c7d2fe]">{step}</div>
              <h3 className="font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Quatre matières, une image complète</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'Anglais', desc: 'Compréhension, grammaire, orthographe, ponctuation et vocabulaire — aligné avec KS1–KS4 britannique et Cambridge IGCSE.' },
            { label: 'Mathématiques', desc: 'Opérations numériques, algèbre, géométrie, fractions et traitement des données — comparé à la numératie PISA.' },
            { label: 'Raisonnement verbal', desc: 'Analogies, relations de mots, séquences et logique — évalués dans le 11+, grammaire et examens d\'accès aux écoles privées.' },
            { label: 'Raisonnement non verbal', desc: 'Reconnaissance de modèles, matrices, séquences et raisonnement spatial — évalue la résolution de problèmes indépendante du langage.' },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{label}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Fondée sur une science éprouvée</h2>
        <div className="space-y-4 text-[#6e6e73] leading-relaxed">
          <p>
            Les questions d&apos;évaluation sont générées par <strong className="text-[#1d1d1f]">Claude AI</strong> (Anthropic), restreintes au sujet exact, au niveau de difficulté et à la tranche d&apos;âge déterminés par notre moteur TRI. Chaque question est calibrée en temps réel — quand un élève répond correctement, la question suivante est plus difficile ; quand il a des difficultés, elle devient plus facile.
          </p>
          <p>
            Cette approche adaptative signifie des tests plus courts avec une plus grande précision statistique. Une évaluation Eduentry typique dure 20–30 minutes pour les quatre matières et produit un score aussi fiable qu&apos;un test à format fixe de 90 minutes.
          </p>
          <p>
            En savoir plus sur notre méthodologie de scoring sur la <Link href="/fr/methodologie" className="text-[#4F46E5] hover:underline">page méthodologie</Link>.
          </p>
        </div>
      </section>

      {/* Ages */}
      <section className="mb-16 border border-[#d2d2d7] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">De 6 à 17 ans</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Eduentry s&apos;adapte aux enfants et aux jeunes dans tous les niveaux du primaire et du secondaire. Les questions sont générées pour le niveau Key Stage britannique ou l&apos;année scolaire internationale correspondante :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { range: '6–7 ans',   label: 'KS1 / Années 1–2' },
            { range: '8–10 ans',  label: 'KS2 / Années 3–5' },
            { range: '11–13 ans', label: 'KS3 / Années 7–9' },
            { range: '14–16 ans', label: 'KS4 / Années 10–11' },
          ].map(({ range, label }) => (
            <div key={range} className="bg-[#f5f5f7] rounded-xl p-4 text-center">
              <div className="font-semibold text-[#1d1d1f]">{range}</div>
              <div className="text-[#6e6e73] mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship section */}
      <section className="mb-16 bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Évaluation de stage — pour les lycéens de 14+</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          En plus de l&apos;évaluation académique, Eduentry propose une évaluation adaptative de préparation au stage de 34 questions pour les lycéens de plus de 14 ans. Elle couvre l&apos;aptitude générale, les connaissances sectorielles, les compétences professionnelles et le profil d&apos;intérêts dans quatre domaines : Technologie, Entreprise, Analyse de données et Marketing digital.
        </p>
        <Link href="/fr" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
          En savoir plus sur l&apos;évaluation de stage →
        </Link>
      </section>

      {/* Blog links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Du blog</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fr/blog/comment-se-compare-votre-enfant', label: 'Comment votre enfant se compare-t-il à l\'échelle mondiale ?', desc: 'Guide pour parents sur les comparaisons internationales : PISA, programme britannique et IB.' },
            { href: '/fr/blog/stages-lycee-avantages-universite', label: 'Stages au lycée et université', desc: 'Comment l\'expérience professionnelle précoce améliore les candidatures universitaires.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Commencez l&apos;évaluation gratuite de votre enfant</h2>
        <p className="text-indigo-200 mb-8 text-lg">20–30 minutes. Sans paiement. Résultats immédiats.</p>
        <Link href="/fr/auth/register" className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg">
          Commencer gratuitement
        </Link>
      </section>

    </main>
  )
}

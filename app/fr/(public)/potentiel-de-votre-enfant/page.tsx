import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/fr/auth/register`

export const metadata: Metadata = {
  title: 'Forces et faiblesses de l\'enfant : test gratuit',
  description:
    'Découvrez les forces et faiblesses de votre enfant en 35 minutes. Évaluation cognitive selon PISA, SAT et GCSE — rapport IA instantané.',
  keywords: [
    'quelles sont les forces et faiblesses de mon enfant',
    'forces de mon enfant',
    'faiblesses de mon enfant',
    'évaluation cognitive enfant',
    'test enfant gratuit',
    'évaluation PISA enfant',
    'test potentiel enfant',
    'test aptitude cognitive gratuit',
    'évaluation académique enfant',
    'test raisonnement verbal enfant',
    'test adaptatif enfant',
    'test QI enfant gratuit',
    'comparaison norme internationale',
    'analyse bulletin scolaire enfant',
  ],
  alternates: {
    canonical: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
    siteName: 'Eduentry',
    title: 'Quelles sont les Forces et Faiblesses de Mon Enfant? — Test Cognitif Gratuit',
    description: 'Découvrez les forces et faiblesses de votre enfant en 35 minutes. Évaluation cognitive adaptative gratuite selon les normes PISA, SAT et GCSE.',
    locale: 'fr_FR',
    images: [{ url: `${BASE_URL}/fr/stage/opengraph-image`, width: 1200, height: 630, alt: "Évaluation Cognitive de Votre Enfant — Eduentry" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quelles sont les Forces et Faiblesses de Mon Enfant? — Test Cognitif Gratuit',
    description: 'Découvrez les forces et faiblesses de votre enfant en 35 minutes. Évaluation cognitive adaptative gratuite selon les normes PISA, SAT et GCSE.',
    images: [`${BASE_URL}/fr/stage/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'Lecture & Littératie',
    desc: 'Compréhension de lecture, grammaire et vocabulaire. Capacité à analyser des textes et à en tirer des conclusions.',
  },
  {
    icon: '📐',
    title: 'Mathématiques & Raisonnement Numérique',
    desc: 'Arithmétique, algèbre, géométrie et interprétation de données. Raisonnement numérique indépendant du programme scolaire.',
  },
  {
    icon: '🧠',
    title: 'Raisonnement Verbal',
    desc: 'Analogies, classifications et logique verbale. Capacité à penser et établir des relations à travers le langage.',
  },
  {
    icon: '🔷',
    title: 'Raisonnement Spatial Non-Verbal',
    desc: 'Reconnaissance de motifs, raisonnement spatial et matrices abstraites. Domaine cognitif le plus critique pour les STEM.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Test Adaptatif par Ordinateur (CAT)',
    desc: 'Chaque question est sélectionnée en temps réel en fonction de la réponse précédente. Réponse correcte → question plus difficile. Réponse incorrecte → recalibration. Le système détermine avec précision le niveau réel de capacité de votre enfant en 25–35 questions.',
  },
  {
    title: 'Modèle IRT à 2 Paramètres Logistiques (2PL)',
    desc: 'Chaque question est calibrée en utilisant la théorie de réponse à l\'item 2PL et l\'information de Fisher, produisant une estimation de capacité (thêta) avec un intervalle de confiance connu. Les résultats ne sont pas des scores bruts — ce sont des mesures de capacité statistiquement fiables.',
  },
  {
    title: 'Échelle Mondiale Standard',
    desc: 'Échelle standard avec Moyenne = 100, ET = 15. Comparée à des normes internationales alignées sur UK 11+/GCSE, les attentes par classe aux États-Unis, les niveaux PISA et la préparation au programme IB.',
  },
]

const FAQS = [
  {
    q: 'Quelles sont les forces et faiblesses académiques de mon enfant?',
    a: 'Les forces et faiblesses académiques de votre enfant sont mesurées dans trois domaines cognitifs indépendants: le raisonnement verbal (compréhension du langage et analogies), le raisonnement numérique (reconnaissance de motifs et logique mathématique) et la pensée visuo-spatiale (analyse des formes et relations 3D). Le test adaptatif gratuit produit un score de percentile distinct pour chaque domaine par rapport aux normes d\'âge internationales.',
  },
  {
    q: 'Les notes scolaires révèlent-elles le vrai potentiel de mon enfant?',
    a: 'Non. Les notes mesurent l\'intelligence cristallisée — les connaissances acquises et reproduites. Or, de nombreux enfants brillants excellent en intelligence fluide: le raisonnement, la reconnaissance de motifs et la résolution de problèmes que les examens scolaires mesurent rarement. C\'est pourquoi des enfants à haut potentiel peuvent avoir de mauvaises notes.',
  },
  {
    q: "L'évaluation est-elle gratuite?",
    a: "Oui, entièrement gratuite. L'inscription est requise mais il n'y a aucun frais, abonnement ou coût caché. Un rapport de profil cognitif à quatre domaines est généré instantanément à la fin du test.",
  },
  {
    q: 'Combien de temps dure le test?',
    a: 'Environ 35 minutes. Le format adaptatif offre des mesures plus précises avec moins de questions que les tests à choix multiples standard. Le test est sauvegardable — votre enfant peut reprendre là où il s\'est arrêté.',
  },
  {
    q: 'À quelle tranche d\'âge convient-il?',
    a: 'Aux enfants âgés de 6 à 17 ans. Le système se calibre automatiquement pour chaque groupe d\'âge; les questions s\'adaptent au niveau de l\'enfant.',
  },
  {
    q: 'Que m\'apprend le rapport?',
    a: 'Le rapport contient les scores de percentile dans quatre domaines cognitifs par rapport aux normes d\'âge internationales, le domaine le plus fort, le domaine prioritaire de développement et des insights parentaux générés par IA pour chaque domaine. Un guide concret pour choisir une école et prendre des décisions sur le soutien ciblé.',
  },
  {
    q: 'En quoi est-ce différent des tests scolaires?',
    a: 'Les tests scolaires mesurent les connaissances d\'un programme spécifique. Ce test mesure le potentiel cognitif — comment l\'enfant pense — indépendamment du programme. Il permet une comparaison équitable entre enfants de différents pays ou systèmes scolaires.',
  },
  {
    q: 'Mon enfant a une intelligence spatiale élevée mais de mauvaises notes. Est-ce normal?',
    a: 'Très courant. Une intelligence spatiale élevée est généralement sous-estimée par les tests académiques standard. Selon les données de l\'OCDE, les élèves dans le quartile supérieur du raisonnement fluide mais dans la moitié inférieure des résultats scolaires représentent 12 à 18% de tous les élèves — un groupe chroniquement sous-estimé par les systèmes scolaires.',
  },
  {
    q: 'Puis-je partager les résultats avec l\'école?',
    a: 'Oui. Un rapport d\'évaluation standardisé transforme les réunions parents-professeurs et les entretiens d\'orientation. "97e percentile en raisonnement spatial" est un outil de plaidoyer bien plus puissant que "semble intelligent mais dispersé."',
  },
  {
    q: "Cela identifie-t-il la surdouance ou les talents spéciaux?",
    a: 'Oui. Un score supérieur au 90e percentile dans les trois domaines est un indicateur fort pour un programme de surdouance. Le test détecte également les incohérences dans les profils de scores, orientant vers une évaluation spécialisée pour la dyslexie, la dyscalculie ou la double exceptionnalité.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/fr/potentiel-de-votre-enfant#webpage`,
  url: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
  name: 'Quelles sont les Forces et Faiblesses de Mon Enfant? — Test Cognitif Gratuit',
  description: 'Découvrez les forces et faiblesses de votre enfant en 35 minutes. Évaluation cognitive adaptative gratuite selon les normes PISA, SAT et GCSE.',
  inLanguage: 'fr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/fr/potentiel-de-votre-enfant#service`,
  name: 'Évaluation Cognitive Enfant',
  description: 'Évaluation cognitive adaptative gratuite pour les enfants de 6 à 17 ans. Compare le raisonnement verbal, numérique et spatial selon les normes PISA, SAT et GCSE.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
  inLanguage: 'fr',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/fr` },
    { '@type': 'ListItem', position: 2, name: 'Potentiel de Votre Enfant', item: `${BASE_URL}/fr/potentiel-de-votre-enfant` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const RELATED_POSTS = [
  { href: '/fr/blog/test-academique-gratuit-forces-faiblesses-enfant', tag: 'Évaluation', title: 'Test Académique Gratuit: Découvrez les Forces et Faiblesses de Votre Enfant' },
  { href: '/fr/blog/decouvrir-forces-cachees-enfant-guide-parents-moderne', tag: 'Guide', title: 'Découvrir les Forces Cachées de Votre Enfant: Guide Moderne pour Parents' },
  { href: '/fr/blog/enfant-intelligent-mauvaises-notes', tag: 'Guide', title: 'Enfant Intelligent, Mauvaises Notes: Guide pour Parents' },
]

export default function PotentielDeVotreEnfantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">Propulsé par</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (Singapour)</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Évaluation Cognitive Gratuite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Découvrez les Vraies Forces et Faiblesses Cognitives de Votre Enfant
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Comparez les capacités cognitives et la préparation académique selon les normes internationales <strong>PISA, SAT et GCSE</strong> en 35 minutes. Révélez le vrai potentiel que les notes scolaires ne montrent pas.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Évaluer le Potentiel Cognitif (Gratuit)
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            Comparaison Internationale Gratuite &nbsp;•&nbsp; 100% Confidentiel &nbsp;•&nbsp; Rapport PDF de Profil Cognitif Instantané
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'Modèles IRT Standard' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'Entité Enregistrée à Singapour' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'Moteur de Test Adaptatif' },
            { icon: '🔒', label: 'Conforme RGPD', sub: 'Confidentialité des Données Élèves' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900">{b.label}</span>
              <span className="text-[11px] text-gray-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quelles sont les forces et faiblesses de mon enfant?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Les forces et faiblesses académiques de votre enfant sont mesurées dans trois domaines cognitifs indépendants:</strong> le raisonnement verbal (compréhension du langage et analogies), le raisonnement numérique (reconnaissance de motifs et logique mathématique) et la pensée visuo-spatiale (analyse des formes et relations 3D). Le test adaptatif gratuit produit un score de percentile distinct pour chaque domaine par rapport aux normes d&apos;âge internationales — montrant clairement où il est vraiment fort et où un soutien ciblé ferait la plus grande différence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Les notes scolaires ne peuvent pas répondre à cette question — car elles mesurent les connaissances d&apos;un programme spécifique dans une école, avec un enseignant donné. Elles ne mesurent pas le potentiel cognitif selon les normes internationales. Selon les données de l&apos;OCDE, les élèves dans le quartile supérieur du raisonnement fluide mais dans la moitié inférieure des résultats scolaires représentent <strong>12 à 18%</strong> de tous les élèves — un groupe chroniquement sous-estimé par les systèmes scolaires. La méta-analyse de John Hattie (plus de 900 études) identifie l&apos;évaluation diagnostique avec un effet de taille de 0,67 — parmi les interventions éducatives les plus efficaces.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Démarrer l&apos;évaluation gratuite →
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Que mesurons-nous?</h2>
            <p className="text-gray-500 text-base">Quatre domaines cognitifs indépendants — chacun mesuré avec un score de percentile international distinct.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">La Base Scientifique d&apos;Eduentry</h2>
            <p className="text-gray-500 text-base">Pourquoi est-ce différent des tests et questionnaires ordinaires?</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            La même architecture de test est utilisée dans <strong>NWEA MAP</strong> et <strong>CAT4</strong>, des évaluations standard appliquées à plus de 10 millions d&apos;élèves dans le monde. La méta-analyse de John Hattie portant sur plus de 900 études identifie la taille d&apos;effet de l&apos;évaluation diagnostique à 0,67 — parmi les interventions éducatives les plus efficaces.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Exemple de Rapport: Profil de Talent Mondial</h2>
          <p className="text-gray-500 text-base mb-10">Lorsque le test est terminé, les parents reçoivent un rapport détaillé montrant les classements en percentile dans quatre domaines et les points forts/axes de développement.</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Profil de Talent Mondial</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · Rapport d&apos;Évaluation Cognitive</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Anglais & Littératie', score: '87', pct: '82e Percentile' },
                    { label: 'Mathématiques & Numérique', score: '94', pct: '91e Percentile' },
                    { label: 'Raisonnement Verbal', score: '79', pct: '74e Percentile' },
                    { label: 'Raisonnement Spatial', score: '112', pct: '97e Percentile' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 Domaine le Plus Fort: Raisonnement Spatial</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">Votre enfant performe bien au-dessus de la norme d&apos;âge internationale en reconnaissance de motifs et en raisonnement spatial. Ce domaine présente une forte corrélation avec les STEM, l&apos;ingénierie et le design.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">Voir l&apos;exemple de rapport complet →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              Évaluer le Potentiel Cognitif (Gratuit)
            </Link>
            <p className="mt-3 text-xs text-gray-500">Comparaison Internationale Gratuite &nbsp;•&nbsp; 100% Confidentiel &nbsp;•&nbsp; Rapport PDF de Profil Cognitif Instantané</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Questions Fréquentes</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{q}</span>
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Guides Associés</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1">Magenta Networks Pte Ltd (Singapour)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
          Démarrer l&apos;évaluation gratuite →
        </Link>
      </div>
    </>
  )
}

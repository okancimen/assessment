import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Méthodologie d\'évaluation — Comment fonctionne Eduentry',
  description: 'Comment Eduentry utilise la Théorie de Réponse à l\'Item (TRI) à 2 paramètres et l\'estimation MAP pour produire des scores académiques standardisés pour les enfants de 6 à 17 ans, comparés internationalement.',
  keywords: 'Théorie de Réponse à l\'Item enfants, évaluation adaptative TRI, score standardisé enfants, estimation MAP, méthodologie évaluation éducative, test adaptatif',
  alternates: {
    canonical: `${BASE_URL}/fr/methodologie`,
    languages: { fr: `${BASE_URL}/fr/methodologie`, 'en-GB': `${BASE_URL}/methodology`, tr: `${BASE_URL}/tr/metodoloji`, es: `${BASE_URL}/es/metodologia`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Comment fonctionne Eduentry — Méthodologie d\'évaluation adaptative TRI',
    description: 'TRI à 2 paramètres, estimation MAP, score standardisé (moyenne 100, ET 15) et comparaison internationale avec le programme britannique, PISA, US et IB.',
    url: `${BASE_URL}/fr/methodologie`,
    locale: 'fr_FR',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/fr` },
    { '@type': 'ListItem', position: 2, name: 'Méthodologie', item: `${BASE_URL}/fr/methodologie` },
  ],
}

export default function MethodologiePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/fr" className="hover:text-[#1d1d1f]">Accueil</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Méthodologie</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">Méthodologie</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Comment fonctionne l&apos;évaluation adaptative d&apos;Eduentry</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          Eduentry utilise la même méthodologie psychométrique que les évaluations cognitives professionnelles —
          la Théorie de Réponse à l&apos;Item avec des questions adaptatives — pour produire des scores précis et
          comparables internationalement pour les enfants de 6 à 17 ans.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* Adaptive Testing */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Évaluation adaptative</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Contrairement à un test fixe où tous les enfants répondent aux mêmes questions, Eduentry s&apos;adapte en temps réel.
            Après chaque réponse, le système met à jour son estimation du niveau de compétence de l&apos;enfant et sélectionne
            la prochaine question pour fournir une précision de mesure maximale à ce niveau.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Cela signifie qu&apos;un enfant qui répond correctement reçoit des questions plus difficiles ; celui qui a des difficultés
            reçoit des questions plus faciles. Résultat : moins de questions sont nécessaires pour atteindre la même précision de mesure
            qu&apos;un test traditionnel à longueur fixe.
          </p>
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#4F46E5] mb-2">Avantage principal</p>
            <p className="text-[#1d1d1f] text-sm leading-relaxed">
              Un test adaptatif de 15 questions peut égaler la précision d&apos;un test fixe de 100 questions,
              car chaque question est choisie pour être maximalement informative pour cet enfant spécifique.
            </p>
          </div>
        </section>

        {/* IRT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Théorie de Réponse à l&apos;Item (TRI)</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Eduentry utilise le <strong className="text-[#1d1d1f]">modèle logistique à 2 paramètres (2PL TRI)</strong> — le même modèle
            utilisé par PISA, les évaluations standardisées à grande échelle et les psychologues éducatifs professionnels.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">Chaque question possède deux paramètres :</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Difficulté (b)</strong> — le niveau de compétence auquel un enfant a 50% de probabilité de répondre correctement.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Discrimination (a)</strong> — dans quelle mesure la question différencie les enfants juste en dessous et juste au-dessus du seuil de difficulté.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73] leading-relaxed">
            L&apos;estimation de compétence utilise l&apos;<strong className="text-[#1d1d1f]">estimation du Maximum A Posteriori (MAP)</strong> avec une
            distribution a priori normale standard. Après chaque réponse, la distribution postérieure sur la compétence est
            mise à jour via le théorème de Bayes, et l&apos;estimation MAP est prise comme estimation de compétence actuelle.
          </p>
        </section>

        {/* Scoring Scale */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Échelle de scoring</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Les estimations de compétence TRI brutes (θ) sont transformées en une échelle standardisée avec
            <strong className="text-[#1d1d1f]"> moyenne 100 et écart-type 15</strong> — la même échelle utilisée par
            CAT4, les tests standardisés du 11+ et les évaluations cognitives professionnelles comme WISC et WASI.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Plage de score</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Bande</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Percentile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5f7]">
                <tr className="bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                  <td className="py-3 px-4 text-emerald-700">Exceptionnel</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentile 90+</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">110–119</td>
                  <td className="py-3 px-4 text-blue-700">Au-dessus de la moyenne</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentile 75–90</td>
                </tr>
                <tr className="bg-[#eef2ff]">
                  <td className="py-3 px-4 font-semibold text-[#4F46E5]">95–109</td>
                  <td className="py-3 px-4 text-[#4F46E5]">Dans la moyenne</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentile 37–73</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">85–94</td>
                  <td className="py-3 px-4 text-amber-700">En dessous de la moyenne</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Percentile 16–37</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-3 px-4 font-semibold text-red-700">Moins de 85</td>
                  <td className="py-3 px-4 text-red-700">Nécessite un soutien</td>
                  <td className="py-3 px-4 text-[#6e6e73]">En dessous du percentile 16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6e6e73] mt-3">
            68% des enfants obtiennent un score entre 85 et 115 (dans ±1 écart-type de la moyenne).
          </p>
        </section>

        {/* International Benchmarks */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Références internationales</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Eduentry mappe chaque bande de score à quatre cadres éducatifs reconnus internationalement,
            donnant aux familles un contexte mondial des performances de leur enfant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                flag: '🇬🇧',
                name: 'Programme National britannique',
                detail: 'Les scores sont mappés à : en dessous du niveau attendu / approchant / atteignant / au-dessus / très capable. Les scores compétitifs pour l\'accès aux grammar schools sont généralement 115+.',
                color: 'border-blue-100 bg-blue-50',
              },
              {
                flag: '🇺🇸',
                name: 'Niveaux de classe américains',
                detail: 'Les scores sont mappés à : en dessous / approchant / au / au-dessus / significativement au-dessus du niveau de classe, alignés avec le Common Core et les descripteurs de compétence NAEP.',
                color: 'border-violet-100 bg-violet-50',
              },
              {
                flag: '🌍',
                name: 'PISA (OCDE)',
                detail: 'Les scores sont mappés aux niveaux de compétence PISA de 1 à 6. La performance moyenne de l\'OCDE correspond approximativement au Niveau 3, équivalent à un score standardisé proche de 100.',
                color: 'border-emerald-100 bg-emerald-50',
              },
              {
                flag: '🎓',
                name: 'Programme IB',
                detail: 'Les scores indiquent la préparation au Programme des Années Intermédiaires du IB, au Niveau Standard du IB, ou aux matières de Niveau Supérieur du Programme du Diplôme.',
                color: 'border-amber-100 bg-amber-50',
              },
            ].map(({ flag, name, detail, color }) => (
              <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
                  <span className="font-semibold text-[#1d1d1f] text-sm">{name}</span>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you learn */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Ce que vous apprenez avec les résultats</h2>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'Score standardisé et catégorie de performance', desc: 'Un score sur l\'échelle moyenne-100, ET-15, classé dans l\'une des cinq bandes : Nécessite un soutien (70–84), En dessous de la moyenne (85–94), Dans la moyenne (95–109), Au-dessus de la moyenne (110–119) ou Exceptionnel (120+).' },
              { title: 'Classement percentile mondial', desc: 'Comment l\'élève se comporte par rapport à ses pairs du même âge dans le monde entier, exprimé en percentile (ex. top 10%, top 25%).' },
              { title: 'Détail par matière', desc: 'Scores individuels et bandes de performance pour l\'Anglais, les Mathématiques, le Raisonnement Verbal et le Raisonnement Non Verbal.' },
              { title: 'Comparaison internationale', desc: 'Le score mappé aux niveaux du Programme National britannique, aux équivalents de classe américains, aux niveaux de compétence PISA et à la préparation au programme IB.' },
              { title: 'Recommandations personnalisées générées par IA', desc: 'Recommandations d\'étude spécifiques basées sur le profil de performance de l\'élève, mettant en évidence les domaines les plus susceptibles d\'améliorer le score global.' },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] block" />
                </span>
                <span className="text-[#6e6e73] leading-relaxed">
                  <strong className="text-[#1d1d1f]">{title}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Blog */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Du blog</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fr/blog/comment-se-compare-votre-enfant', label: 'Comment votre enfant se compare-t-il à l\'échelle mondiale ?', desc: 'Guide sur les références internationales : PISA, programme UK et IB expliqués pour les parents.' },
            { href: '/fr/blog/stages-lycee-avantages-universite', label: 'Stages au lycée et l\'université', desc: 'Pourquoi les scores standardisés comptent dans l\'accès universitaire.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Voir le percentile de votre enfant</h2>
        <p className="text-[#6e6e73] mb-6">Évaluation gratuite · 6–17 ans · Résultats en 90 minutes</p>
        <Link href="/fr/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          Commencer l&apos;évaluation gratuite
        </Link>
      </div>
    </main>
  )
}

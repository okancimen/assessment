import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import TestimonialsCarouselES from '@/components/landing/TestimonialsCarouselES'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — Plateforme d\'évaluation académique et de stage',
  description:
    'Évaluations adaptatives gratuites pour les élèves à toutes les étapes — comparaison académique internationale pour les 6–17 ans, et évaluation de stage pour les lycéens de plus de 14 ans.',
  keywords: [
    'évaluation académique gratuite enfants',
    'référence internationale enfants France',
    'score standardisé percentile',
    'évaluation adaptive PISA GCSE',
    'préparation 11+ test gratuit',
    'référence académique 6 17 ans',
    'évaluation préparation stage lycée',
    'test aptitude stage lycée',
    'évaluation orientation professionnelle élèves',
    'test gratuit évaluation enfants',
    'raisonnement verbal non verbal test',
  ],
  alternates: {
    canonical: `${BASE_URL}/fr`,
    languages: { fr: `${BASE_URL}/fr`, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/fr`,
    title: 'Eduentry — Plateforme d\'évaluation académique et de stage',
    description: 'Évaluations adaptatives gratuites fondées sur la même science que PISA, GCSE et SAT. Comparaison académique pour les 6–17 ans et évaluation de stage pour les 14+.',
    locale: 'fr_FR',
    images: [{ url: `${BASE_URL}/fr/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — Plateforme d\'évaluation académique et de stage' }],
  },
}

const SUBJECT_LABELS_FR: Record<string, string> = {
  english:             'Anglais',
  mathematics:         'Mathématiques',
  verbal_reasoning:    'Raisonnement Verbal',
  nonverbal_reasoning: 'Raisonnement Non Verbal',
}

const SUBJECT_DESCRIPTIONS_FR: Record<string, string> = {
  english:             'Compréhension, grammaire, orthographe et ponctuation',
  mathematics:         'Opérations numériques, algèbre, géométrie et traitement des données',
  verbal_reasoning:    'Résolution de problèmes avec des mots et pensée critique',
  nonverbal_reasoning: 'Reconnaissance de modèles à l\'aide de formes et d\'éléments visuels abstraits',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const BELL_SUBJECTS_FR = [
  { score: 103, label: 'Anglais',    color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'Maths',      color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'Verbal',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'Non-Verb.',  color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_FR = [
  { q: 'Eduentry est-il gratuit ?', a: 'Oui, entièrement gratuit. Pas d\'abonnement, pas de frais cachés, pas de niveaux premium. Créez un compte gratuit, ajoutez le profil de votre enfant et commencez l\'évaluation sans aucun frais.' },
  { q: 'Quelles matières couvre l\'évaluation académique ?', a: 'Anglais (compréhension de lecture, grammaire, vocabulaire), Mathématiques (arithmétique, algèbre, géométrie, résolution de problèmes), Raisonnement Verbal (analogies, classifications, séquences) et Raisonnement Non Verbal (motifs, raisonnement spatial, matrices). Chaque matière comporte 15 questions adaptatives.' },
  { q: 'Qu\'est-ce qu\'un classement par percentile ?', a: 'Un classement par percentile montre comment votre enfant se compare à tous les enfants du même âge. Un score au percentile 80 signifie que votre enfant a obtenu de meilleurs résultats que 80 % des enfants de cet âge. Eduentry utilise une échelle standardisée avec une moyenne de 100 et un écart-type de 15 — la même échelle utilisée par PISA et la plupart des évaluations professionnelles.' },
  { q: 'Qu\'est-ce que l\'évaluation de stage ?', a: 'Une évaluation adaptative distincte de 34 questions pour les lycéens de plus de 14 ans. Elle évalue l\'aptitude générale, les connaissances sectorielles, les compétences professionnelles et le profil d\'intérêts dans quatre domaines : Technologie, Entreprise, Analyse de données et Marketing digital. Les résultats comprennent un rapport de préparation personnalisé et des insights de carrière générés par IA.' },
  { q: 'Combien de temps dure chaque évaluation ?', a: 'L\'évaluation académique comporte 60 questions en 4 matières — la plupart des enfants la complètent en 60–90 minutes. L\'évaluation de stage comporte 34 questions — la plupart des élèves la terminent en environ 35 minutes. La progression est sauvegardée automatiquement, les deux peuvent donc être mises en pause et reprises à tout moment.' },
  { q: 'Comment fonctionne la technologie adaptative ?', a: 'Eduentry utilise la Théorie de Réponse à l\'Item Logistique à 2 Paramètres (2PL) avec estimation MAP — le même modèle utilisé dans PISA, GCSE et SAT. Après chaque réponse, le système met à jour son estimation du niveau de l\'élève et sélectionne la question suivante pour maximiser la précision de mesure.' },
  { q: 'Puis-je ajouter plusieurs enfants ?', a: 'Oui. Un seul compte parent peut inclure plusieurs profils d\'enfants. Chaque enfant dispose de son propre historique d\'évaluations, de ses scores et de recommandations personnalisées. Il n\'y a pas de limite au nombre d\'enfants que vous pouvez ajouter.' },
  { q: 'Mes données sont-elles privées ?', a: 'Oui. Toutes les données sont stockées en toute sécurité avec une sécurité au niveau des lignes — seul vous pouvez accéder à vos résultats. Nous ne vendons ni ne partageons les données avec des tiers. Le service est entièrement conforme au RGPD.' },
]

const FAQ_SCHEMA_FR = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_FR.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

export default function FrenchHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_FR) }} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            Évaluations pour chaque étape de l&apos;apprentissage
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            La bonne évaluation,
            <br />
            <span className="text-[#4F46E5]">au bon moment.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Évaluations adaptatives gratuites fondées sur la même science que PISA, GCSE et SAT.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                Évaluation Académique
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                Comment votre enfant se compare-t-il à l&apos;échelle mondiale ?
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                Comparé aux standards britanniques, américains, PISA et IB — scores standardisés
                et classements par percentile en Anglais, Mathématiques, Raisonnement Verbal et Non Verbal.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60 questions adaptatives</span>
                <span>·</span>
                <span>4 matières</span>
                <span>·</span>
                <span>6–17 ans</span>
                <span>·</span>
                <span>Gratuit</span>
              </div>
              <CtaLink
                href="/fr/auth/register"
                label="hero_academic_fr"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                Commencer l&apos;évaluation gratuite
              </CtaLink>
              <Link href="#academique" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                En savoir plus ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  Évaluation de Stage
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Nouveau
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                Votre lycéen est-il prêt pour le monde professionnel ?
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                Une évaluation adaptative de 34 questions sur l&apos;aptitude, les connaissances sectorielles, les compétences
                professionnelles et le profil d&apos;intérêts. Rapport de préparation personnalisé et insights IA sur la carrière.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34 questions adaptatives</span>
                <span>·</span>
                <span>4 domaines professionnels</span>
                <span>·</span>
                <span>14+ ans</span>
                <span>·</span>
                <span>Gratuit</span>
              </div>
              <a
                href="https://eduentry.ai/fr"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Découvrir le programme
              </a>
              <Link href="#stages" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                En savoir plus ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust line ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          Fondée sur la même science que PISA, GCSE &amp; SAT &nbsp;·&nbsp; Conforme au RGPD &nbsp;·&nbsp; Gratuite
        </p>
      </section>

      {/* ── Social proof ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialsCarouselES />
        </div>
      </section>

      {/* ── Academic section ──────────────────────────────────────────────── */}
      <section id="academique" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">Évaluation Académique · 6–17 ans</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                Découvrez où se situe votre enfant<br />à l&apos;échelle internationale.
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                Une évaluation adaptative gratuite qui mesure l&apos;Anglais, les Mathématiques, le Raisonnement Verbal et Non Verbal
                comparé aux standards britanniques, américains, PISA et IB. Les résultats incluent un score standardisé,
                un classement par percentile et des recommandations générées par IA.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/fr/auth/register"
                  label="academic_section_fr"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Commencer l&apos;évaluation gratuite
                </CtaLink>
                <Link href="/fr/methodologie" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  Comment fonctionne le score →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">Exemple de résultat</p>
                    <p className="font-bold text-white mt-1">Emma · 11 ans</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Au-dessus de la moyenne</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Anglais',           score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Mathématiques',      score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Raz. Verbal',        score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'Raz. Non Verbal',    score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">Développé par</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_FR} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Quatre matières. Une vision globale.
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              Les quatre domaines évalués par PISA, TIMSS et les programmes nationaux britanniques et américains —
              chacun s&apos;adapte en difficulté pour identifier le niveau exact de votre enfant.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_FR[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_FR[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="methodologie" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">La science derrière le score</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Fondée sur la même science que<br />les évaluations internationales.
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              Eduentry utilise les mêmes modèles psychométriques que PISA, GCSE et SAT —
              pour que les résultats de votre enfant soient directement comparables aux standards internationaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Modèle TRI à 2 Paramètres', desc: 'Chaque question a une difficulté et une discrimination calibrées. Les scores reflètent la difficulté des questions répondues correctement — pas seulement le total brut.', tag: 'Utilisé dans PISA · SAT · GCSE', color: '#4F46E5' },
              { title: 'Algorithme Adaptatif en Temps Réel', desc: 'Les questions sont sélectionnées en utilisant l\'Information de Fisher pour maximiser la précision de mesure. Chaque réponse met à jour l\'estimation de compétence et sélectionne la question optimale suivante.', tag: 'Évaluation Adaptative par Ordinateur', color: '#0D9488' },
              { title: 'Comparaison Internationale', desc: 'Les scores utilisent la même échelle moyenne-100, ET-15 que PISA. Les résultats sont mappés au Programme National britannique, aux attentes de niveau américain, aux niveaux de compétence PISA et à la préparation IB.', tag: 'UK · US · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">Ce que signifie le score</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Nécessite un soutien',      color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'En dessous de la moyenne',  color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Dans la moyenne',           color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Au-dessus de la moyenne',   color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Exceptionnel',              color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              68% des enfants obtiennent un score entre 85 et 115 (dans 1 écart-type de la moyenne)
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section id="comment-ca-marche" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Évaluation Académique · Simple à démarrer</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              De l&apos;inscription aux résultats<br />en moins de deux heures.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Créez un compte gratuit', desc: 'Inscrivez-vous en tant que parent et ajoutez le nom et la date de naissance de votre enfant. L\'évaluation s\'adapte automatiquement à son âge exact.' },
              { step: '02', title: 'Votre enfant passe 4 tests adaptatifs', desc: '60 questions en quatre matières, réalisées à la maison à son propre rythme. Chaque question s\'adapte — plus difficile en cas de bonne réponse, plus facile en cas d\'erreur.' },
              { step: '03', title: 'Découvrez le contexte mondial', desc: 'Scores standardisés, références internationales pour le UK, US, PISA et IB, recommandations générées par IA et rapport imprimable.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/fr/auth/register" label="how_it_works_fr" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Commencer l&apos;évaluation gratuite →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ────────────────────────────────────────────── */}
      <section id="stages" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Évaluation de Stage · Nouveau
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Découvrez votre niveau de préparation au stage.
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              Une évaluation adaptative de 34 questions pour les lycéens de plus de 14 ans. Découvrez votre aptitude,
              vos points forts par domaine, vos compétences professionnelles et le secteur le plus adapté — avec un rapport IA personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Créez un compte étudiant gratuit', desc: 'Inscrivez-vous vous-même ou acceptez l\'invitation de vos parents. Renseignez votre lycée, votre classe, vos préférences de domaine et une brève déclaration personnelle sur vos objectifs.' },
              { step: '02', title: 'Complétez 4 phases d\'évaluation', desc: 'Aptitude générale, connaissances sectorielles, compétences professionnelles (SJT) et profil d\'intérêts — 34 questions adaptatives au total. Entièrement reprendable, dure environ 35 minutes.' },
              { step: '03', title: 'Recevez votre rapport de préparation', desc: 'Obtenez votre niveau de préparation au stage, un résumé de vos points forts généré par IA et des insights personnalisés par phase sur l\'aptitude, le domaine et les compétences professionnelles.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Technologie',        color: '#4F46E5' },
              { label: 'Entreprise',         color: '#0D9488' },
              { label: 'Analyse de données', color: '#7C3AED' },
              { label: 'Marketing digital',  color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://eduentry.ai/fr" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Demander l&apos;évaluation de stage →
            </a>
          </div>
        </div>
      </section>

      {/* ── What you get ──────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">Ce que vous obtenez</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">Évaluation Académique</p>
              <ul className="space-y-3">
                {[
                  'Score standardisé sur une échelle de 85–130',
                  'Classement par percentile pour l\'âge exact',
                  'Détail par matière dans les 4 domaines',
                  'Références internationales — UK, US, PISA, IB',
                  'Recommandations d\'étude générées par IA',
                  'Rapport complet imprimable',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/fr/auth/register" label="what_you_get_academic_fr" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  Commencer gratuitement →
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">Évaluation de Stage</p>
              <ul className="space-y-3">
                {[
                  'Niveau de préparation — Prêt / En développement / Nécessite un soutien',
                  'Paragraphe de résumé de carrière généré par IA',
                  'Insights par phase — aptitude, domaine, compétences professionnelles',
                  'Correspondance de domaine dans les 4 secteurs professionnels',
                  'Points forts personnalisés et axes d\'amélioration',
                  'Rapport utilisable dans votre candidature universitaire',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <a href="https://eduentry.ai/fr" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  Demander l&apos;évaluation →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">Questions.</h2>
          </div>
          <div className="space-y-2">
            {FAQ_FR.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            Vous voulez comprendre la méthodologie de scoring ?{' '}
            <Link href="/fr/methodologie" className="text-[#4F46E5] hover:underline font-medium">
              Lisez comment fonctionne Eduentry →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ──────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">Derniers articles</h2>
            <Link href="/fr/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">Voir tout →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_FR.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/fr/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">Évaluation Académique</p>
            <h2 className="text-2xl font-bold text-white mb-3">Découvrez où se situe votre enfant — à l&apos;échelle mondiale.</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">Contexte international complet en moins de 2 heures.</p>
            <CtaLink href="/fr/auth/register" label="bottom_cta_academic_fr" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Commencer l&apos;évaluation gratuite →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Évaluation de Stage</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Découvrez le niveau de préparation au stage de votre lycéen.</h2>
            <p className="text-[#636366] text-sm mb-8">Rapport personnalisé et insights IA en 35 minutes.</p>
            <a href="https://eduentry.ai/fr" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              Demander l&apos;évaluation →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

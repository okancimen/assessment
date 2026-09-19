import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Évaluation Stage Lycéen Gratuite — Eduentry',
  description:
    'Évaluation adaptative gratuite de 34 questions pour lycéens dès 14 ans. Découvre ta filière idéale — Tech, Entreprise, Data ou Marketing Digital — en 35 minutes. Rapport personnalisé instantané.',
  keywords: [
    'stage lycéen',
    'stage entreprise lycée',
    'stage de 3ème',
    'trouver un stage lycée',
    'évaluation stage lycéen',
    'stage découverte professionnel',
    'stage été lycéen',
    'préparer son stage',
    'stage marketing digital lycéen',
    'stage data analyse lycéen',
  ],
  alternates: {
    canonical: `${BASE_URL}/fr/stage`,
    languages: {
      fr: `${BASE_URL}/fr/stage`,
      'en-GB': `${BASE_URL}/internship`,
      tr: `${BASE_URL}/tr/staj`,
      es: `${BASE_URL}/es/practicas`,
      ar: `${BASE_URL}/ar/tadrib`,
      ru: `${BASE_URL}/ru/stazhirovka`,
      zh: `${BASE_URL}/zh/shixi`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Évaluation Stage Lycéen Gratuite — Eduentry',
    description:
      'Évaluation adaptative gratuite de 34 questions pour lycéens dès 14 ans. Rapport personnalisé en 35 minutes.',
    url: `${BASE_URL}/fr/stage`,
    locale: 'fr_FR',
    images: [{ url: `${BASE_URL}/fr/stage/opengraph-image`, width: 1200, height: 630, alt: 'Évaluation Stage Lycéen Gratuite — Eduentry' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/fr/stage#service`,
  name: 'Évaluation de Préparation au Stage — Eduentry',
  description:
    'Évaluation adaptative gratuite de 34 questions pour lycéens dès 14 ans. Mesure les aptitudes générales, les connaissances du domaine, les compétences professionnelles et le profil d\'intérêt. Rapport personnalisé instantané.',
  url: `${BASE_URL}/fr/stage`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'France' },
  audience: { '@type': 'Audience', audienceType: 'Lycéens de 14 ans et plus' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/fr` },
    { '@type': 'ListItem', position: 2, name: 'Stage', item: `${BASE_URL}/fr/stage` },
  ],
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/fr/stage#webpage`,
  url: `${BASE_URL}/fr/stage`,
  name: 'Évaluation Stage Lycéen Gratuite — Eduentry',
  description: 'Évaluation adaptative gratuite de 34 questions pour lycéens dès 14 ans. Découvre ta filière idéale — Tech, Entreprise, Data ou Marketing Digital — en 35 minutes.',
  inLanguage: 'fr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/fr/stage#service` },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'L\'évaluation est-elle vraiment gratuite ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, entièrement gratuite. Aucun abonnement, aucun frais cachés, aucun niveau premium. Crée un compte gratuit et commence immédiatement.' },
    },
    {
      '@type': 'Question',
      name: 'À quel âge peut-on faire un stage en France ?',
      acceptedAnswer: { '@type': 'Answer', text: 'En France, les stages d\'observation en entreprise sont possibles dès la 3e (environ 14 ans). Les stages de découverte professionnelle et les stages d\'été pour lycéens sont généralement ouverts à partir de 14–15 ans, avec l\'accord des parents et de l\'établissement scolaire.' },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un stage lycéen en France ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les principales voies : (1) réseau familial et entourage — c\'est la voie la plus rapide pour un premier stage ; (2) candidatures spontanées par e-mail aux PME locales ; (3) plateformes dédiées comme Springpod et Virtual Work Experience pour les stages à distance ; (4) coordinateur de carrière ou CPE de l\'établissement scolaire. Un e-mail court, personnalisé et direct aux PME obtient souvent une réponse positive.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle filière de stage choisir ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'évaluation Eduentry t\'aide à identifier ta filière idéale parmi quatre : Technologie, Entreprise, Analyse de Données et Marketing Digital. Elle mesure tes aptitudes, tes connaissances du domaine et tes compétences en milieu professionnel pour t\'orienter vers la filière où tu as le plus de chances de réussir et d\'apprécier ton expérience.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure l\'évaluation ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'évaluation comporte 34 questions adaptatives réparties en 4 phases et dure environ 35 minutes. Elle est entièrement suspendable et reprise automatiquement — pas besoin de la terminer en une seule fois.' },
    },
    {
      '@type': 'Question',
      name: 'Que contient le rapport de préparation ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le rapport personnalisé inclut : ton niveau de préparation (Prêt pour le Stage, En Progression ou Soutien Nécessaire), un résumé généré par l\'IA sur tes performances, et des insights par phase de l\'évaluation avec tes points forts et un axe de développement.' },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un stage d\'été lycéen ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les grandes entreprises ouvrent leurs candidatures pour les programmes d\'été entre janvier et mars — ces places partent vite. Les PME et entreprises locales acceptent des candidatures tout au long de l\'année, avec un pic mars–mai. L\'idéal : postuler 3 à 6 mois à l\'avance pour les grands groupes, et en janvier–mars pour les entreprises locales.' },
    },
    {
      '@type': 'Question',
      name: 'Le stage compte-t-il pour le bac ou Parcoursup ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le stage n\'est pas directement noté pour le bac. En revanche, une expérience professionnelle bien valorisée dans la fiche avenir et dans les appréciations des professeurs peut renforcer significativement un dossier Parcoursup — notamment pour les BTS, IUT, classes prépa et certaines licences sélectives.' },
    },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: 'Technologie', desc: 'Développement logiciel, pensée systémique et résolution de problèmes techniques.' },
  { key: 'business', icon: '📈', label: 'Entreprise', desc: 'Commerce, pensée stratégique et communication organisationnelle.' },
  { key: 'data_analytics', icon: '📊', label: 'Analyse de Données', desc: 'Raisonnement quantitatif, interprétation des données et prise de décision fondée sur les preuves.' },
  { key: 'digital_marketing', icon: '📣', label: 'Marketing Digital', desc: 'Analyse d\'audience, stratégie de contenu et gestion des canaux digitaux.' },
]

const PHASES = [
  { label: 'Aptitude Générale', desc: '10 questions · Raisonnement verbal et quantitatif', icon: '🧠' },
  { label: 'Connaissances du Domaine', desc: '10 questions · Connaissances appliquées à la filière', icon: '📚' },
  { label: 'Compétences Professionnelles', desc: '8 questions · Scénarios réels en entreprise (SJT)', icon: '🤝' },
  { label: 'Profil d\'Intérêt', desc: '6 questions · Style de travail et cartographie des préférences', icon: '🎯' },
]

const TYPES_STAGE = [
  {
    icon: '🏭',
    title: 'Stage de 3e',
    desc: 'Stage d\'observation obligatoire en fin de collège. Généralement 1 semaine, il permet de découvrir un environnement professionnel. Premier contact avec le monde du travail, souvent organisé par l\'établissement.',
    link: '/fr/blog/stage-lyceen-france-comment-trouver',
  },
  {
    icon: '☀️',
    title: 'Stage d\'été',
    desc: 'Stage pendant les vacances scolaires d\'été, généralement 2 à 8 semaines. Le format le plus accessible pour les lycéens, avec une vraie immersion professionnelle. Idéal pour tester un secteur avant de s\'orienter.',
    link: '/fr/blog/stage-ete-france-lyceen',
  },
  {
    icon: '💻',
    title: 'Stage en ligne',
    desc: 'Stage à distance, sans déplacement physique. Très répandu dans la tech, le marketing digital et la data. Permet d\'accéder à des entreprises sans contrainte géographique.',
    link: null,
  },
  {
    icon: '📅',
    title: 'Stage longue durée',
    desc: 'Stage de plusieurs mois, souvent lié à un programme universitaire ou une convention avec l\'école. Offre une immersion professionnelle approfondie et de vraies responsabilités.',
    link: null,
  },
  {
    icon: '🎓',
    title: 'Stage obligatoire',
    desc: 'Stage imposé par l\'établissement dans le cadre du cursus. Nécessite une convention de stage. En lycée professionnel, représente une part importante de la formation.',
    link: null,
  },
  {
    icon: '🤝',
    title: 'Stage volontaire',
    desc: 'Stage non imposé par l\'école, réalisé à l\'initiative de l\'élève. N\'affecte pas les notes mais apporte une valeur considérable pour Parcoursup et le développement personnel.',
    link: '/fr/blog/stages-lycee-avantages-universite',
  },
]

const GUIDE_SLUGS = [
  'stage-lyceen-france-comment-trouver',
  'cv-stage-lyceen-16-ans',
  'entretien-stage-lyceen-conseils',
  'stage-ete-france-lyceen',
  'stage-marketing-digital-lyceen',
  'stage-data-analyse-lyceen',
]
const GUIDES = BLOG_POSTS_FR.filter(p => GUIDE_SLUGS.includes(p.slug))
  .sort((a, b) => GUIDE_SLUGS.indexOf(a.slug) - GUIDE_SLUGS.indexOf(b.slug))

export default function FRStageLandingPage() {
  return (
    <div className="bg-[#f5f5f7]" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Plateforme d&apos;Évaluation Stage
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Prépare ton stage<br />lycéen
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            Évaluation adaptative de 34 questions pour lycéens dès 14 ans. Environ 35 minutes pour obtenir un rapport de préparation personnalisé et découvrir ta filière idéale.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/fr/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/fr/auth/login"
              className="text-[#4F46E5] font-semibold text-base hover:underline"
            >
              Déjà un compte ? Se connecter
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: 'Moins de risque d\'être NEET à 19 ans pour les jeunes ayant eu 4+ contacts employeurs avant 16 ans', source: 'Education and Employers, 2018' },
              { stat: '73 %', desc: 'Des employeurs britanniques considèrent l\'expérience professionnelle antérieure comme le critère le plus important en entretien', source: 'Prospects, 2022' },
              { stat: '70 %', desc: 'De chances supplémentaires de recevoir une offre d\'emploi avant la fin des études pour les étudiants ayant fait un stage', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Filières disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.key} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{track.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{track.label}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Pourquoi c&apos;est important ?</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Des preuves issues de recherches longitudinales sur l&apos;expérience professionnelle précoce.</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Les universités sélectives et les grandes écoles françaises valorisent explicitement l&apos;expérience professionnelle dans les dossiers Parcoursup. Pour les BTS, IUT et classes prépa, une expérience documentée renforce significativement la crédibilité du projet d&apos;études.
              </p>
              <Link href="/fr/blog/stages-lycee-avantages-universite" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                Lire l&apos;analyse complète →
              </Link>
            </div>
          </div>
        </section>

        {/* Types de stage */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Types de stage</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Du stage de 3e au stage d&apos;été, en passant par le stage en ligne — chaque format a ses spécificités.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES_STAGE.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    En savoir plus →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Comment fonctionne l&apos;évaluation ?</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Phase {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Total : 34 questions · ~35 minutes · Entièrement suspendable</span>
            </div>
          </div>
        </section>

        {/* Guides */}
        {GUIDES.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Guides stage lycéen</h2>
            <p className="text-sm text-[#6e6e73] mb-5">Du CV à l&apos;entretien, du stage d&apos;été au marketing digital — tout ce qu&apos;il faut savoir.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDES.map((post) => (
                <Link
                  key={post.slug}
                  href={`/fr/blog/${post.slug}`}
                  className="group bg-white border border-[#d2d2d7] rounded-2xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/30 transition-colors flex flex-col"
                >
                  <div className="text-xs font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5 self-start mb-3">{post.tags[0]}</div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug group-hover:text-[#4F46E5] transition-colors flex-1">{post.shortTitle}</div>
                  <div className="text-xs text-[#6e6e73] mt-2">{post.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Questions fréquentes</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: 'L\'évaluation est-elle vraiment gratuite ?', a: 'Oui, entièrement gratuite. Aucun abonnement, aucun frais cachés, aucun niveau premium. Crée un compte gratuit et commence immédiatement.' },
              { q: 'À quel âge puis-je faire un stage ?', a: 'En France, les stages d\'observation en entreprise sont possibles dès la 3e (environ 14 ans). Les stages d\'été pour lycéens sont généralement ouverts à partir de 14–15 ans avec l\'accord des parents.' },
              { q: 'Quelle filière choisir ?', a: 'Avant de choisir, pense au type de problèmes que tu aimes résoudre : technique et logique → Technologie ; chiffres et décisions → Analyse de Données ; communication et créativité → Marketing Digital ; organisation et stratégie → Entreprise. L\'évaluation t\'aidera à confirmer ton orientation avec des données objectives.' },
              { q: 'Comment trouver un stage lycéen en France ?', a: 'Les voies les plus efficaces : réseau familial, candidatures spontanées par e-mail aux PME locales, plateformes comme Springpod pour les stages à distance, et le coordinateur carrière de ton établissement. Un e-mail court et personnalisé aux petites entreprises obtient souvent une réponse positive.' },
              { q: 'Combien de temps dure l\'évaluation ?', a: 'Environ 35 minutes pour 34 questions en 4 phases. Elle est entièrement suspendable — tu peux reprendre là où tu t\'es arrêté sans recommencer depuis le début.' },
              { q: 'Que contient le rapport de préparation ?', a: 'Ton niveau de préparation (Prêt pour le Stage, En Progression ou Soutien Nécessaire), un résumé IA de tes performances, et des insights par phase avec tes points forts et un axe de développement.' },
              { q: 'Comment trouver un stage d\'été ?', a: 'Les grandes entreprises ouvrent leurs programmes entre janvier et mars — ces places partent vite. Les PME et entreprises locales acceptent des candidatures toute l\'année, avec un pic mars–mai. Postule 3 à 6 mois à l\'avance pour les grands groupes.' },
              { q: 'Le stage aide-t-il pour Parcoursup ?', a: 'Oui. Une expérience professionnelle bien valorisée dans la fiche avenir et les appréciations peut renforcer un dossier Parcoursup — notamment pour les BTS, IUT, classes prépa et certaines licences sélectives.' },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm text-[#1d1d1f]">{q}</span>
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#4F46E5] rounded-3xl px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Évalue ta préparation au stage aujourd&apos;hui</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34 questions · 35 minutes · Rapport personnalisé instantané. Entièrement gratuit.
            </p>
            <Link
              href="/fr/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Commencer l&apos;évaluation gratuite
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/fr`

export const metadata: Metadata = {
  title: { absolute: 'Évaluation de stage — Rapport IA gratuit | Eduentry.ai' },
  description:
    'Évaluation gratuite par IA pour lycéens de 14 à 18 ans. 34 questions adaptatives en Technologie, Entreprise, Données et Marketing. Rapport personnalisé immédiat.',
  keywords: [
    'évaluation stage lycéen France',
    'stage gratuit lycée IA',
    'rapport préparation stage lycéen',
    'stage technologie lycéen',
    'stage entreprise 14 15 16 17 18 ans',
    'stage analyse données lycée',
    'stage marketing digital lycéen',
    'évaluation adaptative orientation professionnelle',
    'test aptitude lycéen gratuit',
    'expérience professionnelle lycée',
    'stage été lycéen',
    'lettre motivation stage lycéen',
    'rapport IA préparation stage personnalisé',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: PAGE_URL, ar: `${BASE_URL}/ar`, ru: `${BASE_URL}/ru`, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'fr_FR',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'ar_AE', 'ru_RU', 'zh_CN'],
    title: 'Évaluation de stage — Rapport IA gratuit | Eduentry.ai',
    description: 'Évaluation gratuite par IA pour lycéens de 14 à 18 ans. 34 questions adaptatives en 4 domaines. Rapport personnalisé immédiat.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Évaluation de préparation au stage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Évaluation de stage — Rapport IA gratuit | Eduentry.ai',
    description: 'Évaluation gratuite par IA pour lycéens de 14 à 18 ans. 34 questions, rapport personnalisé immédiat.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/fr/technologie',
  business: '/fr/entreprise',
  data_analytics: '/fr/analyse-de-donnees',
  digital_marketing: '/fr/marketing-digital',
}

const TRACK_LABELS_FR: Record<string, string> = {
  tech: 'Technologie',
  business: 'Entreprise',
  data_analytics: 'Analyse de données',
  digital_marketing: 'Marketing digital',
}

const TRACK_DESCRIPTIONS_FR: Record<string, string> = {
  tech: 'Logique de programmation, algorithmes, cybersécurité, design UX et développement logiciel',
  business: "Analyse de marché, culture financière, études de cas et stratégie d'entreprise",
  data_analytics: 'Lecture de graphiques, statistiques, raisonnement sur tableaux, bases SQL et interprétation de données',
  digital_marketing: 'SEO, stratégie sur les réseaux sociaux, marketing de contenu et planification de campagnes',
}

const PHASES = [
  { n: '01', label: 'Aptitude générale',           qs: 10, desc: 'Raisonnement verbal et numérique',                 tag: 'Cognitif' },
  { n: '02', label: 'Connaissances du domaine',    qs: 10, desc: 'Connaissances appliquées spécifiques au secteur',  tag: 'Technique' },
  { n: '03', label: 'Compétences professionnelles',qs: 8,  desc: 'Scénarios réels en milieu professionnel (SJT)',    tag: 'Comportemental' },
  { n: '04', label: "Profil d'intérêts",           qs: 6,  desc: 'Style de travail et cartographie des préférences', tag: 'Personnalité' },
]

const FAQS = [
  { q: "L'évaluation est-elle gratuite ?",          a: "Oui — toujours gratuite pour les lycéens. Pas de frais cachés, pas d'abonnement, pas de niveaux payants." },
  { q: 'À qui est-elle destinée ?',                  a: 'Aux lycéens de 14 à 18 ans qui souhaitent acquérir une expérience professionnelle via un stage.' },
  { q: 'Combien de temps cela prend-il ?',           a: "34 questions en quatre phases, environ 20 minutes. L'évaluation est entièrement reprenablee — vous pouvez la mettre en pause et la reprendre à tout moment." },
  { q: 'Quel domaine dois-je choisir ?',             a: "Lors de la candidature, vous pouvez classer jusqu'à trois préférences de domaine. La phase Profil d'intérêts aide aussi à identifier où vous vous épanouissez le mieux — le rapport le reflète." },
  { q: 'Quand est-ce que je reçois mon rapport ?',   a: 'Immédiatement après avoir terminé. Une fois les 34 questions complétées, le score IA est calculé instantanément et le rapport est disponible dans votre compte — sans attente.' },
  { q: "Puis-je mentionner l'évaluation dans mon CV ?", a: "Oui. Votre rapport de préparation comprend un score mesurable et un bilan de compétences par domaine que vous pouvez mentionner directement dans vos candidatures. De nombreux lycéens l'incluent dans leurs lettres de motivation et entretiens." },
  { q: 'Dois-je résider au Royaume-Uni ?',           a: "L'évaluation est ouverte à tout lycéen de 14 à 18 ans. Les stages sont actuellement au Royaume-Uni, vous devrez donc pouvoir y travailler pour le placement lui-même — mais l'évaluation et le rapport sont disponibles partout." },
]

const internshipPosts = BLOG_POSTS_FR.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'fr',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Évaluation de stage — Rapport IA gratuit | Eduentry.ai',
  description: 'Évaluation gratuite par IA pour lycéens de 14 à 18 ans. 34 questions adaptatives en 4 domaines. Rapport personnalisé immédiat.',
  inLanguage: 'fr',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Évaluation de préparation au stage',
  url: PAGE_URL,
  description: "Évaluation adaptative gratuite de 34 questions par IA pour lycéens de 14 à 18 ans. Évalue l'aptitude, les connaissances du domaine, les compétences professionnelles et le profil d'intérêts en quatre domaines : Technologie, Entreprise, Analyse de données et Marketing digital.",
  inLanguage: 'fr',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'Lycéens de 14 à 18 ans' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Évaluation éducative',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment obtenir un stage avec Eduentry.ai',
  description: "Évaluation adaptative gratuite de 34 questions pour lycéens de 14 à 18 ans. Quatre étapes de l'inscription à l'attribution du stage.",
  inLanguage: 'fr',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Créez votre compte', text: "Créez votre compte Eduentry.ai gratuit en moins d'une minute — sans données de paiement." },
    { '@type': 'HowToStep', position: 2, name: 'Candidatez', text: 'Dites-nous qui vous êtes, votre lycée et vos préférences de domaine parmi Technologie, Entreprise, Analyse de données ou Marketing digital.' },
    { '@type': 'HowToStep', position: 3, name: "Complétez l'évaluation", text: "34 questions adaptatives en quatre phases : Aptitude générale, Connaissances du domaine, Compétences professionnelles et Profil d'intérêts. Environ 20 minutes. Reprenez quand vous voulez." },
    { '@type': 'HowToStep', position: 4, name: 'Recevez votre rapport', text: "Obtenez votre rapport de préparation personnalisé rédigé par IA avec votre niveau de préparation, le détail par phase et l'attribution de stage." },
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

export default function FrenchHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-0 sm:blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              Personnalisé · Gratuit · 20 minutes
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Décroche une</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">expérience réelle.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Évaluation adaptative de 34 questions pour lycéens dès 14 ans. Découvre ta préparation dans quatre domaines professionnels et reçois un rapport personnalisé.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Candidater gratuitement
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              Voir un exemple de rapport
            </a>
          </div>

          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">Résultat exemple — les tiens sont personnalisés</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Filières disponibles</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Quatre voies.<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Une évaluation.</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              Comparer toutes les filières →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_FR[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_FR[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      Explorer →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Processus</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            Trois étapes pour y arriver.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'Inscrivez-vous et postulez',  desc: 'Créez votre compte gratuit. Dites-nous qui vous êtes, votre lycée et vos préférences de domaine.' },
              { n: '02', title: "Passez l'évaluation",         desc: '34 questions adaptatives en quatre phases. Reprenez à tout moment — sans pression de temps.' },
              { n: '03', title: 'Obtenez votre rapport',       desc: 'Rapport de préparation rédigé par IA avec scores, insights et attribution de stage.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Structure de l&apos;évaluation</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            À quoi s&apos;attendre.
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">questions</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">Total : 34 questions · ~20 minutes · Entièrement reprenablee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Contenu du rapport</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Votre rapport.<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Immédiat.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Dès que vous terminez votre dernière question, le score IA se calcule. Sans attente. Sans email. Votre rapport complet est disponible dans votre compte en quelques secondes.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Commencer l&apos;évaluation
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: 'Niveau de préparation — Prêt pour le stage, En développement ou A besoin de soutien' },
                { icon: '◆', text: 'Paragraphe de synthèse personnalisé rédigé par IA' },
                { icon: '◆', text: "Cartes d'insights par phase avec points forts et axes d'amélioration" },
                { icon: '◆', text: "Profil d'adéquation par domaine montrant où vous excellez" },
                { icon: '◆', text: 'Lien de rapport partageable pour les candidatures et lettres de motivation' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Preuves</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Pourquoi l&apos;expérience précoce compte.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: 'moins de risques d\'être NEET à 19 ans pour les lycéens ayant eu 4+ expériences professionnelles avant 16 ans', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'des employeurs jugent l\'expérience en stage importante lors du recrutement de jeunes diplômés', source: 'NACE, 2023' },
              { stat: '70%', desc: 'taux d\'offres d\'emploi avant l\'obtention du diplôme plus élevé pour les étudiants ayant fait des stages', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Recherche</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Derniers articles.</h2>
              <Link href="https://eduentry.com/fr/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                Voir tout →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/fr/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Questions.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            Gratuit pour les lycéens · Sans carte
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Postulez maintenant.<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">C&apos;est gratuit.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34 questions. 20 minutes. Un rapport IA personnalisé et votre premier pas vers un stage réel.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            Commencer votre candidature
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

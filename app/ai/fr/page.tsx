import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/fr`

export const metadata: Metadata = {
  title: 'Évaluation de stage — Rapport IA gratuit | Eduentry.ai',
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
    languages: { fr: PAGE_URL, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'fr_FR',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES'],
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

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/tech',
  business: '/business',
  data_analytics: '/data-analytics',
  digital_marketing: '/digital-marketing',
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
  { label: 'Aptitude générale',       qs: 10, desc: 'Raisonnement verbal et numérique',                    img: '/phases/general-aptitude.jpg' },
  { label: 'Connaissances du domaine', qs: 10, desc: 'Connaissances appliquées spécifiques au secteur',     img: '/phases/domain-knowledge.jpg' },
  { label: 'Compétences professionnelles', qs: 8, desc: 'Scénarios réels en milieu professionnel (SJT)',    img: '/phases/workplace-skills.jpg' },
  { label: "Profil d'intérêts",        qs: 6,  desc: 'Style de travail et cartographie des préférences',   img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: "L'évaluation est-elle gratuite ?",          a: 'Oui — toujours gratuite pour les lycéens. Pas de frais cachés, pas d\'abonnement, pas de niveaux payants.' },
  { q: 'À qui est-elle destinée ?',                  a: 'Aux lycéens de 14 à 18 ans qui souhaitent acquérir une expérience professionnelle via un stage.' },
  { q: 'Combien de temps cela prend-il ?',           a: '34 questions en quatre phases, environ 35 minutes. L\'évaluation est entièrement reprise — vous pouvez la mettre en pause et la reprendre à tout moment.' },
  { q: 'Quel domaine dois-je choisir ?',             a: 'Lors de la candidature, vous pouvez classer jusqu\'à trois préférences de domaine. La phase Profil d\'intérêts aide aussi à identifier où vous vous épanouissez le mieux — le rapport le reflète.' },
  { q: 'Quand est-ce que je reçois mon rapport ?',   a: 'Immédiatement après avoir terminé. Une fois les 34 questions complétées, le score IA est calculé instantanément et le rapport est disponible dans votre compte — sans attente.' },
  { q: 'Puis-je mentionner l\'évaluation dans mon CV ?', a: 'Oui. Votre rapport de préparation comprend un score mesurable et un bilan de compétences par domaine que vous pouvez mentionner directement dans vos candidatures. De nombreux lycéens l\'incluent dans leurs lettres de motivation et entretiens.' },
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
  description: 'Évaluation adaptative gratuite de 34 questions par IA pour lycéens de 14 à 18 ans. Évalue l\'aptitude, les connaissances du domaine, les compétences professionnelles et le profil d\'intérêts en quatre domaines : Technologie, Entreprise, Analyse de données et Marketing digital.',
  inLanguage: 'fr',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'Lycéens de 14 à 18 ans' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Évaluation éducative',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment obtenir un stage avec Eduentry.ai',
  description: 'Évaluation adaptative gratuite de 34 questions pour lycéens de 14 à 18 ans. Quatre étapes de l\'inscription à l\'attribution du stage.',
  inLanguage: 'fr',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Créez votre compte', text: 'Créez votre compte Eduentry.ai gratuit en moins d\'une minute — sans données de paiement.' },
    { '@type': 'HowToStep', position: 2, name: 'Candidatez', text: 'Dites-nous qui vous êtes, votre lycée et vos préférences de domaine parmi Technologie, Entreprise, Analyse de données ou Marketing digital.' },
    { '@type': 'HowToStep', position: 3, name: "Complétez l'évaluation", text: '34 questions adaptatives en quatre phases : Aptitude générale, Connaissances du domaine, Compétences professionnelles et Profil d\'intérêts. Environ 35 minutes. Reprenez quand vous voulez.' },
    { '@type': 'HowToStep', position: 4, name: 'Recevez votre rapport', text: 'Obtenez votre rapport de préparation personnalisé rédigé par IA avec votre niveau de préparation, le détail par phase et l\'attribution de stage.' },
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
    <main className="flex-1" lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            IA · Gratuit · 35 minutes
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Décroche un stage<br />concret.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            Évaluation adaptative de 34 questions pour lycéens de plus de 14 ans. Découvre ton niveau de préparation dans quatre domaines professionnels et obtiens un rapport personnalisé par IA.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Candidater gratuitement →
            </Link>
          </div>
          <p className="text-xs text-[#6e6e73] mt-6">Gratuit pour les lycéens · Sans carte · Résultats en 35 minutes</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Domaines disponibles</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8 leading-tight">
            Quatre voies.<br />Une évaluation.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track, i) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_FR[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                      priority={i < 2}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_FR[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_FR[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Le processus</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Ton stage en trois étapes.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: '01', title: "Inscris-toi et candidate",   desc: 'Crée ton compte gratuit et dis-nous qui tu es, ton lycée et tes préférences de domaine.' },
              { n: '02', title: "Complète l'évaluation",      desc: '34 questions adaptatives en quatre phases. Reprends quand tu veux.' },
              { n: '03', title: 'Reçois ton rapport',         desc: 'Obtiens ton rapport de préparation personnalisé par IA et ton attribution de stage.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">L'évaluation</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Ce qui t'attend.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">questions</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">Total : 34 questions · ~35 minutes · Entièrement reprise entre les sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Résultats</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Ce que tu obtiens.
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                'Niveau de préparation — Prêt pour le stage, En développement ou Besoin d\'accompagnement',
                'Paragraphe de synthèse personnalisé rédigé par IA',
                'Fiches d\'analyse avec points forts et axes d\'amélioration pour chaque phase',
                'Profil de compatibilité par domaine montrant où tu scores le mieux',
                'Lien vers le rapport partageable pour tes candidatures et lettres de motivation',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Les chiffres</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Pourquoi commencer tôt.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: 'Les lycéens ayant 4 expériences employeurs avant 16 ans ont 5 fois moins de risques d\'être NEET à 19 ans', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: '83 % des employeurs considèrent l\'expérience de stage importante lors de l\'embauche de jeunes diplômés', source: 'NACE, 2023' },
              { stat: '70%', desc: 'Les étudiants ayant fait un stage reçoivent des offres d\'emploi avant l\'obtention de leur diplôme à un taux 70 % supérieur', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Recherche</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
              Derniers articles du blog.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/fr/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/fr/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                Voir tous les articles sur les stages →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">Questions fréquentes.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Candidate maintenant.<br />C'est gratuit.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 questions. 35 minutes. Rapport personnalisé par IA et le premier pas vers un stage réel.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            Commencer la candidature →
          </Link>
        </div>
      </section>
    </main>
  )
}

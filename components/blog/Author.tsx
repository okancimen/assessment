// Özlem Çimen writes the blog; one definition for the byline, the author box and the structured data
const PROFILE_URL = 'https://www.edualist.com/en/about/'

export const AUTHOR_SCHEMA = {
  '@type': 'Person',
  '@id': 'https://eduentry.com/about#ozlem-cimen',
  name: 'Özlem Çimen',
  jobTitle: 'International Education Consultant',
  url: PROFILE_URL,
  image: 'https://eduentry.com/authors/ozlem-cimen-600.jpg',
  sameAs: [PROFILE_URL, 'https://eduentry.com/about#ozlem-cimen'],
  worksFor: { '@type': 'Organization', name: 'Edualist', url: 'https://www.edualist.com' },
}

type Locale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

const TEXT: Record<Locale, { label: string; role: string; bio: string; more: string }> = {
  en: {
    label: 'Author',
    role: 'International Education Consultant',
    bio: 'Founder of Edualist. Over 20 years as a teacher, department head and administrator at TED Istanbul College, ENKA Schools and IICS; raised her own children in international schools across 5 countries.',
    more: 'About Özlem Çimen →',
  },
  tr: {
    label: 'Yazar',
    role: 'Uluslararası Eğitim Danışmanı',
    bio: "Edualist'in kurucusu. 20 yılı aşkın süre TED İstanbul Koleji, ENKA Okulları ve IICS'te öğretmen, bölüm başkanı ve yönetici olarak çalıştı; çocuklarını 5 ülkede uluslararası okullarda büyüttü.",
    more: 'Özlem Çimen hakkında →',
  },
  es: {
    label: 'Autora',
    role: 'Consultora de educación internacional',
    bio: 'Fundadora de Edualist. Más de 20 años como profesora, jefa de departamento y directiva en TED Istanbul College, ENKA Schools e IICS; ha educado a sus hijos en colegios internacionales de 5 países.',
    more: 'Sobre Özlem Çimen →',
  },
  fr: {
    label: 'Autrice',
    role: 'Consultante en éducation internationale',
    bio: "Fondatrice d'Edualist. Plus de 20 ans comme enseignante, cheffe de département et membre de direction à TED Istanbul College, ENKA Schools et IICS ; a scolarisé ses enfants dans des écoles internationales de 5 pays.",
    more: 'À propos d’Özlem Çimen →',
  },
  ar: {
    label: 'الكاتبة',
    role: 'مستشارة تعليم دولي',
    bio: 'مؤسسة Edualist. أكثر من 20 عاماً معلمةً ورئيسة قسم وإداريةً في TED Istanbul College وENKA Schools وIICS، وربّت أطفالها في مدارس دولية في 5 دول.',
    more: '← عن أوزلم تشيمن',
  },
  ru: {
    label: 'Автор',
    role: 'Консультант по международному образованию',
    bio: 'Основатель Edualist. Более 20 лет работала учителем, руководителем кафедры и администратором в TED Istanbul College, ENKA Schools и IICS; её дети учились в международных школах 5 стран.',
    more: 'Об Озлем Чимен →',
  },
  zh: {
    label: '作者',
    role: '国际教育顾问',
    bio: 'Edualist 创始人。在 TED Istanbul College、ENKA Schools 和 IICS 担任教师、学科主任和学校管理者逾 20 年；她的孩子曾在 5 个国家的国际学校就读。',
    more: '了解 Özlem Çimen →',
  },
}

export function AuthorName() {
  return (
    <a href={PROFILE_URL} rel="author" className="hover:text-gray-900 transition-colors">Özlem Çimen</a>
  )
}

export function AuthorBox({ locale }: { locale: Locale }) {
  const t = TEXT[locale]
  return (
    <aside className="mt-12 flex gap-4 items-start border border-gray-100 rounded-2xl p-6 bg-gray-50/50" dir={locale === 'ar' ? 'rtl' : undefined}>
      <picture className="flex-shrink-0">
        <source srcSet="/authors/ozlem-cimen-160.webp" type="image/webp" />
        <img
          src="/authors/ozlem-cimen-160.jpg"
          alt="Özlem Çimen"
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 rounded-full object-cover object-top"
        />
      </picture>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.label}</p>
        <p className="font-bold text-gray-900 mt-0.5">
          <a href={PROFILE_URL} rel="author" className="hover:text-indigo-700">Özlem Çimen</a>
          <span className="font-normal text-sm text-gray-600"> · {t.role}</span>
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">{t.bio}</p>
        <a href={PROFILE_URL} rel="author" className="inline-block text-sm font-semibold text-indigo-600 hover:underline mt-2">{t.more}</a>
      </div>
    </aside>
  )
}

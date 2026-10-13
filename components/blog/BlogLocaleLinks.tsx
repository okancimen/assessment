import Link from 'next/link'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

type Loc = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

// contentSlug → localized slug, per locale
const MAPS: Record<Exclude<Loc, 'en'>, Map<string, string>> = {
  tr: new Map(BLOG_POSTS_TR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
  es: new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
  fr: new Map(BLOG_POSTS_FR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
  ar: new Map(BLOG_POSTS_AR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
  ru: new Map(BLOG_POSTS_RU.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
  zh: new Map(BLOG_POSTS_ZH.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug])),
}
const EN_SLUGS = new Set(BLOG_POSTS.map(p => p.slug))

const META: Record<Loc, { flag: string; label: string; href: (s: string) => string }> = {
  en: { flag: '🇬🇧', label: 'English',  href: (s) => `/blog/${s}` },
  tr: { flag: '🇹🇷', label: 'Türkçe',   href: (s) => `/tr/blog/${s}` },
  es: { flag: '🇪🇸', label: 'Español',  href: (s) => `/es/blog/${s}` },
  fr: { flag: '🇫🇷', label: 'Français', href: (s) => `/fr/blog/${s}` },
  ar: { flag: '🇸🇦', label: 'العربية',  href: (s) => `/ar/blog/${s}` },
  ru: { flag: '🇷🇺', label: 'Русский',  href: (s) => `/ru/blog/${s}` },
  zh: { flag: '🇨🇳', label: '中文',      href: (s) => `/zh/blog/${s}` },
}

const ALSO_LABEL: Record<Loc, string> = {
  en: 'Also available in:',
  tr: 'Diğer dillerde:',
  es: 'También disponible en:',
  fr: 'Également disponible en :',
  ar: 'متوفر أيضاً بـ:',
  ru: 'Также доступно на:',
  zh: '其他语言版本：',
}

const RTL: Loc[] = ['ar']
const ORDER: Loc[] = ['en', 'tr', 'es', 'fr', 'ar', 'ru', 'zh']

/**
 * Visible cross-locale switcher for a blog post.
 * `enSlug` is the English contentSlug that pairs the translations.
 */
export default function BlogLocaleLinks({ currentLocale, enSlug }: { currentLocale: Loc; enSlug?: string }) {
  if (!enSlug) return null

  const links = ORDER
    .filter((loc) => loc !== currentLocale)
    .map((loc) => {
      if (loc === 'en') return EN_SLUGS.has(enSlug) ? { loc, slug: enSlug } : null
      const slug = MAPS[loc].get(enSlug)
      return slug ? { loc, slug } : null
    })
    .filter((x): x is { loc: Loc; slug: string } => x !== null)

  if (links.length === 0) return null

  return (
    <div
      className="mb-10 flex items-center gap-2 text-xs text-gray-500 flex-wrap"
      dir={RTL.includes(currentLocale) ? 'rtl' : 'ltr'}
    >
      <span>{ALSO_LABEL[currentLocale]}</span>
      {links.map(({ loc, slug }) => (
        <Link
          key={loc}
          href={META[loc].href(slug)}
          className="inline-flex items-center gap-1 text-indigo-500 hover:text-indigo-700 font-medium"
        >
          <span>{META[loc].flag}</span>{META[loc].label}
        </Link>
      ))}
    </div>
  )
}

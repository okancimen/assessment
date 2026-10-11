import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'
import PublicNavClient from './PublicNavClient'

const BLOG_COUNTS: Record<string, number> = {
  en: BLOG_POSTS.length,
  tr: BLOG_POSTS_TR.length,
  fr: BLOG_POSTS_FR.length,
  es: BLOG_POSTS_ES.length,
  ar: BLOG_POSTS_AR.length,
  ru: BLOG_POSTS_RU.length,
  zh: BLOG_POSTS_ZH.length,
}

type Locale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

export default function PublicNav({ locale = 'en' }: { locale?: string }) {
  const l = (locale in BLOG_COUNTS ? locale : 'en') as Locale
  return <PublicNavClient locale={l} blogCount={BLOG_COUNTS[l]} />
}

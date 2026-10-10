import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import PublicNavClient from './PublicNavClient'

export default function PublicNavRU() {
  return <PublicNavClient locale="ru" blogCount={BLOG_POSTS_RU.length} />
}

import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import PublicNavClient from './PublicNavClient'

export default function PublicNavES() {
  return <PublicNavClient locale="es" blogCount={BLOG_POSTS_ES.length} />
}

import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import PublicNavClient from './PublicNavClient'

export default function PublicNavFR() {
  return <PublicNavClient locale="fr" blogCount={BLOG_POSTS_FR.length} />
}

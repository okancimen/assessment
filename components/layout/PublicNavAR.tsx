import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import PublicNavClient from './PublicNavClient'

export default function PublicNavAR() {
  return <PublicNavClient locale="ar" blogCount={BLOG_POSTS_AR.length} />
}

import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import PublicNavClient from './PublicNavClient'

export default function PublicNavTR() {
  return <PublicNavClient locale="tr" blogCount={BLOG_POSTS_TR.length} />
}

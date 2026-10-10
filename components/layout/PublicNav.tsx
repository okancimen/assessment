import { BLOG_POSTS } from '@/app/blog/posts'
import PublicNavClient from './PublicNavClient'

export default function PublicNav() {
  return <PublicNavClient locale="en" blogCount={BLOG_POSTS.length} />
}

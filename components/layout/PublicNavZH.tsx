import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'
import PublicNavClient from './PublicNavClient'

export default function PublicNavZH() {
  return <PublicNavClient locale="zh" blogCount={BLOG_POSTS_ZH.length} />
}

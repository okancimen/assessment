'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { BlogPostMeta } from './posts'
import { tagToSlug } from './tag-utils'

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  const router = useRouter()
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/blog/${post.slug}`)}
      onKeyDown={(e) => e.key === 'Enter' && router.push(`/blog/${post.slug}`)}
      className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
      <p className="text-gray-500 leading-relaxed mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => {
          const tagSlug = tagToSlug(tag)
          return tagSlug ? (
            <Link
              key={tag}
              href={`/blog/tag/${tagSlug}`}
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1 transition-colors"
            >
              {tag}
            </Link>
          ) : (
            <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

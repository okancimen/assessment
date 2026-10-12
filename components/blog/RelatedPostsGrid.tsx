import Link from 'next/link'
import type { RelatedPost } from '@/lib/related-posts'

export function RelatedPostsGrid({
  posts,
  basePath,
  heading,
  rtl,
}: {
  posts: RelatedPost[]
  basePath: string
  heading: string
  rtl?: boolean
}) {
  if (posts.length === 0) return null
  return (
    <section className="mt-16 mb-12" dir={rtl ? 'rtl' : undefined}>
      <h2 className="text-xl font-bold text-gray-900 mb-6">{heading}</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`${basePath}/${p.slug}`}
            className="group border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors flex flex-col"
          >
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-indigo-700 transition-colors">
              {p.shortTitle}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{p.description}</p>
            <div className="text-xs text-gray-400 mt-2">{p.readTime}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

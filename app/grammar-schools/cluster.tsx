import Link from 'next/link'
import { BLOG_POSTS } from '@/app/blog/posts'
import { GRAMMAR_AREAS } from './data'

// The 11+ / grammar school topic cluster: the hub, the area pages and these guides all link to each other
export const ELEVEN_PLUS_GUIDE_SLUGS = [
  'free-11-plus-practice-test-online',
  'how-to-prepare-for-11-plus',
  'grammar-school-entry-requirements-2026',
  'what-is-a-standardised-score',
  '11-plus-maths-guide',
  'verbal-reasoning-11-plus-guide',
  'non-verbal-reasoning-11-plus-guide',
]

export const ELEVEN_PLUS_GUIDES = ELEVEN_PLUS_GUIDE_SLUGS
  .map(slug => BLOG_POSTS.find(p => p.slug === slug))
  .filter(p => p !== undefined)

export function ElevenPlusGuideLinks({ exclude }: { exclude?: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {ELEVEN_PLUS_GUIDES.filter(p => p.slug !== exclude).map(p => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-colors">
          <div className="text-xs font-semibold text-indigo-600 mb-1">Guide</div>
          <div className="font-semibold text-gray-900 text-sm leading-snug">{p.shortTitle}</div>
        </Link>
      ))}
    </div>
  )
}

export function GrammarAreaLinks({ exclude }: { exclude?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {GRAMMAR_AREAS.filter(a => a.slug !== exclude).map(a => (
        <Link
          key={a.slug}
          href={`/grammar-schools/${a.slug}`}
          className="text-sm border border-gray-200 rounded-full px-3 py-1.5 text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
        >
          {a.name} <span className="text-gray-500">· SAS {a.targetSAS}</span>
        </Link>
      ))}
    </div>
  )
}

// Shown at the end of every guide in the cluster
export function ElevenPlusClusterBox({ current }: { current: string }) {
  return (
    <section className="mt-12 border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
      <h2 className="text-lg font-bold text-gray-900 mb-1">11+ and grammar schools: the complete guide</h2>
      <p className="text-sm text-gray-600 mb-5">
        Start at the <Link href="/grammar-schools" className="text-indigo-600 underline">grammar schools hub</Link> or
        the <Link href="/11-plus" className="text-indigo-600 underline">11+ preparation overview</Link>, then check
        the target score for your area.
      </p>
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Grammar schools by area</h3>
      <div className="mb-6"><GrammarAreaLinks /></div>
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">More 11+ guides</h3>
      <ElevenPlusGuideLinks exclude={current} />
    </section>
  )
}

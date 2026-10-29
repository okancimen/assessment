interface ReviewSnippetProps {
  quote: string
  name: string
  role: string
  product?: string
  stars?: number
  compact?: boolean
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < n ? '#F59E0B' : 'none'}
          stroke={i < n ? '#F59E0B' : '#D1D5DB'}
          strokeWidth={1.5}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewSnippet({
  quote,
  name,
  role,
  product,
  stars = 5,
  compact = false,
}: ReviewSnippetProps) {
  if (compact) {
    return (
      <div
        className="bg-white rounded-2xl border p-5 flex flex-col gap-3"
        style={{ borderColor: '#E8ECF2' }}
      >
        <Stars n={stars} />
        <p className="text-sm leading-relaxed" style={{ color: '#1E293B' }}>
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
          <div>
            <p className="text-xs font-semibold" style={{ color: '#1E293B' }}>{name}</p>
            <p className="text-xs" style={{ color: '#64748B' }}>{role}</p>
          </div>
          {product && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }}
            >
              {product}
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <figure
      className="bg-[#F7F8FA] rounded-3xl p-8 flex flex-col gap-5"
    >
      <Stars n={stars} />
      <svg className="w-7 h-7 flex-shrink-0" style={{ color: '#4F46E5' }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-base leading-relaxed flex-1" style={{ color: '#1E293B' }}>
        {quote}
      </blockquote>
      <figcaption className="flex items-center justify-between flex-wrap gap-3 mt-auto">
        <div>
          <p className="text-sm font-semibold" style={{ color: '#1E293B' }}>{name}</p>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{role}</p>
        </div>
        {product && (
          <span
            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }}
          >
            {product}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

// Convenience grid: renders 2–4 snippets side-by-side
interface ReviewGridProps {
  reviews: Array<Omit<ReviewSnippetProps, 'compact'>>
  compact?: boolean
}

export function ReviewGrid({ reviews, compact }: ReviewGridProps) {
  return (
    <div className={`grid gap-5 ${reviews.length === 2 ? 'sm:grid-cols-2' : reviews.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
      {reviews.map((r, i) => (
        <ReviewSnippet key={i} {...r} compact={compact} />
      ))}
    </div>
  )
}

import { redirect } from 'next/navigation'

const ROUTES: [string, string][] = [
  ['english', '/subjects/english'],
  ['maths', '/subjects/maths'],
  ['math', '/subjects/maths'],
  ['verbal', '/subjects/verbal-reasoning'],
  ['non-verbal', '/subjects/non-verbal-reasoning'],
  ['nonverbal', '/subjects/non-verbal-reasoning'],
  ['11', '/11-plus'],
  ['eleven', '/11-plus'],
  ['grammar', '/11-plus'],
  ['methodology', '/methodology'],
  ['how', '/methodology'],
  ['about', '/about'],
  ['privacy', '/privacy'],
  ['terms', '/terms'],
]

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = '' } = await searchParams
  const query = q.toLowerCase()

  for (const [keyword, url] of ROUTES) {
    if (query.includes(keyword)) redirect(url)
  }

  redirect('/')
}

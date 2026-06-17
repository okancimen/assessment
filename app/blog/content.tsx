import { UK_CONTENT } from './content-uk'
import { US_CONTENT } from './content-us'

export function getBlogContent(slug: string): React.ReactNode {
  return UK_CONTENT[slug] ?? US_CONTENT[slug] ?? null
}

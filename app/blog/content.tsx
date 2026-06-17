import { UK_CONTENT } from './content-uk'
import { US_CONTENT } from './content-us'
import { NL_CONTENT } from './content-nl'
import { UAE_CONTENT } from './content-uae'
import { CA_CONTENT } from './content-ca'

export function getBlogContent(slug: string): React.ReactNode {
  return (
    UK_CONTENT[slug] ??
    US_CONTENT[slug] ??
    NL_CONTENT[slug] ??
    UAE_CONTENT[slug] ??
    CA_CONTENT[slug] ??
    null
  )
}

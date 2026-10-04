import type { Metadata } from 'next'

const BRAND_SUFFIX = ' | Eduentry'
const MAX_TITLE_WIDTH = 60

// Approximate how wide a title renders in search results: CJK characters take about two Latin slots
function titleWidth(s: string): number {
  let w = 0
  for (const ch of s) w += /[　-鿿가-힯＀-￯]/.test(ch) ? 2 : 1
  return w
}

// Adds the brand suffix only when the full title still fits in a search result
export function brandedTitle(title: string): Metadata['title'] {
  return { absolute: titleWidth(title + BRAND_SUFFIX) <= MAX_TITLE_WIDTH ? title + BRAND_SUFFIX : title }
}

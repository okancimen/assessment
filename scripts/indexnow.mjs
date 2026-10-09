#!/usr/bin/env node
/**
 * Submit changed URLs to IndexNow (Bing, Yandex, etc.)
 * Reads git diff to find affected files, maps them to URLs, submits in one batch.
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const KEY = '668f5830837348c9b10a615b5d3ee411'
const HOST = 'eduentry.com'
const BASE = `https://${HOST}`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

// Files changed in this push
let changed
try {
  changed = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean)
} catch {
  // Shallow clone or initial commit — submit everything
  changed = ['app/blog/posts.ts']
}

console.log('Changed files:', changed)

function slugsFromFile(path) {
  try {
    const content = readFileSync(path, 'utf8')
    return [...content.matchAll(/^\s{4}slug:\s*'([^']+)'/gm)].map(m => m[1])
  } catch {
    return []
  }
}

const urls = new Set()

// Always include the homepage and blog index when anything changes
urls.add(BASE)
urls.add(`${BASE}/blog`)

const FILE_MAP = {
  // EN blog
  'app/blog/posts.ts':       s => `${BASE}/blog/${s}`,
  'app/blog/content.tsx':    s => `${BASE}/blog/${s}`,
  // TR blog
  'app/blog/posts-tr.ts':    s => `${BASE}/tr/blog/${s}`,
  'app/blog/content-tr.tsx': s => `${BASE}/tr/blog/${s}`,
  // ES blog
  'app/blog/posts-es.ts':    s => `${BASE}/es/blog/${s}`,
  'app/blog/content-es.tsx': s => `${BASE}/es/blog/${s}`,
  // FR blog
  'app/blog/posts-fr.ts':    s => `${BASE}/fr/blog/${s}`,
  'app/blog/content-fr.tsx': s => `${BASE}/fr/blog/${s}`,
  // AR blog
  'app/blog/posts-ar.ts':    s => `${BASE}/ar/blog/${s}`,
  'app/blog/content-ar.tsx': s => `${BASE}/ar/blog/${s}`,
  // RU blog
  'app/blog/posts-ru.ts':    s => `${BASE}/ru/blog/${s}`,
  'app/blog/content-ru.tsx': s => `${BASE}/ru/blog/${s}`,
  // ZH blog
  'app/blog/posts-zh.ts':    s => `${BASE}/zh/blog/${s}`,
  'app/blog/content-zh.tsx': s => `${BASE}/zh/blog/${s}`,
}

// Locale blog index pages (add when locale posts/content changes)
const LOCALE_BLOG_INDEX = {
  'tr': `${BASE}/tr/blog`,
  'es': `${BASE}/es/blog`,
  'fr': `${BASE}/fr/blog`,
  'ar': `${BASE}/ar/blog`,
  'ru': `${BASE}/ru/blog`,
  'zh': `${BASE}/zh/blog`,
}

for (const file of changed) {
  const builder = FILE_MAP[file]
  if (builder) {
    // Determine which posts file to read slugs from
    const postsFile = file.startsWith('app/blog/content')
      ? file.replace('content', 'posts').replace('.tsx', '.ts')
      : file
    const slugs = slugsFromFile(postsFile)
    slugs.forEach(s => urls.add(builder(s)))

    // Add locale blog index
    const localeMatch = file.match(/posts-([a-z]{2})\.ts/)
    if (localeMatch) urls.add(LOCALE_BLOG_INDEX[localeMatch[1]])
  }

  // Static app pages — map route file to URL
  if (file.match(/^app\/(about|methodology|subjects|grammar-schools|11-plus|your-childs-potential)\/page\.tsx/)) {
    const segment = file.split('/')[1]
    urls.add(`${BASE}/${segment}`)
  }

  // Sitemap changed → submit all static pages
  if (file === 'app/sitemap.ts') {
    ;['/about', '/methodology', '/subjects', '/grammar-schools', '/11-plus', '/your-childs-potential',
      '/sample-report', '/demo'].forEach(p => urls.add(BASE + p))
  }
}

const urlList = [...urls]
if (urlList.length === 0) {
  console.log('No URLs to submit.')
  process.exit(0)
}

console.log(`\nSubmitting ${urlList.length} URL(s) to IndexNow:`)
urlList.forEach(u => console.log(' ', u))

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList,
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

const body = await res.text()
if (res.status === 200 || res.status === 202) {
  console.log(`\nDone — ${res.status} ${res.statusText}`)
} else {
  // Non-fatal: log but don't fail the workflow (key may not yet be deployed)
  console.warn(`\nIndexNow returned ${res.status}: ${body}`)
}

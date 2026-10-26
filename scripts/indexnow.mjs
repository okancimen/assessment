#!/usr/bin/env node
/**
 * Submit changed URLs to IndexNow (Bing, Yandex, etc.)
 * Reads git diff to find affected files, maps them to URLs, submits in one batch.
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const KEY = 'fb555a6e825b4c729eb70c08c060e069'
const HOST = 'eduentry.com'
const BASE = `https://${HOST}`
// Submit to multiple endpoints — Yandex is confirmed working; Bing logged but non-fatal
const ENDPOINTS = [
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/indexnow',
]

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

// Maps every content file to its slug source (posts.ts or locale posts-XX.ts)
const CONTENT_TO_POSTS = {
  'app/blog/content.tsx':              'app/blog/posts.ts',
  'app/blog/content-uk.tsx':           'app/blog/posts.ts',
  'app/blog/content-uk-us-gifted.tsx': 'app/blog/posts.ts',
  'app/blog/content-uk-netherlands.tsx': 'app/blog/posts.ts',
  'app/blog/content-uk-uae.tsx':       'app/blog/posts.ts',
  'app/blog/content-uk-canada.tsx':    'app/blog/posts.ts',
  'app/blog/content-uk-australia.tsx': 'app/blog/posts.ts',
  'app/blog/content-us.tsx':           'app/blog/posts.ts',
  'app/blog/content-nl.tsx':           'app/blog/posts.ts',
  'app/blog/content-uae.tsx':          'app/blog/posts.ts',
  'app/blog/content-ca.tsx':           'app/blog/posts.ts',
  'app/blog/content-au.tsx':           'app/blog/posts.ts',
  'app/blog/content-tr.tsx':           'app/blog/posts-tr.ts',
  'app/blog/content-es.tsx':           'app/blog/posts-es.ts',
  'app/blog/content-fr.tsx':           'app/blog/posts-fr.ts',
  'app/blog/content-ar.tsx':           'app/blog/posts-ar.ts',
  'app/blog/content-ru.tsx':           'app/blog/posts-ru.ts',
  'app/blog/content-zh.tsx':           'app/blog/posts-zh.ts',
}

const FILE_MAP = {
  // EN blog (posts file + all content sub-files)
  'app/blog/posts.ts':                 s => `${BASE}/blog/${s}`,
  'app/blog/content.tsx':              s => `${BASE}/blog/${s}`,
  'app/blog/content-uk.tsx':           s => `${BASE}/blog/${s}`,
  'app/blog/content-uk-us-gifted.tsx': s => `${BASE}/blog/${s}`,
  'app/blog/content-uk-netherlands.tsx': s => `${BASE}/blog/${s}`,
  'app/blog/content-uk-uae.tsx':       s => `${BASE}/blog/${s}`,
  'app/blog/content-uk-canada.tsx':    s => `${BASE}/blog/${s}`,
  'app/blog/content-uk-australia.tsx': s => `${BASE}/blog/${s}`,
  'app/blog/content-us.tsx':           s => `${BASE}/blog/${s}`,
  'app/blog/content-nl.tsx':           s => `${BASE}/blog/${s}`,
  'app/blog/content-uae.tsx':          s => `${BASE}/blog/${s}`,
  'app/blog/content-ca.tsx':           s => `${BASE}/blog/${s}`,
  'app/blog/content-au.tsx':           s => `${BASE}/blog/${s}`,
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
    const postsFile = CONTENT_TO_POSTS[file] ?? file
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

  // Tag utils changed → submit all EN + locale tag pages
  if (file === 'app/blog/tag-utils.ts') {
    const tagSlugs = ['11-plus','academic-assessment','australia','canada','career-development','cat4','character-strengths','child-development','cogat','gifted-education','gifted-programs','gifted-testing','grammar-schools','internship','netherlands','nwea-map','parent-guide','personality-assessment','uae','uk-education','university-admissions','us-education','via-strengths','wellbeing','wisc-v','work-experience']
    for (const slug of tagSlugs) {
      urls.add(`${BASE}/blog/tag/${slug}`)
      for (const locale of ['tr','es','fr','ar','ru','zh']) {
        urls.add(`${BASE}/${locale}/blog/tag/${slug}`)
      }
    }
  }

  // Locale tag page files → submit that locale's tag pages
  const localeTagMatch = file.match(/^app\/([a-z]{2})\/\(public\)\/blog\/tag\//)
  if (localeTagMatch) {
    const locale = localeTagMatch[1]
    const tagSlugs = ['11-plus','academic-assessment','australia','canada','career-development','cat4','character-strengths','child-development','cogat','gifted-education','gifted-programs','gifted-testing','grammar-schools','internship','netherlands','nwea-map','parent-guide','personality-assessment','uae','uk-education','university-admissions','us-education','via-strengths','wellbeing','wisc-v','work-experience']
    for (const slug of tagSlugs) {
      urls.add(`${BASE}/${locale}/blog/tag/${slug}`)
    }
    urls.add(`${BASE}/${locale}/blog`)
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

for (const endpoint of ENDPOINTS) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const body = await res.text()
  if (res.status === 200 || res.status === 202) {
    console.log(`${endpoint} — ${res.status} OK`)
  } else {
    console.warn(`${endpoint} — ${res.status}: ${body}`)
  }
}

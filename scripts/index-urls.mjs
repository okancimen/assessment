/**
 * Google Indexing API — submit URLs for re-crawl.
 *
 * Setup:
 *   1. Google Cloud Console → enable "Web Search Indexing API"
 *   2. Create a service account → download JSON key → save as scripts/service-account.json
 *   3. GSC → Settings → Users and permissions → Add user (service account email, Owner)
 *   4. npm install googleapis   (or: npx --yes tsx scripts/index-urls.mjs)
 *
 * Run:
 *   node scripts/index-urls.mjs
 */

import { google } from 'googleapis'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const KEY_FILE = join(__dir, '..', 'service_account.json')

const URLS = [
  'https://eduentry.com/es/blog/practicas-marketing-digital-instituto',
  'https://eduentry.com/es/blog/practicas-analitica-datos-estudiantes',
  'https://eduentry.com/es/blog/practicas-finanzas-banca-instituto',
  'https://eduentry.com/es/blog/practicas-verano-reino-unido-estudiantes',
  'https://eduentry.com/es/blog/como-superar-entrevista-practicas',
  'https://eduentry.com/fr/blog/stage-lyceen-france-comment-trouver',
  'https://eduentry.com/fr/blog/stage-data-analyse-lyceen',
  'https://eduentry.com/fr/blog/grandes-ecoles-orientation-lyceen',
  'https://eduentry.com/tr/blog/is-deneyimine-nasil-hazirlanilir',
  'https://eduentry.com/tr/blog/cocugunuzun-akademik-seviyesi-nasil-olculur',
  'https://eduentry.com/tr/blog/staj-icin-cv-nasil-yazilir',
  'https://eduentry.com/tr/blog/erken-yasta-is-tecrubesi-kazanmak',
  'https://eduentry.com/tr/blog/veri-analitigi-kariyer-rehberi',
  'https://eduentry.com/tr/blog/dijital-pazarlama-staji-nasil-bulunur',
  'https://eduentry.com/tr/blog/a-level-programlari-nedir',
  'https://eduentry.com/ar/blog/staj-sayf-imarat',
  'https://eduentry.com/ar/blog/pisa-2025-azmat-talim-alami-ma-yahtaj-marifatuh-awaliyaa-al-umur',
  'https://eduentry.com/ar/blog/mashruik-tijarik-16',
  'https://eduentry.com/ar/blog/staj-tamwil-imarat',
  'https://eduentry.com/ar/blog/kayfa-tajid-staj-dubai',
  'https://eduentry.com/ar/blog/staj-tahlil-bayanat',
  'https://eduentry.com/ar/blog/sirat-dhatiyya-staj-16',
  'https://eduentry.com/ar/blog/muqabala-staj-nasayih',
  'https://eduentry.com/ar/blog/staj-taqniya-imarat',
  'https://eduentry.com/blog/nsw-opportunity-class-test-guide',
]

async function main() {
  let key
  try {
    key = JSON.parse(readFileSync(KEY_FILE, 'utf8'))
  } catch {
    console.error('❌  scripts/service-account.json not found.')
    console.error('   Download your service account key from Google Cloud and save it there.')
    process.exit(1)
  }

  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  })

  const indexing = google.indexing({ version: 'v3', auth })

  let ok = 0
  let fail = 0

  for (const url of URLS) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      })
      console.log(`✅  ${url}`)
      ok++
    } catch (err) {
      console.error(`❌  ${url}`)
      console.error(`    ${err.message}`)
      fail++
    }
    // stay well under the 200 req/day quota
    await new Promise(r => setTimeout(r, 300))
  }

  console.log(`\nDone: ${ok} submitted, ${fail} failed`)
}

main()

import { createSign } from 'crypto'
import { readFileSync } from 'fs'

const SCOPES = 'https://www.googleapis.com/auth/indexing'
const ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish'
const TOKEN_URL = 'https://oauth2.googleapis.com/token'

function b64url(input: string | Buffer): string {
  const buf = typeof input === 'string' ? Buffer.from(input) : input
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

async function getAccessToken(): Promise<string> {
  const filePath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE
  const raw = filePath ? readFileSync(filePath, 'utf8') : process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY not set')
  const creds = JSON.parse(raw)

  const now = Math.floor(Date.now() / 1000)
  const header  = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = b64url(JSON.stringify({ iss: creds.client_email, scope: SCOPES, aud: TOKEN_URL, iat: now, exp: now + 3600 }))
  const sigInput = `${header}.${payload}`

  const sign = createSign('RSA-SHA256')
  sign.update(sigInput)
  const jwt = `${sigInput}.${b64url(sign.sign(creds.private_key))}`

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
  })
  if (!res.ok) throw new Error(`Token error ${res.status}: ${await res.text()}`)
  const data = await res.json() as { access_token: string }
  return data.access_token
}

export type IndexingType = 'URL_UPDATED' | 'URL_DELETED'

export async function notifyUrl(url: string, type: IndexingType = 'URL_UPDATED'): Promise<void> {
  const token = await getAccessToken()
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type }),
  })
  if (!res.ok) throw new Error(`Indexing API ${res.status}: ${await res.text()}`)
}

export interface IndexingResult { url: string; ok: boolean; error?: string }

export async function notifyUrls(urls: string[], type: IndexingType = 'URL_UPDATED'): Promise<IndexingResult[]> {
  const results: IndexingResult[] = []
  for (const url of urls) {
    try {
      await notifyUrl(url, type)
      results.push({ url, ok: true })
    } catch (err) {
      results.push({ url, ok: false, error: String(err) })
    }
  }
  return results
}

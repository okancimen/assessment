import { JWT } from 'google-auth-library'

const SCOPES = ['https://www.googleapis.com/auth/indexing']
const ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish'

function getClient(): JWT {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY env var not set')
  const creds = JSON.parse(raw)
  return new JWT({ email: creds.client_email, key: creds.private_key, scopes: SCOPES })
}

export type IndexingType = 'URL_UPDATED' | 'URL_DELETED'

export async function notifyUrl(url: string, type: IndexingType = 'URL_UPDATED'): Promise<void> {
  const client = getClient()
  const { token } = await client.getAccessToken()
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type }),
  })
  if (!res.ok) throw new Error(`Indexing API ${res.status}: ${await res.text()}`)
}

export interface IndexingResult {
  url: string
  ok: boolean
  error?: string
}

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

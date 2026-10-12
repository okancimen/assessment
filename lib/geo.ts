// Shared IP geolocation helper (same source used for registered-user location:
// the client's request IP, resolved via ipapi.co).

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return headers.get('x-real-ip') ?? ''
}

export async function geolocateIp(
  ip: string,
): Promise<{ country: string | null; city: string | null } | null> {
  if (!ip || ip === '127.0.0.1' || ip === '::1') return null

  const geo = await fetch(`https://ipapi.co/${ip}/json/`, {
    headers: { 'User-Agent': 'eduentry-app/1.0' },
  })
    .then((r) => r.json())
    .catch(() => null)

  if (!geo || geo.error) return null

  return {
    country: (geo.country_name as string | undefined) ?? null,
    city: (geo.city as string | undefined) ?? null,
  }
}

import { NextRequest, NextResponse } from 'next/server'

const LOCALE_MAP: Record<string, string> = {
  tr: 'tr',
  es: 'es',
  fr: 'fr',
  ar: 'ar',
  ru: 'ru',
  zh: 'zh',
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const segment = pathname.split('/')[1]
  const lang = LOCALE_MAP[segment] ?? 'en-GB'

  const res = NextResponse.next()
  res.headers.set('x-locale', lang)
  return res
}

export const config = {
  matcher: ['/((?!api|_next|_static|.*\\..*).*)'],
}

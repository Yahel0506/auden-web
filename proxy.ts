import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Sends English-speaking visitors to /en on their first visit, once.
 *
 * Any visit to / or /en leaves a cookie behind, so later visits are never redirected: that way the
 * "English" / "Español" links in the footer always win over the browser's language.
 */

const SEEN = 'auden-lang-seen';

/** The primary language of the browser: the first tag with the highest q value in Accept-Language. */
function preferredLanguage(header: string | null): string | null {
  if (!header) return null;
  let best: { tag: string; q: number } | null = null;
  for (const part of header.split(',')) {
    const [tag, ...params] = part.trim().split(';');
    if (!tag || tag === '*') continue;
    const q = Number(params.map((p) => p.trim()).find((p) => p.startsWith('q='))?.slice(2) ?? 1);
    if (!Number.isFinite(q) || q <= 0) continue;
    if (!best || q > best.q) best = { tag: tag.trim().toLowerCase(), q };
  }
  return best ? best.tag.split('-')[0] : null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstVisit = !request.cookies.has(SEEN);

  let response: NextResponse;
  if (firstVisit && pathname === '/' && preferredLanguage(request.headers.get('accept-language')) === 'en') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    response = NextResponse.redirect(url);
  } else {
    response = NextResponse.next();
  }

  if (firstVisit) {
    response.cookies.set(SEEN, '1', { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', secure: request.nextUrl.protocol === 'https:' });
  }
  // The answer depends on the language header and the cookie, so caches must not share it between visitors.
  response.headers.append('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  matcher: ['/', '/en'],
};

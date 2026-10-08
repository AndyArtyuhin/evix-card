export const config = {
  matcher: ['/((?!login|api/|assets/logo-symbol\\.svg|favicon\\.ico).*)'],
};

const enc = new TextEncoder();
const fromB64u = s => {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  s += '='.repeat((4 - (s.length % 4)) % 4);
  return Uint8Array.from(atob(s), c => c.charCodeAt(0));
};

export default async function middleware(request) {
  const m = (request.headers.get('cookie') || '').match(/(?:^|;\s*)session=([^;]+)/);
  if (m) {
    try {
      const [payload, sig] = m[1].split('.');
      const key = await crypto.subtle.importKey('raw', enc.encode(process.env.SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
      const ok = await crypto.subtle.verify('HMAC', key, fromB64u(sig), enc.encode(payload));
      const data = JSON.parse(new TextDecoder().decode(fromB64u(payload)));
      if (ok && data.exp > Date.now()) return;
    } catch (e) {}
  }
  return Response.redirect(new URL('/login', request.url), 302);
}

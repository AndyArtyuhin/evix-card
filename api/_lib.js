const enc = new TextEncoder();
export const DOMAIN = (process.env.ALLOWED_DOMAIN || 'evixcash.com').toLowerCase();
export async function sign(data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(process.env.SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return Buffer.from(await crypto.subtle.sign('HMAC', key, enc.encode(data))).toString('base64url');
}
export function cookies(req) {
  return Object.fromEntries((req.headers.cookie || '').split(/;\s*/).filter(Boolean).map(c => {
    const i = c.indexOf('='); return [c.slice(0, i), decodeURIComponent(c.slice(i + 1))];
  }));
}

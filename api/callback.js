import { sign, cookies, DOMAIN } from './_lib.js';

const DAYS = 7;

export default async function handler(req, res) {
  const fail = code => res.redirect(302, '/login?error=' + code);
  if (req.method !== 'POST') return fail('method');
  const idToken = req.body && req.body.id_token;
  if (!idToken) return fail('no_token');

  const r = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken));
  if (!r.ok) return fail('invalid');
  const t = await r.json();
  const email = String(t.email || '').toLowerCase();

  if (t.aud !== process.env.GOOGLE_CLIENT_ID) return fail('invalid');
  if (String(t.email_verified) !== 'true') return fail('unverified');
  if (t.hd !== DOMAIN || !email.endsWith('@' + DOMAIN)) return fail('domain');
  if (!t.nonce || t.nonce !== cookies(req).g_nonce) return fail('nonce');

  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + DAYS * 864e5 })).toString('base64url');
  const token = payload + '.' + (await sign(payload));
  res.setHeader('Set-Cookie', [
    `session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${DAYS * 86400}`,
    'g_nonce=; Path=/api/callback; HttpOnly; Secure; SameSite=None; Max-Age=0',
  ]);
  res.redirect(302, '/');
}

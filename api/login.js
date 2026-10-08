import { DOMAIN } from './_lib.js';

export default function handler(req, res) {
  const nonce = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `https://${req.headers.host}/api/callback`,
    response_type: 'id_token',
    response_mode: 'form_post',
    scope: 'openid email',
    hd: DOMAIN,
    nonce,
    prompt: 'select_account',
  });
  res.setHeader('Set-Cookie', `g_nonce=${nonce}; Path=/api/callback; HttpOnly; Secure; SameSite=None; Max-Age=600`);
  res.redirect(302, 'https://accounts.google.com/o/oauth2/v2/auth?' + params);
}

# evixcard — Card Generator

Static site + Google sign-in restricted to @evixcash.com (Google Workspace).

## Deploy
1. Push the contents of this folder to a GitHub repo (index.html at the repo root).
2. vercel.com → Add New → Project → import the repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Settings → Environment Variables:
   - `GOOGLE_CLIENT_ID` — OAuth client ID from Google Cloud
   - `SESSION_SECRET` — long random string (32+ chars)
   - `ALLOWED_DOMAIN` — optional, defaults to `evixcash.com`
5. Deploy (redeploy after changing variables).

## Google Cloud
- OAuth consent screen → User type: **Internal**.
- Credentials → Create OAuth client ID → Web application.
- Authorized redirect URI: `https://<your-domain>/api/callback` (one per domain you use).

## Structure
- `middleware.js` — blocks every page without a valid session, redirects to /login
- `login.html` — logo + Log In button
- `api/login.js` → Google → `api/callback.js` (verifies token, domain, sets cookie)
- `api/logout.js` — clears the session
- `index.html` — the app; `support.js` — runtime; `ds/` — UI styles; `assets/` — images, fonts

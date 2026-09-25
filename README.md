# evixcard — Card Generator

Static site, no build step.

## Deploy
1. Push the contents of this folder to a GitHub repo (index.html at the repo root).
2. On vercel.com → Add New → Project → import the repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Deploy.

## Adding a platform template
1. Put a 600×900 PNG into `assets/`, e.g. `assets/g2a-template.png`.
2. In `index.html`, add it to `static TEMPLATES`:
   `{ Eneba: 'assets/eneba-template.png', G2A: 'assets/g2a-template.png' }`

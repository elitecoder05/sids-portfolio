Deployment guide
================

This project is configured for Cloudflare Workers SSR using `@tanstack/react-start`.

Summary
-------
- The build produces two outputs under `dist/`: `dist/client/` (static assets) and `dist/server/` (Cloudflare Worker server bundle). There is no `index.html` produced for static hosting because the Worker handles SSR at runtime.
- Because of this, GitHub Pages (static hosting) will return 404 unless you convert to a static SPA or create a custom `index.html` that boots the client bundle. The recommended deployment target is Cloudflare Workers / Cloudflare Pages using `wrangler`.

Deploy to Cloudflare Workers (recommended)
-----------------------------------------

1. Create a Cloudflare API token
   - Go to Cloudflare dashboard → My Profile → API Tokens → Create Token
   - Use the "Edit Cloudflare Workers" template or give scoped permissions for your account: `Account:Workers Scripts - Edit` and `Account:Pages - Edit` as needed.

2. Add repository secrets on GitHub
   - `CF_API_TOKEN`: the API token value
   - `CF_ACCOUNT_ID`: your Cloudflare account ID (found in the Cloudflare dashboard under Overview)

3. Trigger the GitHub Action
   - The repo contains a GitHub Actions workflow: `.github/workflows/deploy-cloudflare.yml`.
   - Push to the `main` branch (or use the workflow_dispatch button in the Actions tab). The workflow will run `npm ci`, `npm run build`, and then `wrangler publish`.

Manual local deploy (optional)
------------------------------
Run locally if you prefer:

```bash
npm ci
npm run build
# publish with wrangler (install if needed)
npm install -g wrangler@4
wrangler publish --env production
```

Notes for GitHub Pages
----------------------
- GitHub Pages expects a static `index.html` (or `docs/` folder). This project does not produce one by default because it relies on SSR.
- You *can* publish a client-only SPA by creating an `index.html` that loads the client assets from `dist/client/assets`. However, the bundle filenames are hashed on each build. To automate that, you'd need a small script that reads `dist/server/.vite/manifest.json` and generates an `index.html` that references the correct JS/CSS filenames. This is possible but will remove SSR.

Options if you want Vercel
-------------------------
- Running this project on Vercel requires an adapter that runs the server entry as a Vercel serverless function (or converting the app to a static SPA). That requires more changes and is not covered here.

If you'd like, I can:
- Set up the GitHub Action to automatically push a static `dist/client` to `gh-pages` (loses SSR), or
- Help adapt the project to Vercel's serverless model (more work), or
- Help set the GitHub Secrets and test the Cloudflare Action (I can prepare step-by-step commands for you to run locally or in the repo settings).

# דניאל סער — סטוריטלינג עסקי ואישי

Next.js marketing site (Hebrew, RTL), deployed to **GitHub Pages**.

**Live URL:** [https://maor-ar.github.io/DanielSaar/](https://maor-ar.github.io/DanielSaar/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (no base path in dev).

### Test production build locally (optional)

```bash
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/DanielSaar"
$env:NEXT_PUBLIC_SITE_URL="https://maor-ar.github.io/DanielSaar"
npm run build
npx serve out
```

## Deploy (GitHub Pages)

Deployments run automatically via [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) on push to `master` or `main`.

### One-time GitHub setup

1. Push this repository to `Maor-Ar/DanielSaar`.
2. **Settings → Pages → Build and deployment**
3. **Source:** GitHub Actions (not “Deploy from a branch”).
4. Push to `master` — the workflow builds and deploys.

### Custom domain (later)

When you have a domain:

1. Add the domain under **Settings → Pages → Custom domain**.
2. Update workflow env in `deploy-github-pages.yml`:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
   - `NEXT_PUBLIC_BASE_PATH=` (empty string — site at root)
3. Update `next.config.ts` / remove base path from workflow.

### Debugging failed deploys

1. Open **Actions** → **Deploy to GitHub Pages** → failed run.
2. Expand **Build static site** — build logs are printed in the step output.
3. On failure, download the **debug-logs-*** artifact (`build.log`, `install.log`, `lint.log`).

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Local dev server               |
| `npm run build`   | Production static export → `out/` |
| `npm run start`   | Serve Node build (not used for Pages) |
| `npm run lint`    | ESLint                         |

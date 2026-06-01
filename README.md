# דניאל סער — סטוריטלינג עסקי ואישי

Next.js marketing site (Hebrew, RTL), deployed to **GitHub Pages**.

**Live URL:** [https://danielsaar.co.il/](https://danielsaar.co.il/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (no base path in dev).

### Test production build locally (optional)

```bash
# PowerShell
$env:NEXT_PUBLIC_SITE_URL="https://danielsaar.co.il"
$env:NEXT_PUBLIC_BASE_PATH=""
npm run build
npx serve out
```

## Deploy (GitHub Pages)

Deployments run automatically via [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) on push to `master` or `main`.

### One-time GitHub setup

1. Push this repository to `Maor-Ar/DanielSaar`.
2. **Settings → Pages → Build and deployment**
3. **Source:** GitHub Actions (not “Deploy from a branch”).
4. **Custom domain:** `danielsaar.co.il` (DNS must point to GitHub Pages; `public/CNAME` is included in the build).
5. Push to `master` — the workflow builds and deploys.

Production env (in the workflow):

- `NEXT_PUBLIC_SITE_URL=https://danielsaar.co.il`
- `NEXT_PUBLIC_BASE_PATH=` (empty — site at domain root)

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

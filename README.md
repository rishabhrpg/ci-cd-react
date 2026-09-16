# DevOps Q2 – CI/CD Website (React)

Vite + React static site for the DevOps training CI/CD assignment. Build output goes to `dist/` for S3 sync.

## Local development

```bash
npm install
npm run dev
```

## Test and build (matches pipeline steps)

```bash
npm test
npm run build
npm run preview
```

## Version bump for assignment step 10

Edit `src/version.js` and set `APP_VERSION` to `2.0`, then commit and push to `main`.

## Deploy

Configure GitHub Actions secrets/variables and add `.github/workflows/deploy.yml` when you wire AWS (S3 + CloudFront). Sync `dist/` after `npm run build`.

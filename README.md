# Murukan's portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. Source code is in `src/`, and static assets are in `public/`.

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the build source. The deployment workflow builds and publishes the website whenever `main` is updated. If needed, start it manually from **Actions → Deploy website to GitHub Pages → Run workflow**.

The site URL is https://murukang.github.io/pf27a/ once deployment succeeds. The workflow uses the `/pf27a/` base path; local development uses `/`.

import { copyFile, mkdir } from 'node:fs/promises'

// Serve each case study directly on static hosts, including GitHub Pages.
for (const slug of ['retreat', 'g2o', 'growbiz']) {
  const directory = new URL(`../dist/work/${slug}/`, import.meta.url)
  await mkdir(directory, { recursive: true })
  await copyFile(new URL('../dist/index.html', import.meta.url), new URL('index.html', directory))
}

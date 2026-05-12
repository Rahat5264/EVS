import type { MetadataRoute } from 'next'
import { readdir, stat } from 'fs/promises'
import path from 'path'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://edraakvisionsystems.com'

type SitemapEntry = MetadataRoute.Sitemap[number]

async function collectPages(
  directory: string,
  routePrefix = ''
): Promise<Array<{ route: string; filePath: string }>> {
  const entries = await readdir(directory, { withFileTypes: true })
  const pages: Array<{ route: string; filePath: string }> = []

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) {
      continue
    }

    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
        pages.push(...(await collectPages(entryPath, routePrefix)))
        continue
      }

      const nextRoutePrefix = routePrefix ? `${routePrefix}/${entry.name}` : `/${entry.name}`
      pages.push(...(await collectPages(entryPath, nextRoutePrefix)))
      continue
    }

    if (entry.name !== 'page.tsx') {
      continue
    }

    const route = routePrefix || '/'
    pages.push({ route, filePath: entryPath })
  }

  return pages
}

function normalizeRoute(route: string) {
  return route === '/' ? route : route.replace(/\/g, '/').replace(/\/g, '/')
}

function getPriority(route: string) {
  if (route === '/') {
    return 1
  }

  const depth = route.split('/').filter(Boolean).length
  if (depth === 1) {
    return 0.8
  }

  return 0.7
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const appDirectory = path.join(process.cwd(), 'app')
  const pages = await collectPages(appDirectory)

  return Promise.all(
    pages.map(async ({ route, filePath }) => {
      const fileStats = await stat(filePath)
      const normalizedRoute = normalizeRoute(route)

      return {
        url: new URL(normalizedRoute, siteUrl).toString(),
        lastModified: fileStats.mtime,
        changeFrequency: normalizedRoute === '/' ? 'weekly' : 'monthly',
        priority: getPriority(normalizedRoute),
      }
    })
  )
}

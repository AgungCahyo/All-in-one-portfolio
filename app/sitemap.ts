import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agungcahyo.my.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/videographer', '/developer', '/beverage', '/developer/work-with-me']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}

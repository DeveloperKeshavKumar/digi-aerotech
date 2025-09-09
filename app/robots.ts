import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/admin/*',
          '/images/*',
          '/_next/*',
          '/_next/static/*',
          '/_next/image/*',
          '/api/*',
          '/*/create',
          '/*/edit'
        ],
      },
    ],
    sitemap: 'https://digiaerotech.com/sitemap.xml',
  }
}

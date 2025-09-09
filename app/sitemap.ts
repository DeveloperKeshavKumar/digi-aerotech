// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllBusinessSlugs, getBusinessBySlug } from '@/business/business-registry'
import { getAllServiceSlugs } from '@/services/service-registry'
import { getAllMaps } from '@/map-service-business/service-business-registry'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://digiaerotech.com'
  const currentDate = new Date()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diwali-offers`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Business pages (/business/:slug)
  const businessSlugs = getAllBusinessSlugs()
  const businessPages = businessSlugs.map(slug => {
    const business = getBusinessBySlug(slug)
    return {
      url: `${baseUrl}/business/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  // Service pages (/services/:slug)
  const serviceSlugs = getAllServiceSlugs()
  const servicePages = serviceSlugs.map(slug => {
    return {
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  // Service-Business pages (/services/:slug/:business)
  const allMaps = getAllMaps()
  const serviceBusinessPages = allMaps.map(map => {
    return {
      url: `${baseUrl}/services/${map.service}/${map.business}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  })

  // Blog pages (/blogs/:slug) - fetch from database
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const response = await fetch(`${baseUrl}/api/blogs?published=true&limit=1000`)
    if (response.ok) {
      const data = await response.json()
      if (data.success && data.data) {
        blogPages = data.data.map((blog: any) => ({
          url: `${baseUrl}/blogs/${blog.slug}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : 
                     blog.createdAt ? new Date(blog.createdAt) : currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      }
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  return [
    ...staticPages,
    ...businessPages,
    ...servicePages,
    ...serviceBusinessPages,
    ...blogPages,
  ]
}
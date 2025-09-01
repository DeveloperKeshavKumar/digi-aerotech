// lib/blog-utils.ts
import { BlogPost } from '@/app/api/blogs/blogs.types'

// Function to get all blog slugs from the database
export async function getAllBlogSlugs(): Promise<string[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?published=true&limit=1000`)

        if (!response.ok) {
            throw new Error('Failed to fetch blogs')
        }

        const data = await response.json()

        if (data.success && data.data) {
            return data.data.map((blog: BlogPost) => blog.slug)
        }

        return []
    } catch (error) {
        console.error('Error fetching blog slugs:', error)
        return []
    }
}

// Function to get blog post by slug
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`)

        if (!response.ok) {
            throw new Error('Failed to fetch blog')
        }

        const data = await response.json()

        if (data.success && data.data) {
            return data.data
        }

        return null
    } catch (error) {
        console.error('Error fetching blog:', error)
        return null
    }
}
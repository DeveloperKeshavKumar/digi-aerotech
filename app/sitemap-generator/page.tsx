// app/sitemap-generator/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllBusinessSlugs, getBusinessBySlug } from '@/business/business-registry'
import { getAllServiceSlugs } from '@/services/service-registry'
import { getAllMaps } from '@/map-service-business/service-business-registry'
import Link from 'next/link'

interface SitemapUrl {
    url: string
    lastModified: Date
    changeFrequency: string
    priority: number
    type: string
}

interface BlogPost {
    slug: string
    updatedAt?: string
    createdAt?: string
}

interface ApiResponse {
    success: boolean
    data?: BlogPost[]
}

interface UrlCounts {
    static: number
    business: number
    service: number
    serviceBusiness: number
    blog: number
}

const typeColors = {
    static: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    service: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'service-business': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    blog: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
} as const

export default function SitemapGenerator() {
    const [sitemapData, setSitemapData] = useState<SitemapUrl[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filterType, setFilterType] = useState<string>('all')

    useEffect(() => {
        const generateSitemapData = async (): Promise<void> => {
            const baseUrl = 'https://digiaerotech.com'
            const currentDate = new Date()

            // Static pages
            const staticPages: SitemapUrl[] = [
                {
                    url: `${baseUrl}/`,
                    lastModified: currentDate,
                    changeFrequency: 'monthly',
                    priority: 1,
                    type: 'static'
                },
                {
                    url: `${baseUrl}/services`,
                    lastModified: currentDate,
                    changeFrequency: 'monthly',
                    priority: 0.8,
                    type: 'static'
                },
                {
                    url: `${baseUrl}/blogs`,
                    lastModified: currentDate,
                    changeFrequency: 'weekly',
                    priority: 0.7,
                    type: 'static'
                },
                {
                    url: `${baseUrl}/results`,
                    lastModified: currentDate,
                    changeFrequency: 'monthly',
                    priority: 0.6,
                    type: 'static'
                },
                {
                    url: `${baseUrl}/about`,
                    lastModified: currentDate,
                    changeFrequency: 'monthly',
                    priority: 0.8,
                    type: 'static'
                },
                {
                    url: `${baseUrl}/contact`,
                    lastModified: currentDate,
                    changeFrequency: 'monthly',
                    priority: 0.8,
                    type: 'static'
                },
            ]

            // Business pages
            const businessSlugs = getAllBusinessSlugs()
            const businessPages: SitemapUrl[] = businessSlugs.map((slug: string) => ({
                url: `${baseUrl}/business/${slug}`,
                lastModified: currentDate,
                changeFrequency: 'weekly',
                priority: 0.7,
                type: 'business'
            }))

            // Service pages
            const serviceSlugs = getAllServiceSlugs()
            const servicePages: SitemapUrl[] = serviceSlugs.map((slug: string) => ({
                url: `${baseUrl}/services/${slug}`,
                lastModified: currentDate,
                changeFrequency: 'weekly',
                priority: 0.7,
                type: 'service'
            }))

            // Service-Business pages
            const allMaps = getAllMaps()
            const serviceBusinessPages: SitemapUrl[] = allMaps.map((map: { service: string; business: string }) => ({
                url: `${baseUrl}/services/${map.service}/${map.business}`,
                lastModified: currentDate,
                changeFrequency: 'weekly',
                priority: 0.6,
                type: 'service-business'
            }))

            // Blog pages - fetch from API
            let blogPages: SitemapUrl[] = []
            try {
                const response = await fetch('/api/blogs?published=true&limit=1000')
                if (response.ok) {
                    const data: ApiResponse = await response.json()
                    if (data.success && data.data) {
                        blogPages = data.data.map((blog: BlogPost) => ({
                            url: `${baseUrl}/blogs/${blog.slug}`,
                            lastModified: blog.updatedAt ? new Date(blog.updatedAt) :
                                blog.createdAt ? new Date(blog.createdAt) : currentDate,
                            changeFrequency: 'monthly',
                            priority: 0.7,
                            type: 'blog'
                        }))
                    }
                }
            } catch (error) {
                console.error('Error fetching blogs:', error)
            }

            const allUrls = [
                ...staticPages,
                ...businessPages,
                ...servicePages,
                ...serviceBusinessPages,
                ...blogPages,
            ]

            setSitemapData(allUrls)
            setIsLoading(false)
        }

        generateSitemapData()
    }, [])

    // Filter URLs based on search term and type
    const filteredUrls = sitemapData.filter((url: SitemapUrl) => {
        const matchesSearch = url.url.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesType = filterType === 'all' || url.type === filterType
        return matchesSearch && matchesType
    })

    // Count URLs by type
    const counts: UrlCounts = {
        static: sitemapData.filter((url: SitemapUrl) => url.type === 'static').length,
        business: sitemapData.filter((url: SitemapUrl) => url.type === 'business').length,
        service: sitemapData.filter((url: SitemapUrl) => url.type === 'service').length,
        serviceBusiness: sitemapData.filter((url: SitemapUrl) => url.type === 'service-business').length,
        blog: sitemapData.filter((url: SitemapUrl) => url.type === 'blog').length,
    }

    if (isLoading) {
        return (
            <div className="lg:min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
                <div className="text-center">
                    <motion.div
                        className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full mx-auto"
                        style={{
                            animation: 'spin 1s linear infinite'
                        }}
                    />
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Generating sitemap data...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="lg:min-h-screen mt-14 lg:mt-20 bg-white dark:bg-black py-8 px-4 sm:py-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-2xl sm:text-5xl font-bold text-black dark:text-white mb-4">
                        Sitemap Analysis
                    </h1>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                        Automatically generated sitemap for DigiAeroTech
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-br from-orange-200 via-pink-200 to-red-200 rounded-xl shadow-lg p-4 sm:p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
                        Sitemap Summary
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                        {[
                            { count: counts.static, label: 'Base Pages', delay: 0.1, bg: 'bg-blue-100 dark:bg-blue-900/30' },
                            { count: counts.service, label: 'Service Pages', delay: 0.3, bg: 'bg-purple-100 dark:bg-purple-900/30' },
                            { count: counts.business, label: 'Business Pages', delay: 0.2, bg: 'bg-green-100 dark:bg-green-900/30' },
                            { count: counts.serviceBusiness, label: 'Service-Business', delay: 0.4, bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30' },
                            { count: counts.blog, label: 'Blog Posts', delay: 0.5, bg: 'bg-amber-100 dark:bg-amber-900/30' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                className={`${item.bg} rounded-lg p-3 sm:p-4 text-center border  border-blue-100 dark:border-blue-800/50`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: item.delay }}
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                                    {item.count}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="text-base sm:text-lg font-semibold text-black dark:text-white">
                            Total URLs: {sitemapData.length}
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-tr from-orange-200 via-pink-200 to-red-200 rounded-xl shadow-lg p-4 sm:p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search URLs..."
                                className="w-full p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                                value={searchTerm}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="sm:w-48">
                            <select
                                className="w-full p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                                value={filterType}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilterType(e.target.value)}
                            >
                                <option value="all">All Types</option>
                                <option value="static">Static Pages</option>
                                <option value="business">Business Pages</option>
                                <option value="service">Service Pages</option>
                                <option value="service-business">Service-Business</option>
                                <option value="blog">Blog Posts</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="max-h-96 overflow-y-auto border border-blue-200 dark:border-blue-700 rounded-lg">
                            <table className="min-w-full divide-y divide-blue-200 dark:divide-blue-700">
                                <thead className="bg-blue-50 dark:bg-blue-900 sticky top-0">
                                    <tr>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            URL
                                        </th>
                                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            Priority
                                        </th>
                                        <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            Change Frequency
                                        </th>
                                        <th className="hidden lg:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            Last Modified
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-blue-100 dark:divide-blue-800">
                                    <AnimatePresence>
                                        {filteredUrls.map((url: SitemapUrl, index: number) => (
                                            <motion.tr
                                                key={`${url.url}-${index}`}
                                                className="hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                            >
                                                <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    <a
                                                        href={url.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline break-all"
                                                    >
                                                        {url.url.replace('https://digiaerotech.com', '')}
                                                    </a>
                                                </td>
                                                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${typeColors[url.type as keyof typeof typeColors] || typeColors.blog}`}>
                                                        {url.type}
                                                    </span>
                                                </td>
                                                <td className="hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                    {url.priority}
                                                </td>
                                                <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                    {url.changeFrequency}
                                                </td>
                                                <td className="hidden lg:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                    {url.lastModified.toLocaleDateString()}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                        <AnimatePresence>
                            {filteredUrls.length === 0 && (
                                <motion.div
                                    className="text-center py-8 text-blue-500 dark:text-blue-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    No URLs match your search criteria
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-4 sm:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
                        Implementation Details
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Your sitemap is automatically generated and includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Static pages (Home, Services, Blogs, Results, About, Contact)</li>
                            <li>All business pages from your business registry</li>
                            <li>All service pages from your service registry</li>
                            <li>All service-business combinations from your mapping registry</li>
                            <li>All published blog posts from your database</li>
                        </ul>
                        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900">
                            <p className="text-black dark:text-white font-medium mb-2">Note:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Your sitemap is automatically available at{' '}
                                <Link href="https://digiaerotech.com/sitemap.xml">
                                    <code className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded text-xs sm:text-sm">
                                        https://digiaerotech.com/sitemap.xml
                                    </code>
                                </Link>{' '}
                                and will be discovered by search engines. The sitemap updates automatically as you add new content.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
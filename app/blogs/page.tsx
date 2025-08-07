"use client";
import { useState, useEffect } from 'react';
import Layout from '@/components/blogs/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { IconEdit, IconSearch, IconTrash, IconCalendar, IconEye, IconFileText } from '@tabler/icons-react';
import { BlogPost } from '@/types/blogs.types';

export default function BlogList() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

    const fetchBlogs = async (page = 1, search = '') => {
        setLoading(true);
        try {
            const res = await fetch(`/api/blogs?page=${page}&limit=10&search=${search}`);
            const data = await res.json();
            setBlogs(data.data);
            setTotalPages(data.pagination.totalPages);
            setCurrentPage(page);
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchBlogs(1, searchTerm);
    };

    const BlogCard = ({ blog, index }: { blog: BlogPost; index: number }) => (
        <motion.a
            href={`/blogs/${blog.slug}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2 }
            }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-black border border-border dark:border-gray-800 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="p-6">
                    {/* Blog content */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
                            {blog.heading}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                            {blog.subheading}
                        </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center space-x-2">
                            <IconCalendar className="w-4 h-4" />
                            <span>{new Date(blog.createdAt!).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>
                        <div className="text-xs font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                            /{blog.slug}
                        </div>
                    </div>

                    {/* Read blog button */}
                    <div className="flex ">
                        <button
                            className="px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
                        >
                            Read Blog
                        </button>
                    </div>
                </div>
            </div>
        </motion.a>
    );


    return (
        <Layout title="Blog Posts">
            <div className="space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Creative Blog Collection
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage and explore your content with style
                    </p>
                </motion.div>

                {/* Search and controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSearch} className="relative">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <IconSearch className="text-gray-400 dark:text-gray-500 w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search through your creative works..."
                                className="w-full pl-12 pr-24 py-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-lg transition-all duration-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    {/* View mode toggle */}
                    <div className="flex justify-center mt-6">
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-1 flex">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${viewMode === 'grid'
                                    ? 'bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                Grid View
                            </button>
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${viewMode === 'masonry'
                                    ? 'bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                Masonry View
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Loading state */}
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center items-center py-20"
                        >
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-gray-900 dark:border-t-white rounded-full animate-spin"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Empty state */}
                <AnimatePresence>
                    {!loading && blogs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                                <IconFileText className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                No blogs found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                Start creating your first blog post or adjust your search terms to find existing content.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Blog grid */}
                <AnimatePresence>
                    {!loading && blogs.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className={
                                viewMode === 'grid'
                                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                                    : "columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8"
                            }
                        >
                            <AnimatePresence>
                                {blogs.map((blog, index) => (
                                    <BlogCard key={blog.id} blog={blog} index={index} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                <AnimatePresence>
                    {totalPages > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mt-12"
                        >
                            <nav className="flex items-center space-x-2" aria-label="Pagination">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <motion.button
                                        key={page}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => fetchBlogs(page, searchTerm)}
                                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${currentPage === page
                                            ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white shadow-lg'
                                            : 'bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-800'
                                            }`}
                                    >
                                        {page}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
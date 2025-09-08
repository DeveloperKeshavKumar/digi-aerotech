// app/blog/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IconArrowLeft,
    IconCalendar,
    IconUser,
    IconTag,
    IconShare,
    IconHeart,
    IconAlertCircle,
    IconFileText
} from '@tabler/icons-react';

interface BlogParagraph {
    type: 'text' | 'image';
    content: string;
    imageCaption?: string;
}

interface BlogPost {
    id: number;
    heading: string;
    subheading: string;
    paragraphs: BlogParagraph[];
    slug: string;
    published: boolean;
    featuredImage?: string;
    author?: string;
    tags?: string[];
    createdAt: string;
    updatedAt?: string;
}

export default function BlogPage() {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug;

    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (slug) {
            const fetchBlog = async () => {
                try {
                    const res = await fetch(`/api/blogs/${slug}`);
                    const data = await res.json();
                    if (data.success && data.data.published) {
                        // Parse JSON strings to arrays
                        const blogData = {
                            ...data.data,
                            paragraphs: typeof data.data.paragraphs === 'string'
                                ? JSON.parse(data.data.paragraphs)
                                : data.data.paragraphs || [],
                            tags: typeof data.data.tags === 'string'
                                ? JSON.parse(data.data.tags)
                                : data.data.tags || []
                        };
                        setBlog(blogData);
                    } else {
                        setError(data.data?.published === false ? 'This blog post is not published yet' : 'Blog not found');
                    }
                } catch (err) {
                    setError('Failed to load blog post');
                } finally {
                    setLoading(false);
                }
            };
            fetchBlog();
        }
    }, [slug]);

    const handleShare = async () => {
        if (navigator.share && blog) {
            try {
                await navigator.share({
                    title: blog.heading,
                    text: blog.subheading,
                    url: window.location.href,
                });
            } catch (err) {
                // Fallback to clipboard
                navigator.clipboard.writeText(window.location.href);
            }
        } else if (blog) {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center items-center h-64"
                    >
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-gray-900 dark:border-t-white rounded-full animate-spin"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto mt-20"
                    >
                        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                                <IconAlertCircle className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {error === 'This blog post is not published yet' ? 'Coming Soon' : 'Not Found'}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
                            <Link
                                href="/blogs"
                                className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                Back to Blogs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mt-12 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Article Header */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8"
                >
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                            <IconCalendar className="w-4 h-4 mr-2" />
                            <time>{formatDate(blog.createdAt)}</time>
                        </div>

                        {blog.author && (
                            <div className="flex items-center">
                                <IconUser className="w-4 h-4 mr-2" />
                                <span>{blog.author}</span>
                            </div>
                        )}

                        <div className="flex items-center space-x-2 ml-auto">

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleShare}
                                className="p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
                            >
                                <IconShare className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Title and Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            {blog.heading}
                        </h1>

                        {blog.subheading && (
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                {blog.subheading}
                            </p>
                        )}
                    </motion.div>

                    {/* Tags */}
                    <AnimatePresence>
                        {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex items-center flex-wrap gap-2 mb-8"
                            >
                                <IconTag className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                                {blog.tags.map((tag, index) => (
                                    <motion.span
                                        key={`${tag}-${index}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.article>

                {/* Featured Image */}
                <AnimatePresence>
                    {blog.featuredImage && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={blog.featuredImage}
                                alt={blog.heading}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="prose prose-lg dark:prose-invert max-w-none"
                >
                    <div className="space-y-8">
                        <AnimatePresence>
                            {Array.isArray(blog.paragraphs) && blog.paragraphs.map((paragraph, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                >
                                    {paragraph.type === 'text' ? (
                                        <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                                            {paragraph.content.split('\n').map((line, lineIndex) => (
                                                <p key={lineIndex} className="mb-4 last:mb-0">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    ) : paragraph.content ? (
                                        <figure className="my-8">
                                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                                <img
                                                    src={paragraph.content}
                                                    alt={paragraph.imageCaption || `Image ${index + 1}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                            {paragraph.imageCaption && (
                                                <figcaption className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4 italic">
                                                    {paragraph.imageCaption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    ) : null}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
                >
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                                <p>Last updated: {formatDate(blog.updatedAt)}</p>
                            )}
                        </div>

                        <Link
                            href="/blogs"
                            className="flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <IconFileText className="w-4 h-4 mr-2" />
                            More Articles
                        </Link>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
}
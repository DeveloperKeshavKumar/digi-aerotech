// pages/blogs/edit/[slug].tsx
"use client";
import { useState, useEffect } from 'react';
import Layout from './layout';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IconArrowLeft,
    IconDeviceFloppy,
    IconPlus,
    IconTrash,
    IconPhoto,
    IconFileText,
    IconToggleLeft,
    IconToggleRight,
    IconAlertCircle,
    IconUser,
    IconTag,
    IconLink,
    IconX
} from '@tabler/icons-react';

import { BlogPost } from '@/types/blogs.types';
import TagsInput from './tag-input';

export default function BlogEditor({ isNew = false }: { isNew?: boolean }) {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug;

    const [blog, setBlog] = useState<BlogPost>({
        heading: '',
        subheading: '',
        paragraphs: [{ type: 'text', content: '' }],
        slug: '',
        published: false,
    });
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isNew && slug) {
            const fetchBlog = async () => {
                try {
                    const res = await fetch(`/api/blogs/${slug}`);
                    const data = await res.json();
                    if (data.success) {
                        setBlog(data.data);
                    } else {
                        setError('Blog not found');
                    }
                } catch (err) {
                    setError('Failed to load blog');
                } finally {
                    setLoading(false);
                }
            };
            fetchBlog();
        }
    }, [isNew, slug]);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setSaving(true);
        setError('');

        try {
            const method = isNew ? 'POST' : 'PUT';
            const url = isNew ? '/api/blogs' : `/api/blogs/${slug}`;

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to save blog');
            }

            setBlog({
                heading: '',
                subheading: '',
                paragraphs: [{ type: 'text', content: '' }],
                slug: '',
                published: false,
            });

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to save blog');
        } finally {
            setSaving(false);
        }
    };

    const addParagraph = (type: 'text' | 'image') => {
        setBlog({
            ...blog,
            paragraphs: [...blog.paragraphs, { type, content: '' }],
        });
    };

    const updateParagraph = (index: number, field: string, value: string) => {
        const updatedParagraphs = [...blog.paragraphs];
        updatedParagraphs[index] = {
            ...updatedParagraphs[index],
            [field]: value,
        };
        setBlog({ ...blog, paragraphs: updatedParagraphs });
    };

    const removeParagraph = (index: number) => {
        if (blog.paragraphs.length > 1) {
            const updatedParagraphs = [...blog.paragraphs];
            updatedParagraphs.splice(index, 1);
            setBlog({ ...blog, paragraphs: updatedParagraphs });
        }
    };

    if (loading) {
        return (
            <Layout title={isNew ? 'New Blog Post' : 'Loading...'}>
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
            </Layout>
        );
    }

    if (error && !isNew) {
        return (
            <Layout title="Error">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto mt-20"
                >
                    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center shadow-lg">
                        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                            <IconX className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Error Saving Blog
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setError('')}
                                className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                            >
                                Back to Editing
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Layout>
        );
    }

    return (
        <Layout title={isNew ? 'New Blog Post' : blog.heading || 'Edit Blog Post'}>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-center"
                >
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/admin"
                            className="flex items-center px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 hover:scale-105"
                        >
                            <IconArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {isNew ? 'Create New Blog Post' : 'Edit Blog Post'}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {isNew ? 'Share your thoughts with the world' : 'Update your content'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Publish Toggle */}
                        <motion.label
                            className="flex items-center cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                {blog.published ? 'Publish' : 'Draft'}
                            </span>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={blog.published}
                                    onChange={(e) =>
                                        setBlog({ ...blog, published: e.target.checked })
                                    }
                                    className="sr-only"
                                />
                                {blog.published ? (
                                    <IconToggleRight className="w-8 h-8 text-green-500" />
                                ) : (
                                    <IconToggleLeft className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                                )}
                            </div>
                        </motion.label>

                        {/* Save Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() => handleSubmit()}
                            disabled={saving}
                            className="flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                        >
                            {saving ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <IconDeviceFloppy className="w-4 h-4 mr-2" />
                                    Save
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white dark:bg-black border border-red-200 dark:border-red-800 rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mr-4">
                                    <IconAlertCircle className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-red-800 dark:text-red-200">Error</h3>
                                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <IconFileText className="w-5 h-5 mr-2" />
                            Basic Information
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    value={blog.heading}
                                    onChange={(e) => setBlog({ ...blog, heading: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                    placeholder="Enter an engaging title..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subtitle
                                </label>
                                <input
                                    type="text"
                                    value={blog.subheading}
                                    onChange={(e) => setBlog({ ...blog, subheading: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                    placeholder="A compelling subtitle to hook your readers..."
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                                    <IconLink className="w-4 h-4 mr-1" />
                                    URL Slug
                                </label>
                                <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                                    <span className="inline-flex items-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm font-mono">
                                        /
                                    </span>
                                    <input
                                        type="text"
                                        value={blog.slug}
                                        onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
                                        className="flex-1 px-4 py-3 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:outline-none"
                                        placeholder="url-friendly-slug"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                                        <IconUser className="w-4 h-4 mr-1" />
                                        Author
                                    </label>
                                    <input
                                        type="text"
                                        value={blog.author || ''}
                                        onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                        placeholder="Author name"
                                    />
                                </div>

                                <div>
                                    {/* Tags Input Component */}
                                    <TagsInput
                                        tags={blog.tags || []}
                                        onChange={(newTags) => setBlog({ ...blog, tags: newTags })}
                                        placeholder="tech, tutorial, web development..."
                                        className=""
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                                    <IconPhoto className="w-4 h-4 mr-1" />
                                    Featured Image URL
                                </label>
                                <input
                                    type="url"
                                    value={blog.featuredImage || ''}
                                    onChange={(e) => setBlog({ ...blog, featuredImage: e.target.value })}
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                <IconFileText className="w-5 h-5 mr-2" />
                                Content Blocks
                            </h2>
                            <div className="flex space-x-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                    onClick={() => addParagraph('text')}
                                    className="flex items-center px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
                                >
                                    <IconPlus className="w-4 h-4 mr-2" />
                                    Add Text
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="button"
                                    onClick={() => addParagraph('image')}
                                    className="flex items-center px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
                                >
                                    <IconPhoto className="w-4 h-4 mr-2" />
                                    Add Image
                                </motion.button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <AnimatePresence>
                                {blog.paragraphs.map((paragraph, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                                    >
                                        {/* Block Header */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center space-x-2">
                                                {paragraph.type === 'text' ? (
                                                    <IconFileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                                ) : (
                                                    <IconPhoto className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                                )}
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {paragraph.type === 'text' ? 'Text Block' : 'Image Block'} #{index + 1}
                                                </span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newType = paragraph.type === 'text' ? 'image' : 'text';
                                                        updateParagraph(index, 'type', newType);
                                                    }}
                                                    className="text-xs px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                                >
                                                    Switch to {paragraph.type === 'text' ? 'Image' : 'Text'}
                                                </button>

                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    type="button"
                                                    onClick={() => removeParagraph(index)}
                                                    disabled={blog.paragraphs.length <= 1}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <IconTrash className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Block Content */}
                                        {paragraph.type === 'text' ? (
                                            <textarea
                                                value={paragraph.content}
                                                onChange={(e) =>
                                                    updateParagraph(index, 'content', e.target.value)
                                                }
                                                className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                                                rows={6}
                                                placeholder="Start writing your content here..."
                                            />
                                        ) : (
                                            <div className="space-y-4">
                                                <input
                                                    type="url"
                                                    value={paragraph.content}
                                                    onChange={(e) =>
                                                        updateParagraph(index, 'content', e.target.value)
                                                    }
                                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                                    placeholder="https://example.com/image.jpg"
                                                />
                                                <input
                                                    type="text"
                                                    value={paragraph.imageCaption || ''}
                                                    onChange={(e) =>
                                                        updateParagraph(index, 'imageCaption', e.target.value)
                                                    }
                                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all duration-200"
                                                    placeholder="Image caption (optional)"
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {blog.paragraphs.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-12 text-gray-500 dark:text-gray-400"
                                >
                                    <IconFileText className="w-12 h-12 mx-auto mb-4" />
                                    <p>No content blocks yet. Add your first block to get started!</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </form>
            </div>
        </Layout>
    );
}
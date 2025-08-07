// components/admin/blog-management.tsx
'use client';

import { Suspense } from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    Plus, Edit, Trash2, ChevronLeft, ChevronRight,
    Loader2, Eye, XCircle, CheckCircle,
    RefreshCw,
    Edit2
} from 'lucide-react';

interface BlogPost {
    id: number;
    slug: string;
    heading: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

interface Pagination {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
    page: number;
    totalPages: number;
}

export function BlogManagementSection() {
    return (
        <Suspense fallback={<Loader2 className="animate-spin" />}>
            <BlogManagementPage />
        </Suspense>
    );
}

function BlogManagementPage() {
    const router = useRouter();
    const [data, setData] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        limit: 10,
        offset: 0,
        hasMore: false,
        page: 1,
        totalPages: 1
    });
    const [sortConfig, setSortConfig] = useState<{ field: string; order: 'asc' | 'desc' }>({
        field: 'createdAt',
        order: 'desc',
    });
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const currentApiQueryParams = useMemo(() => {
        const params = new URLSearchParams();
        params.append('limit', pagination.limit.toString());
        params.append('page', pagination.page.toString());
        params.append('sort', sortConfig.field);
        params.append('order', sortConfig.order.toUpperCase());
        return params;
    }, [pagination.limit, pagination.page, sortConfig]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchBlogs = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/blogs?${currentApiQueryParams}`, { signal });
                if (!response.ok) throw new Error('Failed to fetch blogs');
                const result = await response.json();
                setData(result.data);
                setPagination(prev => ({
                    ...prev,
                    total: result.pagination.total,
                    totalPages: result.pagination.totalPages,
                    hasMore: result.pagination.page < result.pagination.totalPages
                }));
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError') return;
                console.error('Fetch error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
        return () => abortController.abort();
    }, [currentApiQueryParams.toString(), refreshTrigger]);

    const handleRefresh = useCallback(() => setRefreshTrigger((p) => p + 1), []);
    const handleSort = useCallback((field: string) => {
        setSortConfig((prev) => ({
            field,
            order: prev.field === field ? (prev.order === 'asc' ? 'desc' : 'asc') : 'desc',
        }));
        setPagination(prev => ({ ...prev, page: 1 }));
    }, []);
    const handlePageChange = useCallback((direction: 'prev' | 'next') => {
        setPagination(prev => {
            const newPage = direction === 'prev' ? Math.max(1, prev.page - 1) : prev.page + 1;
            return {
                ...prev,
                page: newPage,
                offset: (newPage - 1) * prev.limit,
                hasMore: newPage < prev.totalPages
            };
        });
    }, []);

    const handlePublishToggle = useCallback(async (slug: string, currentStatus: boolean) => {
        try {
            const response = await fetch(`/api/blogs/${slug}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ published: !currentStatus ? 1 : 0 }),
            });
            if (!response.ok) throw new Error('Failed to update publish status');
            handleRefresh();
        } catch (err) {
            console.error('Publish toggle error:', err);
            setError('Failed to update publish status');
        }
    }, [handleRefresh]);

    const handleDelete = useCallback(async (id: number, slug: string) => {
        try {
            const response = await fetch(`/api/blogs/${slug}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete blog post');
            handleRefresh();
        } catch (err) {
            console.error('Delete error:', err);
            setError('Failed to delete blog post');
        }
    }, [handleRefresh]);

    const handleBulkDelete = useCallback(async () => {
        if (selectedRows.length === 0) return;
        try {
            const deletePromises = selectedRows.map(id => {
                const blog = data.find(b => b.id === id);
                return blog ? fetch(`/api/blogs/${blog.slug}`, { method: 'DELETE' }) : Promise.reject();
            });
            const results = await Promise.all(deletePromises);
            const failed = results.some(res => !res.ok);
            if (failed) throw new Error('One or more deletions failed.');
            setSelectedRows([]);
            handleRefresh();
        } catch (err) {
            console.error('Bulk delete error:', err);
            setError('Failed to delete selected blog posts');
        }
    }, [selectedRows, data, handleRefresh]);

    const toggleRowSelection = useCallback((id: number) => {
        setSelectedRows(prev => (
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        ));
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-4 md:p-8 transition-colors">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold">Blog Management</h1>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => router.push('/blogs/create')}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300  rounded-md transition disabled:opacity-50"
                        >
                            <Plus size={16} /> Create New
                        </button>

                        <button
                            onClick={handleRefresh}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300  rounded-md transition disabled:opacity-50"
                        >
                            {loading ? (
                                <Loader2 size={16} className="animate-spin" />
                            ) : (
                                <RefreshCw size={16} />
                            )}
                            Refresh
                        </button>

                        {selectedRows.length > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/30 transition disabled:opacity-50"
                            >
                                <Trash2 size={16} /> Delete Selected
                            </button>
                        )}
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-md"
                    >
                        {error}
                    </motion.div>
                )}

                {/* Data Table */}
                <div className="overflow-x-auto max-h-[30vh] overflow-y-auto hide-scrollbar border border-gray-200 dark:border-gray-700 rounded-md">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-950">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-8">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.length > 0 && selectedRows.length === data.length}
                                        onChange={() => {
                                            if (selectedRows.length === data.length) {
                                                setSelectedRows([]);
                                            } else {
                                                setSelectedRows(data.map(item => item.id));
                                            }
                                        }}
                                        className="rounded border-gray-300  text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:bg-gray-900"
                                    />
                                </th>
                                <th
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                                    onClick={() => handleSort('id')}
                                >
                                    <div className="flex items-center gap-1">
                                        ID
                                        {sortConfig.field === 'id' && (
                                            <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Slug
                                </th>
                                <th
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                                    onClick={() => handleSort('title')}
                                >
                                    <div className="flex items-center gap-1">
                                        Heading
                                        {sortConfig.field === 'title' && (
                                            <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                                    onClick={() => handleSort('published')}
                                >
                                    <div className="flex items-center gap-1">
                                        Status
                                        {sortConfig.field === 'published' && (
                                            <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </div>
                                </th>
                                <th
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                                    onClick={() => handleSort('createdAt')}
                                >
                                    <div className="flex items-center gap-1">
                                        Created
                                        {sortConfig.field === 'createdAt' && (
                                            <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-700">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-6 text-center">
                                        <div className="flex justify-center">
                                            <Loader2 className="animate-spin text-gray-500 dark:text-gray-400 text-2xl" />
                                        </div>
                                    </td>
                                </tr>
                            ) : data.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                        No blog posts found
                                    </td>
                                </tr>
                            ) : (
                                data.map((post) => (
                                    <motion.tr
                                        key={post.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={`hover:bg-gray-50 dark:hover:bg-gray-900 ${selectedRows.includes(post.id) ? 'bg-gray-100 dark:bg-gray-950' : ''}`}
                                    >
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(post.id)}
                                                onChange={() => toggleRowSelection(post.id)}
                                                className="rounded border-gray-300  text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:bg-gray-900"
                                            />
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {post.id}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {post.slug.length > 25 ? `${post.slug.substring(0, 25)}...` : post.slug}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {post.heading.length > 50 ? `${post.heading.substring(0, 50)}...` : post.heading}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <button
                                                onClick={() => handlePublishToggle(post.slug, post.published)}
                                                className={`px-2 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${post.published ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'}`}
                                            >
                                                {post.published ? (
                                                    <>
                                                        <CheckCircle size={14} /> Published <Edit2 size={14} />
                                                    </>
                                                ) : (
                                                    <>
                                                        <XCircle size={14} /> Draft <Edit2 size={14} />
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {formatDate(post.createdAt)}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 flex gap-2">
                                            <button
                                                onClick={() => router.push(`/blogs/${post.slug}`)}
                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 p-1"
                                                title="View"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                onClick={() => router.push(`/blogs/${post.slug}/edit`)}
                                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 p-1"
                                                title="Edit"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id, post.slug)}
                                                className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 p-1"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination.limit !== null && (
                    <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            Showing <span className="font-medium">{pagination.offset + 1}</span> to{' '}
                            <span className="font-medium">
                                {Math.min(pagination.offset + (pagination.limit || 0), pagination.total)}
                            </span>{' '}
                            of <span className="font-medium">{pagination.total}</span> posts
                        </div>

                        <div className="flex space-x-2">
                            <button
                                onClick={() => handlePageChange('prev')}
                                disabled={pagination.offset === 0 || loading}
                                className="px-3 py-1 border border-gray-300  rounded-md flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <ChevronLeft size={16} /> Previous
                            </button>

                            <button
                                onClick={() => handlePageChange('next')}
                                disabled={!pagination.hasMore || loading}
                                className="px-3 py-1 border border-gray-300  rounded-md flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                Next <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
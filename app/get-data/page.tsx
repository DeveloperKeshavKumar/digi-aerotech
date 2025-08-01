'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Download, RefreshCw, Trash2, ChevronLeft, ChevronRight,
  Filter, X, Loader2,
  XCircle,
  CheckCircle,
  Lock,
  Key,
  Unlock
} from 'lucide-react';

interface ContactQuery {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  business_type: string;
  form_type: 'contact' | 'business-growth' | 'all';
  start_date: string;
  website?: string;
  created_at: string;
  status: 'new' | 'in_progress' | 'resolved';
}

interface Pagination {
  total: number;
  limit: number | null;
  offset: number;
  hasMore: boolean;
}

interface Filters {
  form_type: 'contact' | 'business-growth' | 'all';
  status: 'new' | 'in_progress' | 'resolved' | 'all';
  search: string;
}

export default function ContactQueriesDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read search params only once at mount
  const initialFilters = useMemo(() => {
    return {
      form_type: (searchParams.get('form_type') as Filters['form_type']) || 'all',
      status: (searchParams.get('status') as Filters['status']) || 'all',
      search: searchParams.get('search') || '',
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Don't depend on searchParams directly

  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [data, setData] = useState<ContactQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });
  const [sortConfig, setSortConfig] = useState<{ field: string; order: 'asc' | 'desc' }>({
    field: 'created_at',
    order: 'desc',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const currentApiQueryParams = useMemo(() => {
    const params = new URLSearchParams();
    params.append('form_type', filters.form_type);
    if (filters.status !== 'all') params.append('status', filters.status);
    if (filters.search) params.append('search', filters.search);
    if (pagination.limit !== null) {
      params.append('limit', pagination.limit.toString());
      params.append('offset', pagination.offset.toString());
    }
    params.append('sort', sortConfig.field);
    params.append('order', sortConfig.order.toUpperCase());
    return params;
  }, [filters, pagination.limit, pagination.offset, sortConfig]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchQueries = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/getQueries?${currentApiQueryParams}`, { signal });
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result.data);
        setPagination(result.pagination);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
    return () => abortController.abort();
  }, [currentApiQueryParams.toString(), refreshTrigger]);

  // Synchronize filters with URL
  useEffect(() => {
    const newUrlParams = new URLSearchParams();
    if (filters.form_type !== 'all') newUrlParams.append('form_type', filters.form_type);
    if (filters.status !== 'all') newUrlParams.append('status', filters.status);
    if (filters.search) newUrlParams.append('search', filters.search);
    router.replace(`/get-data?${newUrlParams.toString()}`, { scroll: false });
  }, [filters, router]);

  const handleRefresh = useCallback(() => setRefreshTrigger((p) => p + 1), []);
  const handleFilterChange = useCallback((key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPagination((prev) => ({ ...prev, offset: 0 }));
  }, []);
  const handleSort = useCallback((field: string) => {
    setSortConfig((prev) => ({
      field,
      order: prev.field === field ? (prev.order === 'asc' ? 'desc' : 'asc') : 'desc',
    }));
    setPagination((prev) => ({ ...prev, offset: 0 }));
  }, []);
  const handlePageChange = useCallback((direction: 'prev' | 'next') => {
    if (!pagination.limit) return;
    const newOffset = direction === 'prev'
      ? Math.max(0, pagination.offset - pagination.limit)
      : pagination.offset + pagination.limit;
    setPagination((prev) => ({ ...prev, offset: newOffset }));
  }, [pagination]);
  const handleExport = useCallback(async () => {
    try {
      const params = new URLSearchParams(currentApiQueryParams);
      params.append('format', 'excel');
      const response = await fetch(`/api/getQueries?${params}`);
      if (!response.ok) throw new Error('Failed to export data');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `queries-${new Date().toISOString().split('T')[0]}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export error:', err);
      setError('Failed to export data');
    }
  }, [currentApiQueryParams]);

  const handleStatusUpdate = useCallback(async (id: number, newStatus: ContactQuery['status']) => {
    try {
      const response = await fetch('/api/getQueries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update status');
      handleRefresh();
    } catch (err) {
      console.error('Update error:', err);
      setError('Failed to update status');
    }
  }, [handleRefresh]);

  const handleDelete = useCallback(async (id: number) => {
    try {
      const response = await fetch(`/api/getQueries?id=${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete query');
      handleRefresh();
    } catch (err) {
      console.error('Delete error:', err);
      setError('Failed to delete query');
    }
  }, [handleRefresh]);

  const handleBulkDelete = useCallback(async () => {
    if (selectedRows.length === 0) return;
    try {
      const deletePromises = selectedRows.map(id =>
        fetch(`/api/getQueries?id=${id}`, { method: 'DELETE' })
      );
      const results = await Promise.all(deletePromises);
      const failed = results.some(res => !res.ok);
      if (failed) throw new Error('One or more deletions failed.');
      setSelectedRows([]);
      handleRefresh();
    } catch (err) {
      console.error('Bulk delete error:', err);
      setError('Failed to delete selected queries');
    }
  }, [selectedRows, handleRefresh]);

  const toggleRowSelection = useCallback((id: number) => {
    setSelectedRows(prev => (
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    ));
  }, []);

  const getStatusColor = (status: ContactQuery['status']) => {
    switch (status) {
      case 'new': return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
      case 'in_progress': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'resolved': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success" | "loading">("idle");

  const handleAuth = () => {
    if (input === process.env.NEXT_PUBLIC_APP_SECRET) {
      setStatus("success");
      setTimeout(() => setIsAuthenticated(true), 800);
    } else {
      setStatus("error");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="p-8 w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-orange-100 dark:bg-pink-900/30 blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-pink-100 dark:bg-orange-900/30 blur-xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-8">
              <div className="p-3 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 shadow-inner">
                <Lock className="w-8 h-8 text-gray-700 dark:text-gray-200" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Admin Portal</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Enter your secret key to continue
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                  autoComplete="off"
                  autoFocus
                />
                <Key className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                onClick={handleAuth}
                className="w-full bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Unlock className="w-4 h-4" />
                    Authenticate
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm flex items-center gap-2"
                  >
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Invalid secret key. Please try again.</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 text-sm flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Authentication successful! Redirecting...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                For authorized personnel only. Unauthorized access prohibited.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="min-h-screen mt-16 bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-4 md:p-8 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact Queries Dashboard</h1>

        {/* Filters and Actions */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-black transition"
            >
              <Filter size={16} /> Filters
            </button>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md w-full md:w-64 bg-white dark:bg-black"
              />
              {filters.search && (
                <button
                  onClick={() => handleFilterChange('search', '')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-black transition disabled:opacity-50"
            >
              <Download size={16} /> Export
            </button>

            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-black transition disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />} Refresh
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

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-black"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Form Type</label>
                <select
                  value={filters.form_type}
                  onChange={(e) => handleFilterChange('form_type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950 "
                >
                  <option value="all">All Forms</option>
                  <option value="contact">Contact Form</option>
                  <option value="business-growth">Business Growth Form</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Items Per Page</label>
                <select
                  value={pagination.limit || ''}
                  onChange={(e) => setPagination(prev => ({
                    ...prev,
                    limit: e.target.value ? parseInt(e.target.value) : null,
                    offset: 0,
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="">All</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

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
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-md">
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
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:bg-gray-900"
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
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Name
                    {sortConfig.field === 'name' && (
                      <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={() => handleSort('service')}
                >
                  <div className="flex items-center gap-1">
                    Service
                    {sortConfig.field === 'service' && (
                      <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Business Info
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={() => handleSort('created_at')}
                >
                  <div className="flex items-center gap-1">
                    Submitted
                    {sortConfig.field === 'created_at' && (
                      <span>{sortConfig.order === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-4 py-6 text-center">
                    <div className="flex justify-center">
                      <Loader2 className="animate-spin text-gray-500 dark:text-gray-400 text-2xl" />
                    </div>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                    No queries found matching your criteria
                  </td>
                </tr>
              ) : (
                data.map((query) => (
                  <motion.tr
                    key={query.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`hover:bg-gray-50 dark:hover:bg-gray-900 ${selectedRows.includes(query.id) ? 'bg-gray-100 dark:bg-gray-950' : ''}`}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(query.id)}
                        onChange={() => toggleRowSelection(query.id)}
                        className="rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:bg-gray-900"
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {query.id}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {query.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <div>{query.email}</div>
                      <div>{query.phone}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {query.service}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <div><strong>Type:</strong> {query.business_type}</div>
                      {query.website && <div><strong>Website:</strong> {query.website}</div>}
                      {query.start_date && <div><strong>Start Date:</strong> {query.start_date}</div>}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(query.created_at)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <select
                        value={query.status}
                        onChange={(e) => handleStatusUpdate(query.id, e.target.value as any)}
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(query.status)}`}
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button
                        onClick={() => handleDelete(query.id)}
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
        {pagination.limit !== null && ( // Ensure limit is not null before rendering pagination info
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing <span className="font-medium">{pagination.offset + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(pagination.offset + (pagination.limit || 0), pagination.total)} {/* Use limit or 0 for safety */}
              </span>{' '}
              of <span className="font-medium">{pagination.total}</span> results
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange('prev')}
                disabled={pagination.offset === 0 || loading}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <button
                onClick={() => handlePageChange('next')}
                disabled={!pagination.hasMore || loading}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-900"
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
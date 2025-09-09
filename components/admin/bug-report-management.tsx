// components/admin/bug-reports-management.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Eye, Trash2, RefreshCw, Loader2, Mail,
  ChevronLeft, ChevronRight, Filter, X
} from 'lucide-react';

interface BugReport {
  id: number;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  reporter_email?: string;
  created_at: string;
  updated_at: string;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

interface Filters {
  status: string;
  severity: string;
  search: string;
}

export function BugReportsManagement() {
  const [bugReports, setBugReports] = useState<BugReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
  });
  const [filters, setFilters] = useState<Filters>({
    status: 'all',
    severity: 'all',
    search: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [selectedBug, setSelectedBug] = useState<BugReport | null>(null);

  useEffect(() => {
    fetchBugReports();
  }, [filters, pagination.offset, refreshTrigger]);

  const fetchBugReports = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (filters.status !== 'all') params.append('status', filters.status);
      if (filters.severity !== 'all') params.append('severity', filters.severity);
      if (filters.search) params.append('search', filters.search);
      params.append('limit', pagination.limit.toString());
      params.append('offset', pagination.offset.toString());

      const response = await fetch(`/api/bug-reports?${params}`);
      if (!response.ok) throw new Error('Failed to fetch bug reports');
      const data = await response.json();
      setBugReports(data.bug_reports);
      setPagination(data.pagination || { total: data.bug_reports.length, limit: 10, offset: 0, hasMore: false });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch bug reports');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this bug report?')) return;

    try {
      const response = await fetch(`/api/bug-reports/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete bug report');
      setRefreshTrigger(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete bug report');
    }
  };

  const updateStatus = async (id: number, status: BugReport['status']) => {
    try {
      const response = await fetch(`/api/bug-reports/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update bug report status');
      setRefreshTrigger(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update bug report status');
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, offset: 0 }));
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    const newOffset = direction === 'prev'
      ? Math.max(0, pagination.offset - pagination.limit)
      : pagination.offset + pagination.limit;
    setPagination(prev => ({ ...prev, offset: newOffset }));
  };

  const getStatusColor = (status: BugReport['status']) => {
    switch (status) {
      case 'open': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getSeverityColor = (severity: BugReport['severity']) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className=" p-6 mb-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bug Reports Management</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
          >
            <Filter size={16} /> Filters
          </button>
          <button
            onClick={fetchBugReports}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Severity</label>
            <select
              value={filters.severity}
              onChange={(e) => handleFilterChange('severity', e.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950"
            >
              <option value="all">All Severities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              placeholder="Search by title or description"
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-md">
          {error}
        </div>
      )}

      {/* Bug Reports Table */}
      <div className="overflow-x-auto outline rounded-md">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-950">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Severity</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Reporter</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Reported</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center">
                  <Loader2 className="animate-spin mx-auto text-gray-500 dark:text-gray-400" />
                </td>
              </tr>
            ) : bugReports.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                  No bug reports found
                </td>
              </tr>
            ) : (
              bugReports.map((bug) => (
                <tr key={bug.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900 dark:text-gray-100">{bug.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{bug.description}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(bug.severity)}`}>
                      {bug.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {bug.reporter_email || 'Anonymous'}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {new Date(bug.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={bug.status}
                      onChange={(e) => updateStatus(bug.id, e.target.value as BugReport['status'])}
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(bug.status)}`}
                    >
                      <option value="open">Open</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => setSelectedBug(bug)}
                      className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                    {bug.reporter_email && (
                      <a
                        href={`mailto:${bug.reporter_email}`}
                        className="p-2 bg-green-100 text-green-600 rounded hover:bg-green-200"
                        title="Contact Reporter"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => handleDelete(bug.id)}
                      className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Bug Report Detail Modal */}
      {selectedBug && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto border border-pink-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedBug.title}</h3>
              <button
                onClick={() => setSelectedBug(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Severity</label>
                <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(selectedBug.severity)}`}>
                  {selectedBug.severity}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Status</label>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(selectedBug.status)}`}>
                  {selectedBug.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Reported By</label>
                <p>{selectedBug.reporter_email || 'Anonymous'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Reported On</label>
                <p>{new Date(selectedBug.created_at).toLocaleString()}</p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Description</label>
              <p className="mt-1 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{selectedBug.description}</p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedBug(null)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      {pagination.total > pagination.limit && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {pagination.offset + 1} to {Math.min(pagination.offset + pagination.limit, pagination.total)} of {pagination.total} bug reports
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={pagination.offset === 0}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => handlePageChange('next')}
              disabled={!pagination.hasMore}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
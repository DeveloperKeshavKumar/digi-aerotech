'use client'; 
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download,  Loader2, Key } from 'lucide-react'; 

interface ContactQuery {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    business_type: string;
    start_date: string;
    created_at: string;
    status: 'new' | 'in_progress' | 'resolved';
}

interface Pagination {
  total: number;
  limit: number | null;
  offset: number;
  hasMore: boolean;
}

interface StatusDropdownProps {
  currentStatus: ContactQuery['status'];
  onStatusChange: (newStatus: ContactQuery['status']) => void;
  statusColors: { [key: string]: string };
}

const StatusDropdown = ({ currentStatus, onStatusChange, statusColors }: StatusDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (status: ContactQuery['status']) => {
    onStatusChange(status);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const statuses: ContactQuery['status'][] = ['new', 'in_progress', 'resolved'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`inline-flex w-full justify-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm transition-colors duration-200 ${statusColors[currentStatus]}`}
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentStatus.replace(/_/g, ' ')}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 focus:outline-none"
          >
            <div className="py-1">
              {statuses.map(status => (
                <button
                  key={status}
                  onClick={() => handleSelect(status)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ${currentStatus === status ? 'font-bold' : ''}`}
                >
                  {status.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'in_progress' | 'resolved'>('all');

  const [apiSecret, setApiSecret] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Effect to fetch queries from the API, now dependent on authorization
  useEffect(() => {
    async function fetchQueries() {
      if (!isAuthorized) {
        return; // Do not fetch if not authorized
      }
      setLoading(true);
      setError(null);
      try {
        const url = `/api/getQueries?status=${filterStatus === 'all' ? '' : filterStatus}`;
        const res = await fetch(url, {
          headers: {
            'x-api-secret': apiSecret,
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch queries. Check API secret and network.');
        }
        const { data, pagination } = await res.json();
        setQueries(data);
        setPagination(pagination);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQueries();
  }, [filterStatus, isAuthorized, apiSecret]);

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    const CORRECT_SECRET = process.env.NEXT_PUBLIC_APP_SECRET; 
    console.log('API Secret:', apiSecret); // Debugging line
    console.log('Correct Secret:', CORRECT_SECRET); // Debugging line

    if (apiSecret === CORRECT_SECRET) {
      setIsAuthorized(true);
      setAuthError(null);
    } else {
      setAuthError("Incorrect API Secret. Please try again.");
    }
  };

  const handleExcelDownload = async () => {
    try {
      const url = `/api/getQueries?format=excel`;
      const res = await fetch(url, {
         headers: {
            'x-api-secret': apiSecret,
          },
      });
      if (!res.ok) {
        throw new Error('Failed to download Excel file');
      }
      const blob = await res.blob();
      const filename = `contact-queries-${new Date().toISOString().split('T')[0]}.xlsx`;
      const urlObject = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlObject;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(urlObject);
    } catch (e) {
      console.error('Download error:', e);
    }
  };

  const handleUpdateStatus = async (id: number, newStatus: ContactQuery['status']) => {
    try {
      await fetch('/api/getQueries', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-api-secret': apiSecret,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setQueries(prevQueries =>
        prevQueries.map(query =>
          query.id === id ? { ...query, status: newStatus } : query
        )
      );
    } catch (e) {
      console.error('Failed to update status:', e);
    }
  };

  const statusColors = {
    new: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    resolved: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    all: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
  };

  return (
    <div className="min-h-screen mt-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {!isAuthorized ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen"
          >
            <div className="p-8 md:p-12 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl max-w-md w-full">
              <div className="flex justify-center mb-6">
                <Key className="text-gray-500 dark:text-gray-400" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Enter API Secret</h2>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
                Please provide the secret key to access the dashboard.
              </p>
              <form onSubmit={handleAuthorize} className="space-y-4">
                <div>
                  <label htmlFor="api-secret" className="sr-only">API Secret</label>
                  <input
                    id="api-secret"
                    type="password"
                    value={apiSecret}
                    onChange={(e) => setApiSecret(e.target.value)}
                    placeholder="Enter your API secret"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all"
                  />
                </div>
                {authError && (
                  <p className="text-red-500 text-sm text-center">{authError}</p>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Enter Dashboard
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Header Section */}
            <motion.header
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b-2 border-gray-200 dark:border-gray-800"
            >
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-0">
                Contact Queries Dashboard
              </h1>
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={handleExcelDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Download size={18} />
                  <span>Export to Excel</span>
                </motion.button>
              </div>
            </motion.header>

            {/* Filter and Content Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Status Filter Buttons */}
              <div className="mb-8 flex flex-wrap gap-2">
                {['all', 'new', 'in_progress', 'resolved'].map(status => (
                  <motion.button
                    key={status}
                    onClick={() => setFilterStatus(status as any)}
                    className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 capitalize ${
                      filterStatus === status
                        ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {status.replace(/_/g, ' ')}
                  </motion.button>
                ))}
              </div>

              {/* Loading, Error, and Data Display */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="animate-spin text-gray-500" size={32} />
                </div>
              ) : error ? (
                <div className="text-center text-red-500 py-12">
                  <p>Error: {error}</p>
                  <p>Please check your API endpoint and database connection.</p>
                </div>
              ) : queries.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <p>No queries found for the selected status.</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Phone</th>
                        <th scope="col" className="px-6 py-3">Service</th>
                        <th scope="col" className="px-6 py-3">Business Type</th>
                        <th scope="col" className="px-6 py-3">Start Date</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Created At</th>
                      </tr>
                    </thead>
                    <AnimatePresence>
                      <motion.tbody
                        className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-800"
                      >
                        {queries.map(query => (
                          <motion.tr
                            key={query.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{query.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.service}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.business_type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{query.start_date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <StatusDropdown
                                currentStatus={query.status}
                                onStatusChange={(newStatus) => handleUpdateStatus(query.id, newStatus)}
                                statusColors={statusColors}
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(query.created_at).toLocaleString()}</td>
                          </motion.tr>
                        ))}
                      </motion.tbody>
                    </AnimatePresence>
                  </table>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

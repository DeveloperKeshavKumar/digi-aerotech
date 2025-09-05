'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import type { Job } from '@/app/api/jobs/jobs.types';

export default function JobForm() {
  const router = useRouter();
  const params = useParams();
  const jobId = params.id as string | undefined;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!jobId);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<Omit<Job, 'id'>>({
    title: '',
    department: '',
    location: '',
    type: 'full-time',
    description: '',
    requirements: '',
    responsibilities: '',
    salary_range: '',
    is_active: true,
  });

  // Fetch job data if in edit mode
  useEffect(() => {
    if (jobId) {
      fetchJobData();
    }
  }, [jobId]);

  const fetchJobData = async () => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch job data');
      }
      const data = await response.json();
      setFormData(data.job);
    } catch (err) {
      setError('Failed to load job data');
      console.error('Error fetching job:', err);
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = jobId ? `/api/jobs/${jobId}` : '/api/jobs';
      const method = jobId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/jobs');
        router.refresh();
      } else {
        setError(data.error || `Failed to ${jobId ? 'update' : 'create'} job`);
      }
    } catch (err) {
      setError(`Failed to ${jobId ? 'update' : 'create'} job`);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-100 dark:bg-black p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-12">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-200 dark:border-neutral-800 border-t-red-600 dark:border-t-white"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-300 dark:border-t-neutral-600 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 dark:bg-black">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 dark:bg-black dark:border-neutral-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2h-4zm-8 0V4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                {jobId ? 'Edit Job Posting' : 'Create New Job Posting'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">
                {jobId ? 'Update your job posting details' : 'Fill in the details to create an amazing job posting'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 pt-8">
        {error && (
          <div className="mb-6 bg-gradient-to-r from-red-50 to-red-100 dark:bg-neutral-900 border border-red-200 dark:border-red-900 rounded-xl p-4 shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-800 dark:text-red-400 font-medium">{error}</span>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Row: Basic Info (Left) + Job Description (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Basic Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:bg-neutral-900 dark:border-neutral-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Basic Information</h2>
              </div>
              
              <div className="space-y-5">
                <div className="group">
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                      Department *
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                      placeholder="Engineering"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                      placeholder="Remote / New York"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                      Job Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                      Salary Range
                    </label>
                    <input
                      type="text"
                      name="salary_range"
                      value={formData.salary_range}
                      onChange={handleChange}
                      placeholder="$50,000 - $70,000"
                      className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {jobId && (
                  <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-4 border border-gray-200 dark:border-neutral-700">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="is_active"
                          checked={formData.is_active}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <div className={`w-11 h-6 ${formData.is_active ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-red-500' : 'bg-gray-300 dark:bg-neutral-600'} rounded-full transition-all duration-200 ease-in-out`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${formData.is_active ? 'translate-x-5' : 'translate-x-0.5'} mt-2`}></div>
                        </div>
                      </div>
                      <span className="ml-3 text-sm font-semibold text-gray-700 dark:text-neutral-300">Active Job Posting</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Job Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:bg-neutral-900 dark:border-neutral-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Job Description</h2>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="Describe the role, team, and company culture...

We are looking for a talented developer to join our growing team. You'll work on exciting projects and collaborate with amazing people..."
                />
              </div>
            </div>
          </div>

          {/* Second Row: Requirements (Left) + Responsibilities (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Requirements */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:bg-neutral-900 dark:border-neutral-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Requirements</h2>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                  Required Skills & Qualifications *
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="• Bachelor's degree in Computer Science or related field
• 3+ years of experience with React
• Strong understanding of TypeScript
• Experience with modern CSS frameworks
• Knowledge of RESTful APIs"
                />
              </div>
            </div>

            {/* Right Column: Responsibilities */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:bg-neutral-900 dark:border-neutral-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Responsibilities</h2>
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-neutral-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors">
                  Key Responsibilities *
                </label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full p-4 border-2 border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="• Develop new user-facing features using React
• Build reusable components and front-end libraries
• Collaborate with design and backend teams
• Optimize applications for maximum speed and scalability
• Write clean, maintainable code"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:bg-neutral-900 dark:border-neutral-800 p-6 shadow-lg">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-700 focus:ring-4 focus:ring-gray-500/20 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 disabled:from-blue-400 disabled:to-indigo-400 text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:cursor-not-allowed min-w-[160px] transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  {jobId ? 'Updating...' : 'Creating...'}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {jobId ? 'Update Job' : 'Create Job'}
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

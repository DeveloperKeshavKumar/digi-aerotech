// components/jobs/JobDetails.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Building, Calendar, IndianRupee } from 'lucide-react';
import { Job } from '@/app/api/jobs/jobs.types';

interface JobDetailsProps {
    jobId: string;
    showApplyButton?: boolean;
}

export function JobDetails({ jobId, showApplyButton = true }: JobDetailsProps) {
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchJobDetails();
    }, [jobId]);

    const fetchJobDetails = async () => {
        try {
            const response = await fetch(`/api/jobs/${jobId}`);
            if (!response.ok) throw new Error('Failed to fetch job details');
            const data = await response.json();
            setJob(data.job);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch job details');
        } finally {
            setLoading(false);
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'full-time': return 'Full Time';
            case 'part-time': return 'Part Time';
            case 'contract': return 'Contract';
            case 'internship': return 'Internship';
            default: return type;
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-4 rounded-md">
                <p>{error}</p>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 p-4 rounded-md">
                <p>Job not found</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
        >
            {/* Job Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {job.title}
                        </h1>

                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <Building size={16} />
                                <span>{job.department}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <MapPin size={16} />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <Clock size={16} />
                                <span className="capitalize">{getTypeLabel(job.type)}</span>
                            </div>
                        </div>

                        {job.salary_range && (
                            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold">
                                <IndianRupee size={16} />
                                <span>{job.salary_range}</span>
                            </div>
                        )}
                    </div>

                    {showApplyButton && (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={`/jobs/apply/${job.id}`}
                                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Apply Now
                            </a>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Job Content */}
            <div className="p-6 space-y-6">
                {/* Overview */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Job Overview</h2>
                    <div className="flex gap-2 mb-4 justify-center items-stretch">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border flex-1">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Department</div>
                            <div className="font-medium text-gray-900 dark:text-white">{job.department}</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border flex-1">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</div>
                            <div className="font-medium text-gray-900 dark:text-white">{job.location}</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border flex-1">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Job Type</div>
                            <div className="font-medium text-gray-900 dark:text-white capitalize">{job.type}</div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border flex-1">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Salary Range</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                                {job.salary_range || 'Competitive'}
                            </div>
                        </div>
                    </div>  
                </section>

                {/* Description */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Job Description</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                            {job.description}
                        </p>
                    </div>
                </section>

                {/* Responsibilities */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {job.responsibilities.split('\n').filter(Boolean).map((responsibility, index) => (
                                <li key={index} className="leading-relaxed">
                                    {responsibility.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Requirements */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Requirements</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {job.requirements.split('\n').filter(Boolean).map((requirement, index) => (
                                <li key={index} className="leading-relaxed">
                                    {requirement.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Additional Info */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Additional Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>
                                Posted: {job.created_at ? new Date(job.created_at).toLocaleDateString() : "N/A"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Status: {job.is_active ? 'Active' : 'Closed'}</span>
                        </div>
                    </div>
                </section>

                {/* Apply Button at Bottom */}
                {showApplyButton && (
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`/jobs/apply/${job.id}`}
                                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Apply for this Position
                            </motion.a>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
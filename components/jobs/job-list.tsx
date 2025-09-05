'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Job } from '@/app/api/jobs/jobs.types';
import { Loader2 } from 'lucide-react';

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      if (response.ok) {
        setJobs(data.jobs);
      } else {
        setError(data.error || 'Failed to fetch jobs');
      }
    } catch (err) {
      setError('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6 w-full min-h-[200px] mx-auto flex justify-center items-center"><Loader2 /></div>;
  if (error) return <div className="p-6 w-full min-h-[200px] mx-auto flex justify-center items-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-7xl lg:min-h-screen mt-12 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Current Job Openings</h1>
      </div>

      {jobs.length === 0 ? (
        <p>No job openings at the moment. Please check back later.</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <div className="flex gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>{job.department}</span>
                  <span>{job.location}</span>
                  <span className="capitalize">{job.type}</span>
                  {job.salary_range && <span>{job.salary_range}</span>}
                </div>
                <p className="mt-3 line-clamp-2">{job.description}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/careers/${job.id}/apply`}
                  className="ml-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-4 py-3 rounded-md text-sm "
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
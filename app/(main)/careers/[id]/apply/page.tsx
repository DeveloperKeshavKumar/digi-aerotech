// app/jobs/apply/[id]/page.tsx
'use client';

import { JobDetails } from '@/components/jobs/job-details';
import ApplicationForm from '@/components/applications/form';
import { useState, useEffect } from 'react';
import { Job } from '@/app/api/jobs/jobs.types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ApplyPage() {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  
  const params = useParams<{ id: string }>();

  useEffect(() => {
    fetchJobDetails();
  }, [params]);

  const fetchJobDetails = async () => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setJob(data.job);
      }
    } catch (err) {
      console.error('Failed to fetch job details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-4 rounded-md">
            <p>Job not found or no longer available.</p>
            <Link href="/jobs" className="text-blue-500 hover:underline mt-2 inline-block">
              Browse all jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:min-h-screen mt-12 bg-white dark:bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href={`/careers`}
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-6"
        >
          <ArrowLeft size={16} />
          Back to All Careers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Details */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <JobDetails jobId={params.id} showApplyButton={false} />
          </div>

          {/* Application Form */}
          <div className="bg-white border dark:bg-gray-900 rounded-lg shadow-md p-6">
            <div className="mb-2">
              <p className="text-gray-600 dark:text-gray-400">
                Please fill out the form below to apply for this position.
              </p>
            </div>

            <ApplicationForm jobId={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
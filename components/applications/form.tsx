'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Job } from '@/app/api/jobs/jobs.types';
import type { JobApplication } from '@/app/api/applications/job-applications.types';

interface ApplicationFormProps {
  jobId: string;
}

export default function ApplicationForm({ jobId }: ApplicationFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<Omit<JobApplication, 'id' | 'status' | 'created_at'>>({
    job_id: parseInt(jobId),
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    cover_letter: '',
  });

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`);
      const data = await response.json();
      if (response.ok) {
        setJob(data.job);
      }
    } catch (err) {
      console.error('Failed to fetch job details');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Application submitted successfully!');
        router.push('/careers');
      } else {
        setError(data.error || 'Failed to submit application');
      }
    } catch (err) {
      setError('Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  if (!job) return <div className="p-6">Loading job details...</div>;

  return (
    <div className="p-6 dark:black max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Apply for: {job.title}</h1>
      <p className="text-gray-600 mb-6">{job.department} • {job.location} • {job.type}</p>
      
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cover Letter (optional)</label>
          <textarea
            name="cover_letter"
            value={formData.cover_letter}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Why are you interested in this position?"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 via-pink-500  to-red-500 text-white px-4 py-2 rounded-md hover:scale-105 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            title='This action will take you back to the previous page.'
            className="bg-gray-300 dark:bg-gray-500 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
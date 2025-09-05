'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BugReport } from '@/app/api/bug-reports/bug-report.types';

export default function BugReportForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<Omit<BugReport, 'id' | 'status' | 'created_at' | 'updated_at'>>({
    title: '',
    description: '',
    severity: 'medium',
    reporter_email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/bug-reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          title: '',
          description: '',
          severity: 'medium',
          reporter_email: '',
        });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.error || 'Failed to submit bug report');
      }
    } catch (err) {
      setError('Failed to submit bug report');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mt-12 lg:my-40 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Report a Bug</h1>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Bug report submitted successfully! Thank you for your feedback.
        </div>
      )}
      
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Brief description of the issue"
          />
        </div>

        <div>
          <label className="block text-md font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Please describe the issue in detail, including steps to reproduce if possible"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-md font-medium mb-1">Severity</label>
            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div>
            <label className="block text-md font-medium mb-1">Your Email (optional)</label>
            <input
              type="email"
              name="reporter_email"
              value={formData.reporter_email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="For follow-up questions"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Bug Report'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-300 dark:bg-gray-500 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
'use client';
import React, { useState } from "react";
import { ContactQueriesDashboard } from "@/components/admin/contact-queries";
import { BlogManagementSection } from "@/components/admin/blog-actions";
import { AuthWrapper } from "@/components/admin/auth-wrapper";
import { JobsManagement } from "@/components/admin/job-management";
import { ApplicationsManagement } from "@/components/admin/applications-management";
import { BugReportsManagement } from "@/components/admin/bug-report-management";

type AdminTab = 'jobs' | 'applications' | 'bug-reports' | 'contact-queries' | 'blog-management';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('jobs');

  const tabs = [
    { id: 'contact', label: 'Contact Queries', component: <ContactQueriesDashboard /> },
    { id: 'blogs', label: 'Blogs', component: <BlogManagementSection /> },
    { id: 'jobs', label: 'Jobs', component: <JobsManagement /> },
    { id: 'applications', label: 'Applications', component: <ApplicationsManagement /> },
    { id: 'bug-reports', label: 'Bug Reports', component: <BugReportsManagement /> },
  ];

  return (
    <div className="min-h-screen mt-16 bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-4 md:p-8 transition-colors">
      <AuthWrapper>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {tabs.find(tab => tab.id === activeTab)?.component}
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
}
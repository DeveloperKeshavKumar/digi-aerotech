import React from "react";
import { ContactQueriesDashboard } from "@/components/admin/contact-queries";
import { BlogManagementSection } from "@/components/admin/blog-actions";
import { AuthWrapper } from "@/components/admin/auth-wrapper";


export default function AdminPage() {
  return (
    <div className="min-h-screen mt-16 bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-4 md:p-8 transition-colors">
      <AuthWrapper>
        <ContactQueriesDashboard />
        <BlogManagementSection />
      </AuthWrapper>
    </div>
  );
}
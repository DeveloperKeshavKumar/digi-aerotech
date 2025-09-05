export interface BugReport {
  id?: number;
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  status?: 'open' | 'in-progress' | 'resolved' | 'closed';
  reporter_email?: string;
  created_at?: string;
  updated_at?: string;
}

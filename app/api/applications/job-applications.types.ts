export interface JobApplication {
  id?: number;
  job_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  cover_letter?: string;
  status?: 'pending' | 'reviewed' | 'rejected' | 'hired';
  created_at?: string;
  job_title?: string;
}

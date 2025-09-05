export interface Job {
  id?: number;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string;
  responsibilities: string;
  salary_range?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const jobId = searchParams.get('job_id');
    
    let sql = `
      SELECT applications.*, jobs.title as job_title 
      FROM applications 
      JOIN jobs ON applications.job_id = jobs.id 
    `;
    const params: any[] = [];
    
    if (status) {
      sql += ' WHERE applications.status = ?';
      params.push(status);
    }
    
    if (jobId) {
      if (status) {
        sql += ' AND applications.job_id = ?';
      } else {
        sql += ' WHERE applications.job_id = ?';
      }
      params.push(jobId);
    }
    
    sql += ' ORDER BY applications.created_at DESC';
    
    const applications = await query(sql, params);
    return NextResponse.json({ applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { job_id, first_name, last_name, email, phone, cover_letter } = body;
    
    // Validation
    if (!job_id || !first_name || !last_name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Check if job exists and is active
    const jobs: any = await query(
      'SELECT id FROM jobs WHERE id = ? AND is_active = true',
      [job_id]
    );
    
    if (jobs.length === 0) {
      return NextResponse.json(
        { error: 'Job not found or not active' },
        { status: 400 }
      );
    }

    const result: any = await query(
      `INSERT INTO applications (job_id, first_name, last_name, email, phone, cover_letter) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [job_id, first_name, last_name, email, phone || null, cover_letter || null]
    );

    return NextResponse.json(
      { 
        message: 'Application submitted successfully', 
        application: { 
          id: result.insertId, 
          job_id, first_name, last_name, email, phone, cover_letter 
        } 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
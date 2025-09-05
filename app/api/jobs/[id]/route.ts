// app/api/jobs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

// Define the params type
interface RouteParams {
  params: Promise<{ id: string }>;
}

// Helper to extract params
async function getParams(params: Promise<{ id: string }>) {
  return await params;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await getParams(params);
    const jobs: any = await query(
      'SELECT * FROM jobs WHERE id = ? AND is_active = true',
      [id]
    );

    if (jobs.length === 0) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ job: jobs[0] });
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json(
      { error: 'Failed to fetch job' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await getParams(params);
    const body = await request.json();

    // Check if job exists
    const existingJobs: any = await query(
      'SELECT id FROM jobs WHERE id = ?',
      [id]
    );
    
    if (existingJobs.length === 0) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    const { 
      title, department, location, type, description, 
      requirements, responsibilities, salary_range, is_active 
    } = body;

    await query(
      `UPDATE jobs SET 
        title = COALESCE(?, title), 
        department = COALESCE(?, department), 
        location = COALESCE(?, location), 
        type = COALESCE(?, type), 
        description = COALESCE(?, description), 
        requirements = COALESCE(?, requirements), 
        responsibilities = COALESCE(?, responsibilities), 
        salary_range = COALESCE(?, salary_range),
        is_active = COALESCE(?, is_active)
       WHERE id = ?`,
      [
        title, department, location, type, description, 
        requirements, responsibilities, salary_range, is_active, id
      ]
    );

    return NextResponse.json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json(
      { error: 'Failed to update job' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await getParams(params);
    const result: any = await query(
      'DELETE FROM jobs WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json(
      { error: 'Failed to delete job' },
      { status: 500 }
    );
  }
}
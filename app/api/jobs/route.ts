import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    
    let sql = 'SELECT * FROM jobs WHERE is_active = true';
    const params: any[] = [];
    
    if (department) {
      sql += ' AND department = ?';
      params.push(department);
    }
    
    if (location) {
      sql += ' AND location = ?';
      params.push(location);
    }
    
    if (type) {
      sql += ' AND type = ?';
      params.push(type);
    }
    
    sql += ' ORDER BY created_at DESC';
    
    const jobs = await query(sql, params);
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { 
      title, 
      department, 
      location, 
      type, 
      description, 
      requirements, 
      responsibilities, 
      salary_range 
    } = body;
    
    // Validation
    if (!title || !department || !location || !type || !description || !requirements || !responsibilities) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const validTypes = ['full-time', 'part-time', 'contract', 'internship'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid job type' },
        { status: 400 }
      );
    }

    const result: any = await query(
      `INSERT INTO jobs (title, department, location, type, description, requirements, responsibilities, salary_range) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, department, location, type, description, requirements, responsibilities, salary_range || null]
    );

    return NextResponse.json(
      { 
        message: 'Job created successfully', 
        job: { 
          id: result.insertId, 
          title, department, location, type, description, 
          requirements, responsibilities, salary_range 
        } 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    );
  }
}
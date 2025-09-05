// app/api/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const isActive = searchParams.get('is_active');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    let sql = 'SELECT * FROM jobs WHERE 1=1';
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
    
    if (isActive !== null) {
      sql += ' AND is_active = ?';
      params.push(isActive === 'true');
    }
    
    if (search) {
      sql += ' AND (title LIKE ? OR description LIKE ? OR department LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }
    
    sql += ' ORDER BY created_at DESC';
    
    // For pagination
    if (limit !== null) {
      sql += ' LIMIT ? OFFSET ?';
      params.push(limit, offset);
    }
    
    const jobs = await query(sql, params);
    
    // Get total count for pagination
    let countSql = 'SELECT COUNT(*) as total FROM jobs WHERE 1=1';
    const countParams: any[] = [];
    
    if (department) {
      countSql += ' AND department = ?';
      countParams.push(department);
    }
    
    if (location) {
      countSql += ' AND location = ?';
      countParams.push(location);
    }
    
    if (type) {
      countSql += ' AND type = ?';
      countParams.push(type);
    }
    
    if (isActive !== null) {
      countSql += ' AND is_active = ?';
      countParams.push(isActive === 'true');
    }
    
    if (search) {
      countSql += ' AND (title LIKE ? OR description LIKE ? OR department LIKE ?)';
      const searchTerm = `%${search}%`;
      countParams.push(searchTerm, searchTerm, searchTerm);
    }
    
    const totalResult: any = await query(countSql, countParams);
    const total = totalResult[0]?.total || 0;
    
    return NextResponse.json({
      jobs,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    });
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
      title, department, location, type, description, 
      requirements, responsibilities, salary_range 
    } = body;
    
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
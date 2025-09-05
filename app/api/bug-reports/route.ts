// app/api/bug-reports/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

export async function GET() {
  try {
    const bugReports = await query(
      'SELECT id, title, description, severity, status, reporter_email, created_at FROM bug_reports ORDER BY created_at DESC'
    );
    
    return NextResponse.json({ bug_reports: bugReports });
  } catch (error) {
    console.error('Error fetching bug reports:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bug reports' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { title, description, severity, reporter_email } = body;
    
    // Simple validation
    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const result: any = await query(
      `INSERT INTO bug_reports (title, description, severity, reporter_email) 
       VALUES (?, ?, ?, ?)`,
      [title, description, severity || 'medium', reporter_email || null]
    );

    return NextResponse.json(
      { 
        message: 'Bug report submitted successfully', 
        id: result.insertId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting bug report:', error);
    return NextResponse.json(
      { error: 'Failed to submit bug report' },
      { status: 500 }
    );
  }
}
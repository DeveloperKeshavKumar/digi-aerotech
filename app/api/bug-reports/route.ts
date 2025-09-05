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
        id: result.insertId,
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

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Bug report id and new status are required' },
        { status: 400 }
      );
    }

    await query(
      `UPDATE bug_reports SET status = ? WHERE id = ?`,
      [status, id]
    );

    return NextResponse.json({
      message: `Bug report #${id} updated successfully`,
    });
  } catch (error) {
    console.error('Error updating bug report:', error);
    return NextResponse.json(
      { error: 'Failed to update bug report' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Bug report id is required' },
        { status: 400 }
      );
    }

    await query(`DELETE FROM bug_reports WHERE id = ?`, [id]);

    return NextResponse.json({
      message: `Bug report #${id} deleted successfully`,
    });
  } catch (error) {
    console.error('Error deleting bug report:', error);
    return NextResponse.json(
      { error: 'Failed to delete bug report' },
      { status: 500 }
    );
  }
}

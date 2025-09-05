import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';



export async function PATCH(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const params = url.pathname.split('/');
    const body = await request.json();
    const { status } = body;

    const validStatuses = ['pending', 'reviewed', 'rejected', 'hired'];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      );
    }

    const result: any = await query(
      'UPDATE applications SET status = ? WHERE id = ?',
      [status, params[3]]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Application status updated successfully' });
  } catch (error) {
    console.error('Error updating application status:', error);
    return NextResponse.json(
      { error: 'Failed to update application status' },
      { status: 500 }
    );
  }
}
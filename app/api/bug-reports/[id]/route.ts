// app/api/bug-reports/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

export async function PATCH(
  request: NextRequest
) {
  try {
    const url = new URL(request.url);
    const params = url.pathname.split('/');
    const id = params.pop();
    console.log('Bug Report ID:', id);
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    await query(
      `UPDATE bug_reports SET status = ? WHERE id = ?`,
      [status, id]
    );

    return NextResponse.json({ message: `Bug report #${id} updated successfully` });
  } catch (error) {
    console.error('Error updating bug report:', error);
    return NextResponse.json(
      { error: 'Failed to update bug report' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
) {
  try {
     const url = new URL(request.url);
    const params = url.pathname.split('/');
    const id = params.pop();

    await query(`DELETE FROM bug_reports WHERE id = ?`, [id]);

    return NextResponse.json({ message: `Bug report #${id} deleted successfully` });
  } catch (error) {
    console.error('Error deleting bug report:', error);
    return NextResponse.json(
      { error: 'Failed to delete bug report' },
      { status: 500 }
    );
  }
}

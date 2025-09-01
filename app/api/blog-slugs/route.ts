// app/api/blog-slugs/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/db.utils';

export async function GET() {
    let connection;

    try {
        connection = await pool.getConnection();

        // Get all published blog slugs
        const [rows] = await connection.execute(
            'SELECT slug, updated_at, created_at FROM blogs WHERE published = true ORDER BY created_at DESC'
        );

        return NextResponse.json({
            success: true,
            data: rows
        });

    } catch (error) {
        console.error('Error fetching blog slugs:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
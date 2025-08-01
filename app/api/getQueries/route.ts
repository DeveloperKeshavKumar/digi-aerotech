// api/getQueries/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import * as XLSX from 'xlsx';

// Define the type for a single contact query entry from the database.
interface ContactQuery {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    business_type: string;
    start_date: string;
    created_at: string;
    status: 'new' | 'in_progress' | 'resolved';
}

// Define the type for the PATCH request body.
interface PatchBody {
    id: number;
    status: 'new' | 'in_progress' | 'resolved';
}

// Database connection pool configuration
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

/**
 * Handles GET requests to retrieve contact queries.
 * Supports filtering, pagination, and exporting to Excel.
 */
export async function GET(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const { searchParams } = new URL(request.url);
        const format = searchParams.get('format');
        const status = searchParams.get('status');
        const limit = searchParams.get('limit');
        const offset = searchParams.get('offset');

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Build the base query and parameters
        let query = 'SELECT * FROM contact_queries';
        let countQuery = 'SELECT COUNT(*) as total FROM contact_queries';
        const queryParams: (string | number)[] = [];
        const countParams: (string | number)[] = [];

        // Apply status filter if provided
        if (status && ['new', 'in_progress', 'resolved'].includes(status)) {
            query += ' WHERE status = ?';
            countQuery += ' WHERE status = ?';
            queryParams.push(status);
            countParams.push(status);
        }

        query += ' ORDER BY created_at DESC';

        // Apply limit and offset for pagination if provided
        if (limit) {
            query += ' LIMIT ?';
            queryParams.push(parseInt(limit));
            if (offset) {
                query += ' OFFSET ?';
                queryParams.push(parseInt(offset));
            }
        }

        // Execute queries concurrently for performance
        const [rows] = await connection.execute(query, queryParams);
        const queries = rows as ContactQuery[];

        const [countResult] = await connection.execute(countQuery, countParams);
        const total = (countResult as any[])[0].total;

        // Handle Excel export
        if (format === 'excel') {
            const workbook = XLSX.utils.book_new();
            const excelData = queries.map(query => ({
                'ID': query.id,
                'Name': query.name,
                'Email': query.email,
                'Phone': query.phone,
                'Service': query.service,
                'Business Type': query.business_type,
                'Start Date': query.start_date,
                'Status': query.status,
                'Created At': new Date(query.created_at).toLocaleString(),
            }));
            const worksheet = XLSX.utils.json_to_sheet(excelData);
            const columnWidths = [
                { wch: 5 }, { wch: 20 }, { wch: 25 }, { wch: 15 },
                { wch: 25 }, { wch: 20 }, { wch: 20 }, { wch: 12 },
                { wch: 20 },
            ];
            worksheet['!cols'] = columnWidths;
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Queries');
            const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

            return new NextResponse(excelBuffer, {
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Content-Disposition': `attachment; filename="contact-queries-${new Date().toISOString().split('T')[0]}.xlsx"`,
                },
            });
        }

        // Return JSON response by default
        return NextResponse.json({
            success: true,
            data: queries,
            pagination: {
                total,
                limit: limit ? parseInt(limit) : null,
                offset: offset ? parseInt(offset) : 0,
                hasMore: limit ? (parseInt(offset || '0') + parseInt(limit)) < total : false,
            },
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            connection.release(); // Release the connection back to the pool
        }
    }
}

/**
 * Handles PATCH requests to update the status of a contact query.
 */
export async function PATCH(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const body: PatchBody = await request.json();
        const { id, status } = body;

        // Validate the request body
        if (!id || !status || !['new', 'in_progress', 'resolved'].includes(status)) {
            return NextResponse.json(
                { error: 'Valid ID and status are required' },
                { status: 400 }
            );
        }

        // Get a connection from the pool
        connection = await pool.getConnection();

        const [result] = await connection.execute(
            'UPDATE contact_queries SET status = ? WHERE id = ?',
            [status, id]
        );

        if ((result as any).affectedRows === 0) {
            return NextResponse.json(
                { error: 'Query not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Status updated successfully',
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            connection.release(); // Release the connection back to the pool
        }
    }
}

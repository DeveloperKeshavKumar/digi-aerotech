// app/api/getQueries/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import * as XLSX from 'xlsx';

interface ContactQuery {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    business_type: string;
    form_type: 'contact' | 'business-growth' | 'all';
    start_date: string;
    website?: string;
    created_at: string;
    status: 'new' | 'in_progress' | 'resolved';
}

interface PatchBody {
    id: number;
    status: 'new' | 'in_progress' | 'resolved';
    form_type?: 'contact' | 'business-growth';
}

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

export async function GET(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const { searchParams } = new URL(request.url);
        const format = searchParams.get('format');
        const form_type = searchParams.get('form_type') as 'contact' | 'business-growth' | 'all' | null;
        const status = searchParams.get('status');
        const limit = searchParams.get('limit');
        const offset = searchParams.get('offset');
        const search = searchParams.get('search');
        const sortField = searchParams.get('sort') || 'created_at';
        const sortOrder = searchParams.get('order') || 'DESC';

        connection = await pool.getConnection();

        let query = 'SELECT * FROM contact_queries';
        let countQuery = 'SELECT COUNT(*) as total FROM contact_queries';
        const queryParams: (string | number)[] = [];
        const countParams: (string | number)[] = [];

        const conditions: string[] = [];

        if (form_type && form_type !== 'all' && ['contact', 'business-growth'].includes(form_type)) {
            conditions.push('form_type = ?');
            queryParams.push(form_type);
            countParams.push(form_type);
        }
        // Apply status filter if provided
        if (status && ['new', 'in_progress', 'resolved'].includes(status)) {
            conditions.push('status = ?');
            queryParams.push(status);
            countParams.push(status);
        }

        // Apply search filter if provided
        if (search) {
            conditions.push('(name LIKE ? OR email LIKE ? OR phone LIKE ? OR service LIKE ? OR business_type LIKE ? OR website LIKE ?)');
            const searchTerm = `%${search}%`;
            queryParams.push(searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, searchTerm);
            countParams.push(searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, searchTerm);
        }

        // Add WHERE clause if there are conditions
        if (conditions.length > 0) {
            const whereClause = ` WHERE ${conditions.join(' AND ')}`;
            query += whereClause;
            countQuery += whereClause;
        }

        // Add sorting
        query += ` ORDER BY ${sortField} ${sortOrder}`;

        // Apply pagination if provided
        if (limit) {
            query += ' LIMIT ?';
            queryParams.push(parseInt(limit));
            if (offset) {
                query += ' OFFSET ?';
                queryParams.push(parseInt(offset));
            }
        }

        // Execute queries
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
                'Form Type': query.form_type,
                'Start Date': query.start_date,
                'Website': query.website || 'N/A',
                'Status': query.status,
                'Created At': new Date(query.created_at).toLocaleString(),
            }));

            const worksheet = XLSX.utils.json_to_sheet(excelData);
            const columnWidths = [
                { wch: 5 },   // ID
                { wch: 20 },  // Name
                { wch: 25 },  // Email
                { wch: 15 },  // Phone
                { wch: 25 },  // Service
                { wch: 20 },  // Business Type
                { wch: 15 },  // Form Type
                { wch: 20 },  // Start Date
                { wch: 30 },  // Website
                { wch: 12 },  // Status
                { wch: 20 },  // Created At
            ];
            worksheet['!cols'] = columnWidths;
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Queries');
            const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

            return new NextResponse(excelBuffer, {
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Content-Disposition': `attachment; filename="${form_type || 'all'}-queries-${new Date().toISOString().split('T')[0]}.xlsx"`,
                },
            });
        }

        return NextResponse.json({
            success: true,
            data: queries,
            pagination: {
                total,
                limit: limit ? parseInt(limit) : null,
                offset: offset ? parseInt(offset) : 0,
                hasMore: limit ? (parseInt(offset || '0') + parseInt(limit)) < total : false,
            },
            filters: {
                form_type: form_type || 'all',
                status: status || 'all',
                search: search || null,
            }
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

export async function PATCH(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const body: PatchBody = await request.json();
        const { id, status } = body;

        if (!id || !status || !['new', 'in_progress', 'resolved'].includes(status)) {
            return NextResponse.json(
                { error: 'Valid ID and status are required' },
                { status: 400 }
            );
        }

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
        if (connection) connection.release();
    }
}

export async function DELETE(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id || isNaN(parseInt(id))) {
            return NextResponse.json(
                { error: 'Valid ID is required' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        const [result] = await connection.execute(
            'DELETE FROM contact_queries WHERE id = ?',
            [parseInt(id)]
        );

        if ((result as any).affectedRows === 0) {
            return NextResponse.json(
                { error: 'Query not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Query deleted successfully',
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
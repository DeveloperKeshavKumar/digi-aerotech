// api/blogs/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { validateBlogPost } from '@/lib/blog-validation.utils';
import camelcaseKeys from 'camelcase-keys';
import pool from '@/lib/db.utils';

// GET all blogs with pagination
export async function GET(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;
        const published = searchParams.get('published') === 'true';

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Check if blogs table exists, create if not
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        heading VARCHAR(255) NOT NULL,
        subheading VARCHAR(500) NOT NULL,
        paragraphs JSON NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        featured_image VARCHAR(500),
        author VARCHAR(100),
        tags JSON,
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FULLTEXT INDEX (heading, subheading)
      )
    `);

        // Get total count of published blogs
        const [totalCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM blogs ${published ? "WHERE published = ?" : ""}`,
            [published]
        );
        const total = (totalCount as any)[0].count;

        // Get paginated blogs
        const [rows] = await connection.execute(
            `SELECT * FROM blogs ${published ? "WHERE published = ?" : ""} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [published, limit, offset]
        );
        const blogs = (rows as any[]).map((row) => {
            const camel = camelcaseKeys(row);
            return {
                ...camel,
                paragraphs: JSON.parse(camel.paragraphs || '[]'),
                tags: camel.tags ? JSON.parse(camel.tags) : [],
            };
        });

        return NextResponse.json({
            success: true,
            data: blogs,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });

    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

// POST - Create a new blog
export async function POST(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const body = await request.json();

        if (!validateBlogPost(body)) {
            return NextResponse.json(
                { error: 'Invalid blog post data' },
                { status: 400 }
            );
        }

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Check if slug already exists
        const [existing] = await connection.execute(
            'SELECT id FROM blogs WHERE slug = ?',
            [body.slug]
        );

        if ((existing as any).length > 0) {
            return NextResponse.json(
                { error: 'Blog with this slug already exists' },
                { status: 400 }
            );
        }

        // Insert the new blog
        const [result] = await connection.execute(
            'INSERT INTO blogs (heading, subheading, paragraphs, slug, featured_image, author, tags, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                body.heading,
                body.subheading,
                JSON.stringify(body.paragraphs),
                body.slug,
                body.featuredImage || null,
                body.author || null,
                body.tags ? JSON.stringify(body.tags) : null,
                body.published,
            ]
        );

        // Get the newly created blog
        const [newBlog] = await connection.execute(
            'SELECT * FROM blogs WHERE id = ?',
            [(result as any).insertId]
        );

        return NextResponse.json(
            {
                success: true,
                message: 'Blog created successfully',
                data: (newBlog as any)[0],
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
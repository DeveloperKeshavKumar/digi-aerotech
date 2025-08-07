// api/blogs/[slug]/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { validateBlogPost } from '@/lib/blog-validation.utils';
import camelcaseKeys from 'camelcase-keys';
import pool from '@/lib/db.utils';

// GET single blog by slug
export async function GET(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
       const url = new URL(request.url);
        const slug = url.pathname.split('/').pop();

        // Get a connection from the pool
        connection = await pool.getConnection();

        const [blog] = await connection.execute(
            'SELECT * FROM blogs WHERE slug = ? AND published = TRUE',
            [slug]
        );


        if ((blog as any).length === 0) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        const blogData = (blog as any)[0];
        const formatted = {
            ...camelcaseKeys(blogData),
            paragraphs: JSON.parse(blogData.paragraphs || '[]'),
            tags: blogData.tags ? JSON.parse(blogData.tags) : [],
        };

        return NextResponse.json({
            success: true,
            data: formatted,
        });

    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

// PUT - Update a blog
export async function PUT(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const url = new URL(request.url);
        const slug = url.pathname.split('/').pop();
        const body = await request.json();

        if (!validateBlogPost(body)) {
            return NextResponse.json(
                { error: 'Invalid blog post data' },
                { status: 400 }
            );
        }

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Check if blog exists
        const [existing] = await connection.execute(
            'SELECT id FROM blogs WHERE slug = ?',
            [slug]
        );

        if ((existing as any).length === 0) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        // Check if new slug is already used by another blog
        if (body.slug !== slug) {
            const [slugCheck] = await connection.execute(
                'SELECT id FROM blogs WHERE slug = ? AND id != ?',
                [body.slug, (existing as any)[0].id]
            );

            if ((slugCheck as any).length > 0) {
                return NextResponse.json(
                    { error: 'Another blog with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        // Update the blog
        await connection.execute(
            'UPDATE blogs SET heading = ?, subheading = ?, paragraphs = ?, slug = ?, featured_image = ?, author = ?, tags = ?, published = ? WHERE slug = ?',
            [
                body.heading,
                body.subheading,
                JSON.stringify(body.paragraphs),
                body.slug,
                body.featuredImage || null,
                body.author || null,
                body.tags ? JSON.stringify(body.tags) : null,
                body.published,
                slug,
            ]
        );

        // Get the updated blog
        const [updatedBlog] = await connection.execute(
            'SELECT * FROM blogs WHERE slug = ?',
            [body.slug]
        );

        const blogData = (updatedBlog as any)[0];
        const formatted = {
            ...camelcaseKeys(blogData),
            paragraphs: JSON.parse(blogData.paragraphs || '[]'),
            tags: blogData.tags ? JSON.parse(blogData.tags) : [],
        };

        return NextResponse.json({
            success: true,
            message: 'Blog updated successfully',
            data: formatted,
        });

    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

// DELETE - Delete a blog
export async function DELETE(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    try {
        const url = new URL(request.url);
        const slug = url.pathname.split('/').pop();

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Check if blog exists
        const [existing] = await connection.execute(
            'SELECT id FROM blogs WHERE slug = ?',
            [slug]
        );

        if ((existing as any).length === 0) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        // Delete the blog
        await connection.execute(
            'DELETE FROM blogs WHERE slug = ?',
            [slug]
        );

        return NextResponse.json({
            success: true,
            message: 'Blog deleted successfully',
        });

    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
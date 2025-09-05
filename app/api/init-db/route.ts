import { NextResponse } from 'next/server';
import { query } from '@/lib/db.utils';

async function initDatabase() {
    try {

        await query(`
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

        await query(`
            CREATE TABLE IF NOT EXISTS contact_queries (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                service VARCHAR(100) NOT NULL,
                business_type VARCHAR(100) NOT NULL,
                form_type VARCHAR(100) NOT NULL,
                start_date VARCHAR(255) NOT NULL,
                website VARCHAR(500) NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('new', 'in_progress', 'resolved') DEFAULT 'new'
            )
        `);

        await query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        department VARCHAR(100) NOT NULL,
        location VARCHAR(100) NOT NULL,
        type ENUM('full-time', 'part-time', 'contract', 'internship') NOT NULL,
        description TEXT NOT NULL,
        requirements TEXT NOT NULL,
        responsibilities TEXT NOT NULL,
        salary_range VARCHAR(100),
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_department (department),
        INDEX idx_location (location),
        INDEX idx_type (type),
        INDEX idx_active (is_active)
      )
    `);

        await query(`
      CREATE TABLE IF NOT EXISTS applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        job_id INT NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        resume_url VARCHAR(500),
        cover_letter TEXT,
        status ENUM('pending', 'reviewed', 'rejected', 'hired') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
        INDEX idx_job_id (job_id),
        INDEX idx_status (status),
        INDEX idx_email (email)
      )
    `);

        await query(`
      CREATE TABLE IF NOT EXISTS bug_reports (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        severity ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
        status ENUM('open', 'in-progress', 'resolved', 'closed') DEFAULT 'open',
        reporter_email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_status (status),
        INDEX idx_severity (severity)
      )
    `);

        console.log('Database tables initialized successfully');
        return { success: true, message: 'Database initialized' };
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    }
}


export async function GET() {
    try {
        const result = await initDatabase();
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to initialize database', details: error.message },
            { status: 500 }
        );
    }
}

export async function POST() {
    try {
        const result = await initDatabase();
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to initialize database', details: error.message },
            { status: 500 }
        );
    }
}
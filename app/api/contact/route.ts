// api/contact/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

// Define the type for the data object used in the inquiry process.
interface InquiryData {
    name: string;
    email: string;
    phone: string;
    service: string;
    businessType: string;
    startDate: string;
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

// Email transporter configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// --- Rate Limiting Logic ---
const rateLimitMap = new Map();
// Changed to allow only 1 request per day
const LIMIT = 1; // Max number of requests
// Time window in milliseconds (24 hours)
const WINDOW_MS = 24 * 60 * 60 * 1000;

/**
 * Generates a client-facing email template.
 * The template has a clean, professional design with a branded header and clear callouts.
 * @param {string} name - The client's name.
 * @param {string} service - The service they inquired about.
 * @param {string} businessType - The client's business type.
 * @returns {string} The complete HTML for the client email.
 */
const getClientEmailTemplate = (name: string, service: string, businessType: string): string => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank You for Your Inquiry - DigiAerotech</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #000000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <img src="/logo.svg" alt="DigiAerotech Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto 10px;">
      <h2 style="margin: 0; font-size: 24px;">Thank you for your inquiry!</h2>
    </div>
    <div style="padding: 20px; background-color: #f9f9f9;">
      <p style="margin-top: 0;">Dear ${name},</p>
      <p>We have received your inquiry for <strong style="color: #ff69b4;">${service}</strong> services and will get back to you within 24 business hours. We appreciate you reaching out.</p>
      <div style="background: white; padding: 15px; border-left: 4px solid #000000; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0;"><strong style="color: #555;">Service Requested:</strong> ${service}</p>
        <p style="margin: 5px 0 0;"><strong style="color: #555;">Your Business Type:</strong> ${businessType}</p>
        <p style="margin: 15px 0 0; font-style: italic; color: #666;">Our team is excited to help you achieve your business goals.</p>
      </div>
      <p style="margin-bottom: 0;">Best regards,<br>The DigiAerotech Team</p>
    </div>
    <div style="padding: 10px; text-align: center; color: #666; font-size: 12px; background-color: #eee; border-radius: 0 0 8px 8px;">
      <p style="margin: 0;">This is an automated response. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Generates an internal office email template for new inquiries.
 * This template is designed for quick scanning, highlighting important lead information.
 * @param {InquiryData} data - An object containing lead information.
 * @returns {string} The complete HTML for the office email.
 */
const getOfficeEmailTemplate = (data: InquiryData): string => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Business Inquiry - DigiAerotech</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #000000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <img src="/logo.svg" alt="DigiAerotech Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto 10px;">
      <h2 style="margin: 0; font-size: 24px;">New Business Inquiry</h2>
    </div>
    <div style="padding: 20px; background-color: #f9f9f9;">
      <div style="margin: 15px 0; padding: 12px 15px; background: #f0f0f0; border-left: 4px solid #000000; border-radius: 5px;">
        <p style="margin: 0; font-weight: bold; color: #000000; font-size: 1.1em;">Hot Lead Alert!</p>
        <p style="margin: 5px 0 0; font-size: 0.9em; color: #333;">A new potential client has submitted an inquiry. Please follow up promptly.</p>
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Name:</span> ${data.name}
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Email:</span> <a href="mailto:${data.email}" style="color: #ff69b4; text-decoration: none;">${data.email}</a>
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Phone:</span> <a href="tel:${data.phone}" style="color: #ff69b4; text-decoration: none;">${data.phone}</a>
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Service:</span> ${data.service}
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Business Type:</span> ${data.businessType}
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Preferred Start Date:</span> ${data.startDate}
      </div>
      <div style="margin: 15px 0; padding: 10px 15px; background: white; border-radius: 5px; border: 1px solid #eee;">
        <span style="font-weight: bold; color: #555;">Received On:</span> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} <span style="font-size: 0.8em; color: #888;">(IST)</span>
      </div>
    </div>
     <div style="padding: 10px; text-align: center; color: #666; font-size: 12px; background-color: #eee; border-radius: 0 0 8px 8px;">
      <p style="margin: 0;">This email was automatically generated. Please take appropriate action.</p>
    </div>
  </div>
</body>
</html>
`;

// Async email sending function
async function sendEmails(data: InquiryData): Promise<void> {
    try {
        // Use the authenticated user's email as the 'from' address to satisfy server policies.
        const fromEmail = process.env.SMTP_USER;

        const clientEmailOptions = {
            from: fromEmail,
            to: data.email,
            subject: 'Thank you for your inquiry - DigiAerotech',
            html: getClientEmailTemplate(data.name, data.service, data.businessType),
        };

        const officeEmailOptions = {
            from: fromEmail,
            to: process.env.OFFICE_EMAIL,
            subject: `New ${data.service} Inquiry from ${data.name}`,
            html: getOfficeEmailTemplate(data),
        };

        // Send emails concurrently
        await Promise.all([
            transporter.sendMail(clientEmailOptions),
            transporter.sendMail(officeEmailOptions),
        ]);

        console.log('Emails sent successfully');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
}

export async function POST(request: Request) {
    let connection: mysql.PoolConnection | undefined;

    // --- Rate Limiting Middleware ---
    // Get the client's IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');

    if (ip) {
        const now = Date.now();
        const client = rateLimitMap.get(ip);

        // Check if the client is already in the map
        if (client) {
            // Check if the time window has elapsed
            if (now - client.lastRequestTime > WINDOW_MS) {
                // Reset the count for the new window
                rateLimitMap.set(ip, { count: 1, lastRequestTime: now });
            } else if (client.count >= LIMIT) {
                // Rate limit exceeded
                return NextResponse.json(
                    { error: 'Too many requests, please try again later.' },
                    { status: 429 }
                );
            } else {
                // Increment the count for the current window
                client.count++;
                client.lastRequestTime = now;
            }
        } else {
            // First request from this IP
            rateLimitMap.set(ip, { count: 1, lastRequestTime: now });
        }
    }

    try {
        const body: InquiryData = await request.json();
        const { name, email, phone, service, businessType, startDate } = body;

        // Basic validation
        if (!name || !email || !phone || !service || !businessType || !startDate) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Create table if it doesn't exist. This is idempotent and safe to run on every request.
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS contact_queries (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                service VARCHAR(100) NOT NULL,
                business_type VARCHAR(100) NOT NULL,
                start_date VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('new', 'in_progress', 'resolved') DEFAULT 'new'
            )
        `);

        // Insert the query into the database using a parameterized query to prevent SQL injection.
        const [result] = await connection.execute(
            'INSERT INTO contact_queries (name, email, phone, service, business_type, start_date) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, phone, service, businessType, startDate]
        );

        // Return success response to the client immediately
        const response = NextResponse.json(
            {
                success: true,
                message: 'Your message has been submitted successfully!',
                id: (result as any).insertId
            },
            { status: 200 }
        );

        // Send emails asynchronously without blocking the response to the client
        sendEmails({ name, email, phone, service, businessType, startDate });

        return response;

    } catch (error) {
        console.error('An error occurred:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    } finally {
        // Release the connection back to the pool.
        if (connection) {
            connection.release();
        }
    }
}

// lib/db.utils.ts
import mysql from 'mysql2/promise';

declare global {
    var mysqlPool: mysql.Pool;
}

let pool: mysql.Pool;

if (!global.mysqlPool) {
    global.mysqlPool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'digiaerotech_careers',
        port: parseInt(process.env.DB_PORT || '3306'),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
}

pool = global.mysqlPool;

export async function query(sql: string, params?: any[]) {
    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

export default pool;
import mysql from 'mysql2/promise';

declare global {
    var mysqlPool: import('mysql2/promise').Pool;
}

let pool: mysql.Pool;

if (!globalThis.mysqlPool) {
    globalThis.mysqlPool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT || '3306'),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
}

pool = globalThis.mysqlPool;

export default pool;

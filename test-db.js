// test-db-connection.js
// Run this file to test your database connection
// Usage: node test-db-connection.js

const mysql = require('mysql2/promise');

async function testConnection() {
  let connection;
  
  try {
    console.log('Testing database connection...');
    console.log('Host:', process.env.DB_HOST);
    console.log('User:', process.env.DB_USER);
    console.log('Database:', process.env.DB_NAME);
    
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || '3306'),
    });

    console.log('✅ Database connected successfully!');

    // Test a simple query
    const [rows] = await connection.execute('SELECT 1 as test');
    console.log('✅ Query test successful:', rows);

    // Check if our table exists
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'contact_queries'
    `, [process.env.DB_NAME]);

    if (tables.length > 0) {
      console.log('✅ contact_queries table already exists');
      
      // Show table structure
      const [columns] = await connection.execute('DESCRIBE contact_queries');
      console.log('📋 Table structure:', columns);
    } else {
      console.log('ℹ️  contact_queries table does not exist yet (will be created on first form submission)');
    }

  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Check your DB_PASSWORD in .env.local');
      console.log('2. Verify DB_USER is correct: u275551804_new');
      console.log('3. Make sure you\'ve added your IP to Remote MySQL in Hostinger');
    }
    
    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Check if DB_HOST is correct: srv1823.hstgr.io');
      console.log('2. Try alternative host: 193.203.184.195');
      console.log('3. Verify your server IP is added to Remote MySQL access');
    }
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔐 Database connection closed');
    }
  }
}

testConnection();
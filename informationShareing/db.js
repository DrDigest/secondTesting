// db.js

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'root@localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: '@Guddu123', // Replace with your MySQL password
  database: 'InformationSharingDB', // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();




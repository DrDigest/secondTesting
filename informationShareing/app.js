// app.js or server.js

const express = require('express');
const db = require('./db'); // Replace with the correct path to your db.js file

const app = express();

// Your other middleware and routes...

// Example route to retrieve data from all tables
app.get('/allTablesData', async (req, res) => {
  try {
    // Fetch table names from the InformationSharingDB database
    const [tableNames] = await db.query('SELECT table_name FROM information_schema.tables WHERE table_schema = ?;', ['InformationSharingDB']);

    const tablesData = {};

    // Loop through table names and fetch data from each table
    for (const { table_name } of tableNames) {
      const [rows] = await db.query(`SELECT * FROM ${table_name}`);
      tablesData[table_name] = rows;
    }

    res.json(tablesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server...

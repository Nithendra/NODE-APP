// import mysql2
const mysql = require('mysql2');

// create connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nit_db',
    password: 'root'
});

module.exports = pool.promise();
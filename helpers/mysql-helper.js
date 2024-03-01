const mysql2 = require('mysql2');
require('dotenv').config();



const pool = mysql2.createPool({
    connectionLimit: 10,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err)
    }
    console.log("Conectado a la base de datos")
    if (connection) connection.release()
    return
});

module.exports = pool;

// MySQL connection setup
require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");  /* the backend for the fetching of database is here */

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "TripOnClick",     /* CAREfULL !!!!!!!!!!!!!!  CHANGE IF NEEDED */
  multipleStatements: true
});

// Connecting to MySQL server and executing initialization SQL script

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();   // will execute whatever is in here
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `places` was successful!");

    console.log("Closing...");
  });

  con.end();
});

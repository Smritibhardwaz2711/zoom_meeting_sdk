// import mysql from "mysql2/promise";

// export const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",        // ← put your phpMyAdmin password
//   database: "gd_system",
//   waitForConnections: true,
//   connectionLimit: 10,
// });



import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",        // ← your phpMyAdmin password
  database: "gd_system",
  waitForConnections: true,
  connectionLimit: 10,
});

//require mysql
var mysql = require("mysql");

//database connection details
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ella98th',
    database: 'burgers_db'
})

//make the connection
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

//export it
module.exports = connection;
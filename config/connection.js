//require mysql
var mysql = require("mysql");

//database connection details
var connection;
//if heroku connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Ella98th',
      database: 'burgers_db'
  })
}

// connection = mysql.createConnection({
//   host: 'mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   port: 3306,
//   user: 'rf17qayvakdt1khn',
//   password: 'grtvjlb46to4yu07',
//   database: 'knp557aeez5e5cld'
// })
//if local database connection

//make the connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//export it
module.exports = connection;
//require mysql
var mysql = require("mysql");

//database connection details
var connection = mysql.createConnection({

})

//make the connection
connection.connect((err) => {
    
})

//export it
module.exports = connection;
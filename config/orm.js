//import connection
var connection = require("../config/connection.js");

//adding in js from CatsApp activity
function printQuestionMarks(num) { //can i make this into an arrow function?
    var arr = [];

    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
  

function objToSql(ob) { //can i make this into an arrow function?
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    //all()
    selectAll: (tableInput, cb) => {
        var queryAll = "select * from " + tableInput + ";";
        connection.query(queryAll, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },


    //create()
    insertOne: (table, cols, vals, cb) => {
        var queryAdd = "insert into " + table;

        queryAdd += " (";
        queryAdd += cols.toString();
        queryAdd += ") ";
        queryAdd += "values (";
        queryAdd += printQuestionMarks(vals.length);
        queryAdd += ") ";

        console.log(queryAdd);

        connection.query(queryAdd, vals, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },


    //update()
    updateOne: (table, objColVals, condition, cb) => {
        var queryUpdate = "update " + table;

        queryUpdate += " set ";
        queryUpdate += objToSql(objColVals);
        queryUpdate += " where ";
        queryUpdate += condition;

        console.log(queryUpdate);
        connection.query(queryUpdate, (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    }
};

//export orm
module.exports = orm;
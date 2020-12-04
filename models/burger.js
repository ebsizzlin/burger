//import orm
var orm = require("../config/orm.js");

//burger function for specific burger input
var burger = {
    //all
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    //create
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    //update
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne('burgers', objColVals, condition, (cb) => {
            cb(res);
        });
    }
};

//export burger
module.exports = burger;
//import orm
var orm = require("../config/orm.js");

//burger function for specific burger input
var burger = {
    //all
    selectAll: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        });
    },

    //create
    insertOne: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    //update
    updateOne: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, (cb) => {
            cb(res);
        });
    }
};

//export burger
module.exports = burger;
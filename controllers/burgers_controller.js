//require
var express = require("express");
var burger = require("../models/burger.js");

//create router
var router = express.Router();

//get
router.get('/index', (req, res) => {
    burger.all((data) => {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render('index', burgersObject);
    });
});

//post

//put

//export router
module.exports = router;
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
router.post('/api/burgers', (req, res) => {
    burger.create([
        'burger_name'
    ], [
        req.body.burger_name
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

//put

//export router
module.exports = router;
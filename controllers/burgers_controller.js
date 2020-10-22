//lets us use express in this js file
var express = require("express")

//connects this JavaScript file to the one we're on
var burgerJS = require("../models/burgers.js")

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var object = {
            burgers : data
        };
        console.log(object)
        res.render("index", object)
    });
});

router.post("/api/burgers", function(req, res) {
    orm.insertOne([
        {
            bu
        }
    ])
})






//We need to create a router, and export it at the end of the file
//module.exports = ('Router')
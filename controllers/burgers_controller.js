//lets us use express in this js file
var express = require("express")
var exphbs = require("express-handlebars");
const burger = require("../models/burger.js");

var router = express.Router();

//gathers info and renders it using handlebars
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbarsObj = {
            burgers : data
        };
        // console.log(hdbarsObj)
        res.render("index", hdbarsObj)
    });
});

router.post("/api/burgers", function(req, res) {
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
        res.json({ id: result.insertId });
    }

});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured },condition, function(
        result
    ) {
        if ((result, changedRows === 0)) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });

    router.deleteOne(dondition, function(req, res){
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function(result) {
            if ((result, changedRows == 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

//We need to create a router, and export it at the end of the file
module.exports = router;
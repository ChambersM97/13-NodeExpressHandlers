var orm = require("../config/orm.js")

var burger = {
    selectAll : function(cb) {
        orm.selectAll(col1, col2, val1, val2, function (result) {
            cb(result)
        })
    },
    insertOne : function(table, col1, col2, val1, val2, cb) {
        table = "burgers";
        col1 = "burger_name";
        col2 = "devoured";
        orm.insertOne(table, col1, col2, val1, val2, function (result) {
            cb(result)
        })
    },
    updateOne : function(id, col1, col2, whereId, cb) {
        table = "burgers";
            col1 = "burger_name";
        col2 = "devoured";
        orm.updateOne(id, col1, col2, whereID, function (result) {
            cb(result)
        })
    }
};

module.exports = burger;

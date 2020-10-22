var orm = require("../config/orm.")

var burger = {
    all : function(cb) {
        orm.selectAll(col1, col2, val1, val2, function (result) {
            cb(result)
        }}
    insertOne: function(table, col1, col2, val1, val2, cb) {
        orm.insertOne(table, col1, col2, val1, val2, function (result) {
            cb(result)
        })
    updateOne: function(id, col1, col2, whereId, cb) {
        orm.updateOne(id, col1, col2, whereID, function (result) {
            cb(result)
        })
    }
    }
};

module.exports = burger;


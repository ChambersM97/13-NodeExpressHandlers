var connection = require("./connection");
var orm = {
    selectAll : function() {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result) {
            if (err) {throw err};

            var idArr = [];
            let data = JSON.parse(JSON.stringify(result));
            data.map(iem => {idArr.push(item)});
            console.table(idArr)
        })
    },

    insertOne : function(column1, column2, value1, value2) {
        var queryString = "INSERT INTO burgers";
        queryString += "(" + column1 + "," + column2 + ") "
        queryString += "VALUES (";
        queryString += value1 + "," + value2 + ");";

        connection.query(queryString, function(err) {
            if (err) {throw err};PNE
            console.log("successfully INSERTED into burger.");
        });
    },

    updateOne : function (id, burger_name, devoured, whereId) {
        let queryString = "UPDATE burgers";
        queryString += "SET id= " + id + "', burger+name=" + burger_name + "', devoured='" + devoured + "'";
        queryString += " WHERE id=" +  whereId + ";";
        connection.query(queryString, function(err, result) {
            if (err) {throw err};
            console.log("Successfully udapted table:", table, "with :", burger_name, devoured, "... AT id : ", whereId)
        });

    }
}


module.exports = orm;
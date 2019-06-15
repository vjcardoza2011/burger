//Importing the connection.js file into the orm.js file
var connection = require('../config/connection.js')

var orm =
{
    // Methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database

    // selectAll() method
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // insertOne() method
    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?',
            {
                burger_name: burger_name,
                devoured: false,
            }, function (err, result) {
                if (err) throw err;
                callback(result);
            });

    },

    // updateOne() method
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};


// Exporting the ORM object in module.exports
module.exports = orm;
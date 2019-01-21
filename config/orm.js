const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName) => {
        const query = 'select * from ??';
        connection.query(query, [tableName],
            (err, result) => {
                if (err) {
                    throw err;
                }
                console.log(result);
            });
    },
    insertOne: (tableName, tableColOne, tableColTwo, valueOne, ValueTwo) => {
        const query = 'INSERT INTO ?? (??, ??) VALUE (?, ?)';
        connection.query(query, [tableName, tableColOne, tableColTwo, valueOne, ValueTwo],
            (err, result) => {
                if (err) {
                    throw err;
                }
                // do something with the result 
            });

    }
    // updateOne: () => {

    // }

}

module.exports = orm;
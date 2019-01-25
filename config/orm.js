const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const query = 'select * from ??;';
        // console.log(query);
        connection.query(query, [tableName],
            (err, result) => {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    insertOne: (tableName, tableCol, value, cb) => {
        const query = 'INSERT INTO ?? (??) VALUE (?);';
        console.log(query);
        connection.query(query, [tableName, tableCol, value],
            (err, result) => {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    updateOne: (tableName, tableCol, value, tableColTwo, condition, cb) => {
        const query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        // UPDATE burgers SET devoured = true WHERE id = 2
        console.log(query);
        connection.query(query, [tableName, tableCol, value, tableColTwo, condition],
            (err, result) => {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    }

}

module.exports = orm;
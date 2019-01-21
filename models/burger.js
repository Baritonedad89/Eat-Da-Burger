const orm = require("../config/orm");


const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      }






    // orm.insertOne();
    // orm.updateOne();
};






module.exports = burger; 
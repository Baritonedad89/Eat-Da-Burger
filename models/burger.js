const orm = require("../config/orm");


const burger = {
    selectAll: (cb) =>{
        orm.selectAll("burgers", (res) =>{
          cb(res);
          // console.log(res);
        });
      },

      insertOne: (tableCol, value, cb) => {
        orm.insertOne("burgers", tableCol, value, (res) => {
          cb(res);
        });
      },
      updateOne: (tableName, tableCol, value, tableColTwo, condition, cb)=>{
        orm.updateOne("burgers", tableCol, value, tableColTwo, condition, (res) =>{
          cb(res);
        })
      }
};





module.exports = burger; 
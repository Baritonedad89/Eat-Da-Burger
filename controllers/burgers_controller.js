const express = require('express');
const burger = require('../models/burger.js')
const router = express.Router();


router.get("/", (req, res) => {
    burger.selectAll((data)=> {
        const hbsObject ={
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject )
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.name, (data) => {
        console.log(data);
    res.json({id: data.insertId});
    res.status(200).end();

    });
});

router.put("/api/burgers/:id", (req, res) => {
    console.log(req.params.id)
    const condition = `${req.params.id}`;
        // UPDATE burgers SET devoured = true WHERE id = 2

    burger.updateOne("burgers", "devoured", req.body.devoured, "id", condition, (data)=> {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            console.log(data);
            res.json({id: data.insertId})
            res.status(200).end();
          };
    });
});

// Export routes for server.js to use.
module.exports = router;


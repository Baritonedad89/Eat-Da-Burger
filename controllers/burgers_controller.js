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
    });
});

router.put("/api/burgers/:id", (req, res) => {
    console.log(req.params.id)
    const condition = `${req.params.id}`;
        // UPDATE burgers SET devoured = true WHERE id = 2

    burger.updateOne("burgers", "devoured", req.body.devoured, "id", condition, (data)=> {
        console.log(data);
        res.json({id: data.insertId})

    })
})
















// Export routes for server.js to use.
module.exports = router;


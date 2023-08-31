const express = require('express');

const router = express.Router({caseSensitive : true});

router.get('/:id', (req, res) => {
    let id = req.params["id"];
    res.json({
        "vaccineName" : "vname",
        "price" : 100,
        "does" : 2
    })
})

module.exports=router;
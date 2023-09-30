let express = require("express");
let productRoute = express.Router();

const productDataModel = require("../data-model/productDataModel");

productRoute.post("/api/saveProduct", (req, res) => {
    let product = req.body;
    console.log(product);

    productDataModel.findOne({name : req.body.name}).then((existingProduct) => {
        if (existingProduct) {
            res.status(200).send(existingProduct);
        } else {
            let newProduct = new productDataModel(product);
            newProduct.save().then((newProduct) => {
                console.log("product saved!", newProduct);
                res.send(newProduct);
            }).catch((err1) => {
                console.log("Failed to save Product", err1);
                res.status(500).send("error while saving product");
            })
        }
    }).catch((err) => {
        console.log(err);
        res.send("Product existed!");
    })
})
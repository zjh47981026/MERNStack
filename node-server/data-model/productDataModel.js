let mongooseObj = require("mongoose");

schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let productSchema = new schemaObj({
    name : {type : String, required : true},
    price : {type : Number, required : true},
    desc : {type : String, required : true},
    rating : Number
});

let ProductModel = mongooseObj.model("product", productSchema);

module.exports = ProductModel;
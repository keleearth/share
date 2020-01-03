const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let goods = new Schema({
    productId:String,
    productName:String,
    productPrice:Number,
    productImage:String,
    productNum:Number
});

module.exports = mongoose.model('Goods',goods);
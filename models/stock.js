const mongoose = require("mongoose")

const {Shema} = mongoose

const {productschema} = require("./products")

const stockschema = new mongoose.Schema({
    Product: {
        type: [productschema],
    },
    store: {
        type: String,
        require: true,
    },
    stock: {
        type: Boolean,
        require: true,
    },
}, 
{timestamps: true}
)

const Stock = mongoose.model("Stock", stockschema)

module.exports = Stock 
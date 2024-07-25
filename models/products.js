const mongoose = require("mongoose")

const {Schema} = mongoose

const productsSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
}, {timestamps: true}
)

const Service = mongoose.model("Product", productsSchema)

module.exports = {
    Product,
    productsSchema,
}
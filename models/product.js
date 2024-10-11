const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, max:150, required: true, index: true, unique: true},
},

{timestamps: true},
)

module.exports = mongoose.model("product", productSchema)

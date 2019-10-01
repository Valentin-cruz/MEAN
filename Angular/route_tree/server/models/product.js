var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3,"Product name is NOT less than 3 letters"],
        required: true,
    },
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
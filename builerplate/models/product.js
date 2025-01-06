const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Cloudinary URL yahan save hoga
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // User model ka reference
        required: true,
    },
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order", // Order model ka reference
        },
    ],
});

module.exports = mongoose.model("Product", productSchema);

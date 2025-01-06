const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true,
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

module.exports = mongoose.model("Order", orderSchema);

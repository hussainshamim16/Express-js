
const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', 
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now, 
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'shipped'], 
    default: 'pending',
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

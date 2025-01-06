const Order = require('../models/orderModel');
const Product = require('../models/productModel');


const createOrder = async (req, res) => {
  try {
    const { user, products } = req.body;

    if (!user || !products || products.length === 0) {
      return res.status(400).json({ message: 'User and products are required' });
    }

 
    const productDetails = await Product.find({ '_id': { $in: products } });

    const totalPrice = productDetails.reduce((total, product) => total + product.price, 0);

    // Create  new order
    const newOrder = new Order({
      user,
      products,
      totalPrice,
      status: 'pending', 
    });

 
    await newOrder.save();

    res.json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error creating order', error: error });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;

 
    const orders = await Order.find({ user: userId }).populate('products').populate('user');

    if (!orders) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    res.json({ orders });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error });
  }
};

module.exports = { createOrder, getUserOrders };

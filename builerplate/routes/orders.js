// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders } = require('../controllers/orderController');

// Route to create an order
router.post('/create', createOrder);

// Route to get orders by user
router.get('/:userId', getUserOrders);

module.exports = router;

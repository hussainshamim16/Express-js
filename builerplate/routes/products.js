// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Multer upload middleware
const { createProduct } = require('../controllers/productController');

// Route to create a product
router.post('/create', upload.single('image'), createProduct);

module.exports = router;

// controllers/productController.js
const Product = require('../models/productModel');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

// Create a Product
const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    const imageFile = req.file.path; // Path of the uploaded image

    // Upload image to Cloudinary
    cloudinary.uploader.upload(imageFile, { folder: 'products' }, async (err, result) => {
      if (err) {
        console.log('Cloudinary Error: ', err);
        return res.status(500).json({ message: 'Error uploading image to Cloudinary', error: err });
      }

      // Create a new product with data from the request
      const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageUrl: result.secure_url, // Cloudinary image URL
        user: req.body.user, // User who created the product
      });

      // Save the product to the database
      await newProduct.save();

      // Delete the local image after uploading to Cloudinary
      fs.unlinkSync(imageFile);

      res.json({ message: 'Product created successfully', product: newProduct });
    });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error creating product', error: error });
  }
};

module.exports = { createProduct };

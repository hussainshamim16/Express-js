const Blog = require('../models/blogModel');
const cloudinary = require('../config/cloudinary');

exports.getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
        res.json(blogs); 
    } catch (error) {
        res.json({ message: 'Error fetching blogs: ' + error.message });
    }
};

exports.addBlog = async (req, res) => {
    try {
        const uploadedImage = await cloudinary.uploader.upload(req.file.path);
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            image: uploadedImage.secure_url, 
        });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog); 
    } catch (error) {
        res.status(500).json({ message: 'Error adding blog: ' + error.message });
    }
};


exports.updateBlog = async (req, res) => {
    try {
        
        const blogId = req.params.id;

        
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });

        res.status(200).json(updatedBlog); 
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog: ' + error.message });
    }
};


exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        await Blog.findByIdAndDelete(blogId);
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog: ' + error.message });
    }
};

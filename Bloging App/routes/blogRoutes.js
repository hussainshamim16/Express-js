const express = require('express');
const multer = require('multer');
const { getAllBlogs, addBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllBlogs);
router.post('/', upload.single('image'), addBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;

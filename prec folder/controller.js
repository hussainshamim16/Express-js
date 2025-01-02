const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { content, user } = req.body;
        const post = new Post({ content, user });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Like a post
exports.likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(postId);

        if (post.likes.includes(userId)) {
            post.likes = post.likes.filter(id => id !== userId); // Unlike
        } else {
            post.likes.push(userId); // Like
        }

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a comment
exports.addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { user, content } = req.body;

        const post = await Post.findById(postId);
        post.comments.push({ user, content });

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

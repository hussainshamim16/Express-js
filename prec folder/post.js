const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: String, required: true }, 
    likes: [{ type: String }], 
    comments: [
        {
            user: { type: String, required: true },
            content: { type: String, required: true },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);

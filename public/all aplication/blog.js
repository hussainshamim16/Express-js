
app.get('/blogs', (req, res) => {
    res.json({ blogs });
});


app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required!' });
    }
    const newBlog = { id: Date.now(), title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
});


app.delete('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blogIndex = blogs.findIndex(blog => blog.id == id);
    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found!' });
    }
    const deletedBlog = blogs.splice(blogIndex, 1);
    res.json(deletedBlog);
});



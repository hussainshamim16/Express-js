const express = require('express');
const app = express();
const PORT = 5000;
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => console.log(`runner express ${PORT}`));

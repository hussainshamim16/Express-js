const express = require('express');
const PORT = 5000;
const mongoose = require('./db');
const authRoutes = require('./auth');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

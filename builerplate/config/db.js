const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://hussainshamim:xrIb4c6M30V5qP3K@cluster0.mongodb.net/FirstDatabase?retryWrites=true&w=majority'
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
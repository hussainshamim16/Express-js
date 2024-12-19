const express = require('express');
const User = require('../User');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../authMiddleware');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        await newUser.save();
        res.json({ message: 'User registered successfully' });
    } catch (err) {
        res.json({ error: 'Error registering user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.json({ error: 'Error logging in' });
    }
});

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome to the protected route!' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { username, email, dob } = req.body;
    try {
        const user = new User({ username, email, dob });
        await user.save();
        res.status(201).json({ message: 'User registered!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

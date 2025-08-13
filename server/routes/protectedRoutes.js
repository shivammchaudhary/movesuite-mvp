const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, (req, res) => {
  res.status(200).json({
    message: `Hello ${req.user.userId}, you're authorized!`,
    role: req.user.role,
  });
});

module.exports = router;
// This route is protected and requires a valid JWT token to access.
// It responds with a welcome message and the user's role if the token is valid.
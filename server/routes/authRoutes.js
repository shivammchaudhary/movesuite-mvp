// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// ✅ Import authController properly
const { signup, login } = require('../controllers/authController.js');

// ✅ Debug logs to verify functions are loaded
console.log('🔍 signup function:', typeof signup);
console.log('🔍 login function:', typeof login);

// ✅ Define routes
router.post('/signup', signup);
router.post('/login', login);

// ✅ Export the router
module.exports = router;

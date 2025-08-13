// routes/truckRoutes.js
const express = require('express');
const router = express.Router();
const { createTruck } = require('../controllers/truckController'); // ✅ Fix import
const authenticateToken = require('../middleware/authMiddleware'); // ✅ Ensure this returns a function

router.post('/', authenticateToken, createTruck); // ✅ Use proper function here

module.exports = router; // ✅ Don’t export as { router }

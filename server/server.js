const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const companyRoutes = require('./routes/companyRoutes');
const truckRoutes = require('./routes/truckRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong 🏓');
});

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/trucks', truckRoutes);

console.log('✅ companyRoutes loaded');
console.log('🚚 truckRoutes loaded');

// Test route (ensure server is routing anything)
app.get('/api/test', (req, res) => {
  res.json({ success: true });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

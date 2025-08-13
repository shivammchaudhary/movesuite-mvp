const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

console.log('📦 companyRoutes file loaded');

router.post('/', async (req, res) => {
  console.log('📨 POST /api/companies hit');
  console.log('🪵 Raw req.body:', req.body); // log incoming body

  const { name } = req.body;

  if (!name || typeof name !== 'string') {
    console.warn('🚫 Invalid or missing name:', name);
    return res.status(400).json({ error: 'Company name is required and must be a string' });
  }

  try {
    const existing = await prisma.company.findUnique({ where: { name } });
    if (existing) {
      return res.status(409).json({ error: 'Company already exists' });
    }

    const company = await prisma.company.create({ data: { name } });
    res.status(201).json({ message: 'Company created', company });
  } catch (error) {
    console.error('❌ Prisma error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

module.exports = router;

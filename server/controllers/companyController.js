const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ✅ Create a new company
const createCompany = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: 'Company name is required' });
    }

    const existing = await prisma.company.findUnique({ where: { name } });
    if (existing) {
      return res.status(409).json({ error: 'Company already exists' });
    }

    const company = await prisma.company.create({
      data: { name },
    });

    res.status(201).json({ message: 'Company created', company });
  } catch (error) {
    console.error('❌ Error creating company:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

module.exports = { createCompany };

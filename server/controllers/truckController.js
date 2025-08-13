// controllers/truckController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTruck = async (req, res) => {
  try {
    const { plate, capacity, companyId } = req.body;

    const truck = await prisma.truck.create({
      data: {
        plate,
        capacity,
        companyId,
      },
    });

    res.status(201).json({ message: 'Truck created', truck });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Truck creation failed', details: error.message });
  }
};

module.exports = { createTruck };

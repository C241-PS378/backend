const { Product } = require('../models/Product');

// Get all products based on type (plastic, glass, paper, etc.)
const getAllProductsByType = async (req, res) => {
  const { type } = req.params;

  try {
    const products = await Product.findAll({
      where: {
        type: type,
      },
      attributes: ['id', 'userId', 'name', 'price', 'imageUrl'],
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProductsByType,
};
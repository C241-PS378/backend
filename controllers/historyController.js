const { WasteProduct } = require('../models/History');

const getSoldHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const soldProducts = await WasteProduct.findAll({
      where: {
        userId,
        sold: true, // Menyesuaikan dengan atribut yang menandakan produk telah terjual
      },
      order: [['createdAt', 'DESC']], // Mengurutkan berdasarkan tanggal dibuat secara descending
    });

    res.json(soldProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch sold history' });
  }
};

const getBoughtHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const boughtProducts = await WasteProduct.findAll({
      where: {
        userId,
        bought: true, // Menyesuaikan dengan atribut yang menandakan produk telah dibeli
      },
      order: [['createdAt', 'DESC']], // Mengurutkan berdasarkan tanggal dibuat secara descending
    });

    res.json(boughtProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch bought history' });
  }
};

module.exports = {
  getSoldHistory,
  getBoughtHistory,
};
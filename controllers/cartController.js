const { Cart } = require('../models/Cart');  // Pastikan Anda mengimpor model Cart

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Cek apakah produk sudah ada di dalam cart user
    let cartItem = await Cart.findOne({
      where: {
        userId,
        productId
      }
    });

    if (cartItem) {
      // Jika sudah ada, update quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Jika belum ada, buat item baru di cart
      cartItem = await Cart.create({
        userId,
        productId,
        quantity
      });
    }

    res.status(201).json({ status: 'success', cartItem });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    // Cari item cart berdasarkan ID
    const cartItem = await Cart.findByPk(cartItemId);

    if (!cartItem) {
      return res.status(404).json({ status: 'fail', message: 'Item not found in cart' });
    }

    // Hapus item cart
    await cartItem.destroy();

    res.status(200).json({ status: 'success', message: 'Item removed from cart' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
};
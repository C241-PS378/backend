const Address = require('../models/Address');

// Get all addresses by user ID
const getAllAddressesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const addresses = await Address.findAll({
      where: { userId }
    });
    res.json(addresses);
  } catch (error) {
    next(error);
  }
};

// Create new address
const createAddress = async (req, res, next) => {
  try {
    const { userId, name, contact, address } = req.body;
    const newAddress = await Address.create({ userId, name, contact, address });
    res.json(newAddress);
  } catch (error) {
    next(error);
  }
};

// Update address by ID
const updateAddress = async (req, res, next) => {
  try {
    const addressId = req.params.id;
    const { name, contact, address } = req.body;
    const addressToUpdate = await Address.findByPk(addressId);
    if (!addressToUpdate) {
      return res.status(404).json({ message: 'Address not found' });
    }
    addressToUpdate.name = name;
    addressToUpdate.contact = contact;
    addressToUpdate.address = address;
    await addressToUpdate.save();
    res.json(addressToUpdate);
  } catch (error) {
    next(error);
  }
};

// Delete address by ID
const deleteAddress = async (req, res, next) => {
  try {
    const addressId = req.params.id;
    const addressToDelete = await Address.findByPk(addressId);
    if (!addressToDelete) {
      return res.status(404).json({ message: 'Address not found' });
    }
    await addressToDelete.destroy();
    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAddressesByUserId,
  createAddress,
  updateAddress,
  deleteAddress
};

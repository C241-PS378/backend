const { validationResult } = require('express-validator');
const { Address } = require('../models/Address');
const { Waste } = require('../models/Waste')

// Step 1: Waste Info
exports.wasteInfo = async (req, res, next) => {
  // Handle the first step of selling waste
  try {
    // Validate request body here if needed (e.g., using express-validator)

    // Process the information from req.body
    const { wasteName, amount, weight, wasteType } = req.body;

    // Example validation (you can expand this)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Save data to session or temporary storage
    req.session.wasteInfo = { wasteName, amount, weight, wasteType };

    res.json({ step: 2 }); // Move to the next step
  } catch (error) {
    next(error);
  }
};

// Step 2: Select Address
exports.selectAddress = async (req, res, next) => {
  // Handle the second step of selecting address
  try {
    // Example logic to fetch addresses from database
    const addresses = await Address.findAll(); // Fetch addresses from database

    res.json({ step: 3, addresses }); // Move to the next step
  } catch (error) {
    next(error);
  }
};

// Step 3: Confirmation
exports.confirmation = async (req, res, next) => {
  // Handle the third step of confirmation
  try {
    // Retrieve saved data from session or temporary storage
    const { wasteName, amount, weight, wasteType } = req.session.wasteInfo;

    // Fetch selected address from req.body or session
    const { selectedAddressId } = req.body; // Assuming selectedAddressId is sent from frontend

    const selectedAddress = await Address.findByPk(selectedAddressId);

    // Calculate total weight and total income based on waste type
    let pricePerKg;
    switch (wasteType) {
      case 'plastic':
        pricePerKg = 5000;
        break;
      case 'glass':
      case 'cardboard':
        pricePerKg = 2000;
        break;
      case 'paper':
        pricePerKg = 3000;
        break;
      case 'metal':
        pricePerKg = 8000;
        break;
      default:
        pricePerKg = 0;
        break;
    }

    const totalWeight = weight * amount;
    const totalIncome = totalWeight * pricePerKg;

    // Example response with waste and address details
    const response = {
      wasteDetail: { wasteName, amount, weight },
      addressDetail: selectedAddress,
      totalIncome
    };

    res.json({ step: 4, ...response }); // Move to the next step
  } catch (error) {
    next(error);
  }
};

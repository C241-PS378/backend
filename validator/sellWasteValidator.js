const { body } = require('express-validator');

const sellWasteValidation = [
    body('wasteName').notEmpty().withMessage('Waste name cannot be empty'),
    body('wasteAmount').notEmpty().withMessage('Waste amount cannot be empty'),
    body('wasteWeight').notEmpty().withMessage('Waste weight cannot be empty'),
    body('wasteType').notEmpty().withMessage('Waste type cannot be empty'),
    body('userId').notEmpty().withMessage('User ID cannot be empty'),
    body('image').custom((value, { req }) => {
      if (!value) {
        throw new Error('Image is required');
      }
      return true;
    }),
  ];
  
  module.exports = {
    sellWasteValidation,
  };
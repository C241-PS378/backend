// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
const multer = require('multer')
const cookieParser = require('cookie-parser');
const path = require('path');
const upload = multer();
const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const marketRoutes = require('./routes/marketRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const sellWasteRoutes = require('./routes/sellWasteRoutes');
const historyRoutes = require('./routes/historyRoutes');
const addressRoutes = require('./routes/addressRoutes');
const homeRoutes = require('./routes/homeRoutes');
const pickupRoutes = require('./routes/pickupRoutes');
const profileRoutes = require('./routes/profileRoutes');
const itemRoutes = require('./routes/itemRoutes');
const welcomeRoutes = require('./routes/welcomeRoutes');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))
app.use(upload.array());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cart', cartRoutes);
app.use('/auth', authRoutes);
app.use('/market', marketRoutes);
app.use('/order', orderRoutes);
app.use('/history', historyRoutes);
app.use('/address', addressRoutes);
app.use('/sellWaste', sellWasteRoutes);
app.use('/home', homeRoutes);
app.use('/pickup', pickupRoutes);
app.use('/profile', profileRoutes);
app.use('/item', itemRoutes); 
app.use('/', welcomeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
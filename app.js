// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const morgan = require('morgan');
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


// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

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

// Database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test_db'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Make db accessible to routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/market', marketRoutes);
app.use('/order', orderRoutes);
app.use('/cart', cartRoutes);
app.use('/history', historyRoutes);
app.use('/sell-waste', sellWasteRoutes);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

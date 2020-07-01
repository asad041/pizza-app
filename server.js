const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./routes/api/auth'),
  pizzaRoutes = require('./routes/api/pizza'),
  orderRoutes = require('./routes/api/order');

const app = express();

// connect database
connectDB();

app.use(cors());

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// define routes
app.use('/api/auth', authRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Pizza app listening at ${PORT}`));

const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const authRoutes = require('./routes/api/auth'),
  pizzaRoutes = require('./routes/api/pizza'),
  orderRoutes = require('./routes/api/order');

const app = express();

// connect database
connectDB();

app.use(cors());

app.use(express.static('client/build'));

// Init middleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/auth', authRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/order', orderRoutes);

const frontend = path.join(__dirname, 'client/build');

app.use('/', express.static(frontend));

app.use(function (req, res, next) {
  res.sendFile(path.join(frontend, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Pizza app listening at ${PORT}`));

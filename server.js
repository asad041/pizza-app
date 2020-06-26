const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const pizzaRoutes = require('./routes/api/pizza');

const app = express();

// connect database
connectDB();

app.use(cors());

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// define routes
app.use('/api/pizza', pizzaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Pizza app listening at ${PORT}`));

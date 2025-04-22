const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRoutes = require('./routes/items');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/items', itemsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

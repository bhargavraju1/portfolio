const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./db');
const cors = require('cors');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use('/api', contactRoutes); // all /api/contact will go to contactRoutes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

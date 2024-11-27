const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

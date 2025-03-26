const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize app and environment variables
dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Configure CORS to allow requests from your frontend domain
app.use(cors({
  origin: ['https://task-manager-anushrey10.vercel.app', 'https://task-manager-git-main-anushrey10.vercel.app', 'https://task-manager-anushrey10s-projects.vercel.app', 'http://localhost:3000'],
  credentials: true
}));

// Simple health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Backend is running', 
    timestamp: new Date().toISOString() 
  });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

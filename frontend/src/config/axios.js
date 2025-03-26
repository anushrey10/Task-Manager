import axios from 'axios';

// Set up default config
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL || 'https://task-manager-backend-wlzs.onrender.com'  // Use the Render backend URL in production
    : 'http://localhost:5001' // In development, use localhost
});

export default instance; 
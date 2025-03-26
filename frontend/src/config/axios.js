import axios from 'axios';

// Set up default config
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '' // In production, use relative paths (handled by proxy in vercel.json)
    : 'http://localhost:5001' // In development, use localhost
});

export default instance; 
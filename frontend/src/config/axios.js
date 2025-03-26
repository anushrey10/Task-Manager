import axios from 'axios';

// Determine the baseURL
const apiUrl = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL || 'https://task-manager-backend-8dzw.onrender.com'
  : 'http://localhost:5001';

console.log('API URL:', apiUrl);
console.log('Environment:', process.env.NODE_ENV);

// Set up default config
const instance = axios.create({
  baseURL: apiUrl,
  timeout: 10000
});

// Add request interceptor for debugging
instance.interceptors.request.use(function (config) {
  console.log('Making request to:', config.baseURL + config.url);
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add response interceptor for debugging
instance.interceptors.response.use(function (response) {
  console.log('Received response from:', response.config.url, 'with status:', response.status);
  return response;
}, function (error) {
  console.error('Request failed:', error.config?.url, 'Error:', error.message);
  return Promise.reject(error);
});

export default instance; 
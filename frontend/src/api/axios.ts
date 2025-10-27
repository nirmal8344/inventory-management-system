import axios from 'axios';

const API_BASE_URL = 'https://inventory-backend-ctv7.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
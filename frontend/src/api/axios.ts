import axios from 'axios';

// 1. Backend oda live Render URL ah inga direct ah kudukkurom.
// Pazhaya 'import.meta.env.VITE_API_BASE_URL' line ah remove pannitom.
const API_BASE_URL = 'https://inventory-backend-ctv7.onrender.com';

// 2. Axios instance ah create panrom
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
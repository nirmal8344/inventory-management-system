import axios from 'axios';

// Marubadiyum Vercel kitta irundhu URL ah eduka solrom
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
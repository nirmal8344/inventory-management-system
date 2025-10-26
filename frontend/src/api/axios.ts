import axios from 'axios';

// 1. Backend oda base URL ah inga eduthukurom
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 2. Axios instance ah create panrom
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Idhu romba mukkiyam!
  },
});

export default apiClient;
import axios from 'axios';

const apiClient = axios.create({
  // Vercel/Netlify la namma set panra variable ah inga eduthukum
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default apiClient;
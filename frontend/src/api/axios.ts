// File Path: frontend/src/api/axios.ts

import axios from 'axios';

// Vercel la neenga set panna URL ah inga eduthukalam
const API_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_URL,
});

export default apiClient;
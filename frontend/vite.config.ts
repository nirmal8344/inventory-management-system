import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Local server settings (Vercel la idhu affect aagadhu)
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  // Alias settings (optional, aana sariyana syntax la iruku)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
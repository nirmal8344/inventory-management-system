import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables (for .env, .env.local etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    
    // Local dev server (Vercel won't use this)
    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    // Path alias (so you can use @/components etc.)
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    // Expose environment variables to the client
    define: {
      'process.env': env,
    },
  };
});

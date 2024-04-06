import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY)
    },
  plugins: [react()],
  server: {
    proxy: {   // create a proxy for the client 
      "/api": {  /* sends every fetch request that starts with /api to the the below host, 
      which is the address for the backend server we created   */
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false
}, },
}, }})


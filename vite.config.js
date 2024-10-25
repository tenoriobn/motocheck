import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      public: "/public",
    },
  },
  server: {
    port: 3000, // Definindo a porta para 3000
  },
})

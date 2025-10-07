import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6500,
  },
  build: {
    rollupOptions: {
      external: ['raf'], // 👈 Tells Rollup to skip bundling raf
    },
  },
})

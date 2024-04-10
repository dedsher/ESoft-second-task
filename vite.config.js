import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@utils': path.resolve('./src/utils'),
    },
  },
})

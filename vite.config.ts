import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.ts 또는 vite.config.js

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // 0.0.0.0 으로 바꿔서 외부 접근 허용
    port: 5173,        // 포트는 원하면 바꿔도 됨
  },
})

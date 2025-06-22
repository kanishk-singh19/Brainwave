import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Do NOT import tailwindcss here — Vite uses PostCSS for that automatically

export default defineConfig({
  plugins: [react()],
})

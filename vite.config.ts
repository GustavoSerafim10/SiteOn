import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // No GitHub Pages o site fica em /SiteOn/; localmente (e em domínio próprio) fica na raiz
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})

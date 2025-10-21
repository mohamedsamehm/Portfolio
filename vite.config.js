import { defineConfig } from 'ite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repo name
})
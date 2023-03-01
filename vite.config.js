import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from 'dotenv'

env.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  {
  name: 'env',
    transform: (code) => {
      return code.replace(/import.meta.env/g, JSON.stringify(process.env))
    },
  }
  ],
  
})

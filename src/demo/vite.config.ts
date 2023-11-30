import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    root: 'src/demo',
    plugins: [react()],
    build: {
      outDir: resolve(__dirname, '../../build'),
    },
  }
})

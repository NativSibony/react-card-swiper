import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/lib/index.ts'),
      name: 'React Card Swiper',
      fileName: 'react-card-swiper',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    minify: true,
    emptyOutDir: true,
    outDir: 'dist',
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
})

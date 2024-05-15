import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from '@react-dev-inspector/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react-dev-inspector server config for vite 作用：调试定位
    inspectorServer(),
    react({
      babel: {
        plugins: [
          '@react-dev-inspector/babel-plugin', // Compiler Plugin
        ],
      },
    }),
  
  ],
  server: {
    port: 9000,
  },
})

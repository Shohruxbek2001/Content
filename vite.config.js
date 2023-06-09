
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
      find: 'vue-i18n',
      replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
  }]
  },
  build: { target: 'es2020' },
  optimizeDeps: {
    esbuildOptions: { target: 'es2020', supported: { bigint: true } },
  },
})

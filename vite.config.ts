/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

/**
 * @doc https://vitejs.dev/config/
 */
export default defineConfig({
  root: 'docs',
  plugins: [react()],
  resolve: {
    alias: {
      '@/package': `/../package/src`,
      '@/docs': `/../docs/src`,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
}) satisfies UserConfig

import react from '@vitejs/plugin-react-swc'
import path from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

const $r = (route: TemplateStringsArray) => path.resolve(__dirname, `/${route}`)

/**
 * @doc https://vitejs.dev/config/
 */
export default defineConfig({
  root: 'docs',
  plugins: [react()],
  resolve: {
    alias: {
      '@components/ui': `/../package/src/index.ts`,
      '@assets': $r`src/assets`,
    },
  },
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
}) satisfies UserConfig

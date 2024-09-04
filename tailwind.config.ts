import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector',
  content: ['./docs/index.html', './(docs|package)/src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

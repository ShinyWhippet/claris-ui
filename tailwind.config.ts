import type { Config } from 'tailwindcss'

export default {
  darkMode: ['selector'],
  content: ['./docs/index.html', './(docs|package)/src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config

import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginTailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...eslintPluginTailwind.configs['flat/recommended'],
  { ignores: ['dist', '**/*.d.ts', 'package/lib'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: {
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ['classnames', 'clsx', 'ctl', 'cx'],
        config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
        cssFiles: [
          '**/*.css',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: ['tw', 'cx'], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': eslintPluginReactRefresh,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
  },
  {
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
)

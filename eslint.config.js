import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...js.configs.recommended,
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
  },
]);

// @ts-check
/** @type {import('eslint').FlatConfig[]} */
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').FlatConfig[]} */
const config = [
  {
    ignores: ['**/*.d.ts', 'node_modules/**', 'dist/**', 'build/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
];

export default config;

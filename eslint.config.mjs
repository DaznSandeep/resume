import pkg from '@eslint/js';
const { FlatESLintConfig } = pkg;
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      prettier,
      '@typescript-eslint': typescriptPlugin,
    },
    settings: {
      react: {
        version: '18.0',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/display-name': 'off',
    },
  },
];

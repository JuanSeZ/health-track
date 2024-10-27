const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  js.configs.recommended,
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    root: true,
    ignorePatterns: ['.cache', 'package-lock.json', 'public', 'node_modules'],
    plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
    rules: {
      // JavaScript rules
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': 'warn',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      // TypeScript rules
      '@typescript-eslint/array-type': [
        'warn',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      // React rules
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      },
    ],
  }),
];

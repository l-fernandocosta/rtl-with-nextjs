module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'next',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};

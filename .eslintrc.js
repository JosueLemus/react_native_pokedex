module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      parserOptions: {
        project: './tsconfig.json',
        emitDecoratorMetadata: true,
      },
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      settings: {
        'testing-library/custom-queries': [
          'filters.findById',
          'filters.findByIdrequired',
        ],
      },
    },
  ],
};
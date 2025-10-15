import { baseConfig } from '@monorepo/eslint-config';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

/**
 * ESLint configuration for NestJS server application.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  ...baseConfig,
  {
    ignores: ['eslint.config.mjs', 'jest.config.cjs'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.spec.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.spec.json'],
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint/eslint-plugin': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-deprecated': 'error',
    },
  },
];

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import _import from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortExports from 'eslint-plugin-sort-exports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ),
    ),

    plugins: {
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier),
      'react-hooks': fixupPluginRules(reactHooks),
      jest: fixupPluginRules(jest),
      'simple-import-sort': simpleImportSort,
      'sort-exports': sortExports,
    },

    languageOptions: {
      globals: {},
      ecmaVersion: 5,
      sourceType: 'module',
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: false,
        },
      ],

      'import/order': 'off',
      'jsx-a11y/no-onchange': 'off',

      'react/boolean-prop-naming': [
        2,
        {
          rule: '^(is|has|should|can|with)[A-Z]([A-Za-z0-9]?)+',
        },
      ],

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/exports': 'off',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^@?(?!kapowaz)\\w'],
            ['^(@kapowaz)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],

      'sort-exports/sort-exports': [
        'error',
        {
          sortDir: 'asc',
          sortExportKindFirst: 'type',
        },
      ],

      'sort-imports': 'off',
    },
  },
  {
    files: ['**/*.config.*'],

    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
  {
    files: ['**/*.stories.*', '**/*.test.*'],

    rules: {
      'i18next/no-literal-string': 'off',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    files: ['**/__fixtures__/**', '**/__mocks__/**', '**/*.mock.*'],

    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
]);

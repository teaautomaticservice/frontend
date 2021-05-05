/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'sonarjs', '@typescript-eslint/eslint-plugin'],
  globals: {
    document: true,
    window: true,
    fetch: false,
    localStorage: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: path.resolve('webpack.config.ts'),
        resolve: {
          alias: {
            '~': path.resolve('src/'),
          },
        },
      },
      typescript: {},
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/button-has-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-plusplus': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/require-default-props': 0,
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    'max-len': [
      'warn',
      {
        code: 110,
        tabWidth: 2,
        comments: 110,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-indent': ['warn', 2],
    camelcase: 0,
  },
};

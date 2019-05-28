'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: [ './src/recommended.js' ],
  overrides: [{
    files: [ '**/*.ts', '**/*.tsx' ],
    rules: { 'no-undef': 'off' },
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [ 'jsx-a11y', 'import' ],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx' ] },
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: [
          '.js',
          '.ts',
          '.tsx',
        ],
      },
      typescript: {},
    },
    react: { version: 'detect' },
  },
}

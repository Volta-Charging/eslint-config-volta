'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: [ './src/recommended.js' ],
  overrides: [{
    files: [ '**/*.ts', '**/*.tsx' ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
    },
    rules: {
      'array-bracket-newline': [ 'error', { multiline: true }],
      'comma-dangle': [ 'warn', 'only-multiline' ],
      'function-paren-newline': [ 'warn', 'consistent' ],
      'max-params': [ 'warn', { max: 4 }],
      'no-undef': 'off',
      'object-curly-newline': [ 'error', { consistent: true }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: [
            '.js',
            '.ts', '.tsx',
          ],
        },
      },
    },
  }],
  plugins: [ 'import' ],
}

'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: [ './src/recommended.js' ],
  overrides: [{
    files: [ '**/*.ts' ],
    parser: 'typescript-eslint-parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
    },
    rules: { 'no-undef': 'off' },
    settings: {
      'import/resolver': {
        node: {
          extensions: [ '.js',
            '.ts' ],
        },
      },
    },
  }],
  plugins: [ 'import' ],
}

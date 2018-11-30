'use strict'
// coding style for Node modules.
module.exports = { // eslint-disable-line no-undef
  env: { node: true },
  globals: { Promise: true },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js',
          '.ts' ],
      },
    },
  },
}

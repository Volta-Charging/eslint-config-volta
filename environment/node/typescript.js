'use strict'
// coding style for Node modules using typescript.
module.exports = { // eslint-disable-line no-undef
  extends: './index',
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: { 'import/resolver': { node: { extensions: [ '.ts' ] } } },
}

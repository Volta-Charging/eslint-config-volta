'use strict'
// coding style for Node modules.
module.exports = { // eslint-disable-line no-undef
  env: { node: true },
  extends: '../../index.js',
  globals: { Promise: true },
  parser: 'babel-eslint',
  rules: { 'no-console': 'off' },
}

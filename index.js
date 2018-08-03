'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: ['./styles/recommended.js'],
  plugins: ['import'],
  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 0,
      maxBOF: 0,
      maxEOF: 1,
    }],
  },
}

'use strict'
// coding style for React components.
module.exports = { // eslint-disable-line no-undef
  env: { 'react-native/react-native': true },
  extends: [ './react.js', 'plugin:react-native/all' ],
  plugins: [ 'react-native' ],
  rules: {
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
  },
}

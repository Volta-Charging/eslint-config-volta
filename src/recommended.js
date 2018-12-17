'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    './fixable.js',
  ],
  parser: 'babel-eslint',
  plugins: [ 'import' ],
  rules: {
    'consistent-this': [ 'warn', 'self' ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-nested-callbacks': [ 'warn', 3 ],
    'no-console': 'warn', // If a console.log is being used in code for good reason in production, it should be calling an api for warning or error reporting like Sentry or Dashbird
    'no-undef': 'error',
    'sort-keys': 'warn',
    'sort-vars': 'warn',
  },
}

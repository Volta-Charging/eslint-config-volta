'use strict'

// coding style for React components.
module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['react'],

  rules: {
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: 'React',
      },
    ],

    'operator-linebreak': [
      'error',
      'after',
      { overrides: {
        ':': 'ignore',
        '?': 'ignore',
      } },
    ],

    // Validate closing bracket location in JSX
    // This rule checks all JSX multiline elements and verifies the location of the closing bracket.
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'warn',

    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',

    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-redundant-should-component-update': 'warn',
    'react/no-render-return-value': 'error',

    'react/no-typos': 'warn',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        // Enabled after discussion in #21
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': 'warn',

    'react/no-will-update-set-state': 'error',

    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'warn',
    'react/require-default-props': 'error',
  },
}

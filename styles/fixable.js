'use strict'

// All of these rules will be warnings so its a light nudge in the right direction
module.exports = { // eslint-disable-line no-undef
  rules: {
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'function-paren-newline': ['error', { minItems: 3 }],

    'import/no-useless-path-segments': 'warn',

    // Arguably the most hotly debated rule
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],

    'keyword-spacing': [
      'warn',
      {
        after: true,
        before: true,
      },
    ],

    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    'max-params': ['error', 3],

    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    'no-extra-parens': [
      'warn',
      'all',
      {
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],

    'no-trailing-spaces': 'warn',

    'object-property-newline': 'error',

    'one-var-declaration-per-line': 'warn',

    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',

    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', 'avoid-escape'],

    // Disallow Semicolons
    semi: ['warn', 'never'],

    'space-in-parens': ['warn', 'never'],
    'spaced-comment': 'warn',

  },
}

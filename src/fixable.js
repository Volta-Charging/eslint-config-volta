'use strict'
// All of these rules will be warnings so its a light nudge in the right direction
// eslint-disable-next-line no-undef
module.exports = {
  rules: {
    'array-bracket-newline': [ 'warn', { minItems: 3 }],
    'array-bracket-spacing': [
      'warn', 'always', { objectsInArrays: false },
    ],
    'comma-dangle': [ 'warn',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      }],
    'computed-property-spacing': [ 'warn', 'never' ],
    'eol-last': [ 'warn', 'always' ],
    'function-paren-newline': [ 'warn', { minItems: 3 }],
    'import/no-useless-path-segments': 'warn',
    'import/order': [ 'error', { 'newlines-between': 'always-and-inside-groups' }],
    // Arguably the most hotly debated rule
    indent: [
      'warn',
      2,
      { SwitchCase: 1 },
    ],
    'keyword-spacing': [ 'warn',
      {
        after: true,
        before: true,
      }],
    'lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-params': [ 'error', 3 ],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 }],
    'no-extra-parens': [
      'warn',
      'all',
      {
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],
    'no-multiple-empty-lines': [ 'warn', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-trailing-spaces': 'warn',
    'object-curly-newline': [ 'warn' ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'object-property-newline': 'warn',
    'one-var-declaration-per-line': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'quote-props': [ 'warn', 'as-needed' ],
    quotes: [
      'warn', 'single', 'avoid-escape',
    ],
    // Disallow Semicolons
    semi: [ 'warn', 'never' ],
    'space-in-parens': [ 'warn', 'never' ],
    'spaced-comment': 'warn',
  },
}

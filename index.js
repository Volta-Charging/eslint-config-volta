'use strict'
module.exports = { // eslint-disable-line no-undef
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [
    {
      files: [ '**/*.js', '**/*.jsx' ],
      parser: 'babel-eslint',
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint'
  ],
  rules: {
    'array-bracket-newline': [ 'warn', { multiline: true }],
    'array-bracket-spacing': [ 'warn', 'always', { objectsInArrays: false }],
    'comma-dangle': [ 'warn', 'only-multiline' ],
    'computed-property-spacing': [ 'warn', 'never' ],
    'consistent-this': [ 'warn', 'self' ],
    'eol-last': [ 'warn', 'always' ],
    'function-paren-newline': ['error', { 'minItems': 4 }],
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],
    'import/no-useless-path-segments': 'warn',
    'import/order': ['warn', {
      'newlines-between': 'always',
      'groups': [['builtin', 'internal', 'external'], 'parent', 'sibling', 'index'],
    }],
    indent: [ 'warn', 2, { SwitchCase: 1 }],
    'keyword-spacing': [
      'warn', { after: true,
        before: true }
    ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'warn', 'always', { exceptAfterSingleLine: true }],
    'max-nested-callbacks': [ 'warn', 3 ],
    'max-params': 'off',
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 }],
    'no-console': 'warn', // If a console.log is being used in code for good reason in production, it should be calling an api for warning or error reporting like Sentry or Dashbird
    'no-extra-parens': [
      'warn', 'all', { ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false }
    ],
    'no-multiple-empty-lines': [
      'warn', { max: 1,
        maxBOF: 0,
        maxEOF: 1 }
    ],
    'no-trailing-spaces': 'warn',
    'no-undef': 'warn',
    'object-curly-newline': [
      'warn', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
        'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
        'ImportDeclaration': { 'multiline': true },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
      },
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'object-property-newline': ['warn', { 'allowAllPropertiesOnSameLine': true }],
    'one-var-declaration-per-line': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'quote-props': [ 'warn', 'as-needed' ],
    quotes: [ 'warn', 'single', 'avoid-escape' ],
    semi: [ 'warn', 'never' ],
    'sort-keys': 'warn',
    'sort-vars': 'warn',
    'space-in-parens': [ 'warn', 'never' ],
    'spaced-comment': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts', '.tsx',
        ],
      },
    },
  },
}

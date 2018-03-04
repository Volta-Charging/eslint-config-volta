"use strict"

// All of these rules will be warnings so its a light nudge in the right direction
module.exports = {
  rules: {

    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // Arguably the most hotly debated rule. TODO: get this to truly fix spacing to tabs in projects
    indent: ["warn", "tab", {
          SwitchCase: "tab",
    }],

    'import/no-useless-path-segments': 'warn',

    'keyword-spacing': ['warn', {
      before: true,
      after: true,
    }],

    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['warn', 'always', {
      exceptAfterSingleLine: true,
    }],

    "no-console": "warn",
    'no-extra-parens': ['warn', 'all', {
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'multi-line',
    }],
    'no-trailing-spaces': 'warn',

    'one-var-declaration-per-line': 'warn',

    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',

    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', 'avoid-escape'],

    //Disallow Semicolons
    semi: ["warn", "never"],
    'space-in-parens': ['warn', 'never'],
    'spaced-comment': 'warn',
  }
}

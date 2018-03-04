"use strict"

// All of these rules will be warnings so its a light nudge in the right direction
module.exports = {
  rules: {
    // Arguably the most hotly debated rule. TODO: get this to truly fix spacing to tabs in projects
    indent: ["warn", "tab", {
          SwitchCase: 1,
    }],
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
    semi: ["warn", "never"],

  }
}

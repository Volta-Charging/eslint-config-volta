'use strict'

// All of these rules will be warnings so its a light nudge in the right direction
module.exports = {
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

		'import/no-useless-path-segments': 'warn',

		// Arguably the most hotly debated rule. TODO: get this to truly fix spacing to tabs in projects
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 2,
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

		'max-len': [
			'warn',
			{
				code: 80,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreUrls: true,
			},
		],

		// If a console.log is being used in code for good reason in production, it should be calling an api for warning or error reporting like Sentry or Dashbird
		'no-console': 'warn',
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

		'one-var-declaration-per-line': 'warn',

		'prefer-const': 'warn',
		'prefer-numeric-literals': 'warn',

		'quote-props': ['warn', 'as-needed'],
		quotes: ['warn', 'single', 'avoid-escape'],

		// Disallow Semicolons
		semi: ['warn', 'never'],

		'sort-keys': 'warn',

		'space-in-parens': ['warn', 'never'],
		'spaced-comment': 'warn',
	},
}

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
				ArrayExpression: 1,
				CallExpression: {
					arguments: 1,
				},
				FunctionDeclaration: {body: 1, parameters: 2},
				FunctionExpression: {
					body: 1,
					parameters: 2,
				},
				MemberExpression: 0,
				SwitchCase: 1,
				VariableDeclarator: {
					const: 3,
					let: 2,
					var: 2,
				},
				ignoredNodes: [],
				outerIIFEBody: 1,
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

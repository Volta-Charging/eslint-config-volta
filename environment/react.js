'use strict'

// coding style for React components.
module.exports = {

	env: {
		es6: true,
		browser: true,
	},

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},

	plugins: [
		'react',
	],

	rules: {
		// Validate closing bracket location in JSX
		// This rule checks all JSX multiline elements and verifies the location of the closing bracket.
		'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
		'react/jsx-no-undef': 'error',

		'react/no-danger': 'warn',
		'react/no-array-index-key': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-did-mount-set-state': 'error',

		'react/no-did-update-set-state': 'error',
		'react/no-will-update-set-state': 'error',

		'react/no-direct-mutation-state': 'error',
		'react/no-redundant-should-component-update': 'warn',
		'react/no-render-return-value': 'error',
		'react/no-typos': 'warn',
		'react/no-unused-state': ['warn'],
		'react/no-unused-prop-types': ['error', {
			customValidators: [],
			// Enabled after discussion in #21
			skipShapeProps: true,
		}],

		'react/prefer-es6-class': ['error', 'always'],
		'react/prefer-stateless-function': 'warn',
		'react/require-default-props': 'error',
	},
}

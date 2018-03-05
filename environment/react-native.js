'use strict'

// coding style for React components.
module.exports = {
	env: {
		'react-native/react-native': true,
	},
	extends: ['./react.js', 'plugin:react-native/all'],
	plugins: ['react-native'],

	rules: {
		'react-native/no-inline-styles': 'off',
	},
}
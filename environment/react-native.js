'use strict'

// coding style for React components.
module.exports = {
	env: {
		'react-native/react-native': true,
	},
	extends: './react.js',
	plugins: ['react-native'],
	rules: {
		'react-native/no-color-literals': 'error',
		'react-native/no-inline-styles': 'error',
		'react-native/no-unused-styles': 'error',
		'react-native/split-platform-components': 'error',
	},
}

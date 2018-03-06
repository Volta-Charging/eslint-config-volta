'use strict'

module.exports = {
	extends: [
		'plugin:flowtype/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'./fixable.js',
	],
	parser: 'babel-eslint',
	plugins: [
		'flowtype',
		'import',
	],
	rules: {
		'consistent-this': ['warn', 'self'],
		'linebreak-style': ['error', 'unix'],
		'max-nested-callbacks': ['warn', 3],
		'no-undef': 'off',
	},
}

'use strict'

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'./fixable.js',
	],
	rules: {
		'consistent-this': ['warn', 'self'],
		'linebreak-style': ['error', 'unix'],
		'max-nested-callbacks': ['warn', 3],
		'no-undef': 'off',
		'operator-linebreak': ['error', 'before'],
	},
}

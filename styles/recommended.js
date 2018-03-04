'use strict'

module.exports = {
	extends: './fixable.js',
	rules: {
		'consistent-this': ['warn', 'self'],
		'max-nested-callbacks': ['warn', 3],
		'linebreak-style': ['error', 'unix'],
	},
}

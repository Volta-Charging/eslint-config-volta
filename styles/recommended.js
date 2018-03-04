'use strict'

module.exports = {
	extends: './fixable.js',
	rules: {
		'consistent-this': ['warn', 'self'],
		'linebreak-style': ['error', 'unix'],
		'max-nested-callbacks': ['warn', 3],
	},
}

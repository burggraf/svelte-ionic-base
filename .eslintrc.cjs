module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	}, 
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'a11y-click-events-have-key-events': 'off',
		'svelte-ignore/a11y-click-events-have-key-events': 'on',
		'click-events-have-key-events': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'a11y/click-events-have-key-events': 'off',
		'vuejs-accessibility/click-events-have-key-events': 'off',
		'sveltejs-accessibility/click-events-have-key-events': 'off',
		'svelte-accessibility/click-events-have-key-events': 'off'
	}
};

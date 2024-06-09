module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				'allowTemplateLiterals': true
			}
		],
		'jsx-quotes': [2, 'prefer-single'],
		'semi': ['error', 'never'],
		'@typescript-eslint/indent': [
			2,
			'tab'
		],
		'linebreak-style': [
			2,
			'windows'
		],
		'@typescript-eslint/no-unused-vars': ['error', {
			'vars': 'all',
			'args': 'after-used',
			'ignoreRestSiblings': false
		}],
		'max-len': ['error', {
			'code': 200,
			'ignoreComments': true,
			'ignoreStrings': true,
			'ignoreTemplateLiterals': true
		}],
		'max-lines': ['error', {
			'max': 300,
			'skipBlankLines': true,
			'skipComments': true
		}],
		'no-trailing-spaces': ['error'],
		'block-spacing': ['error'],
	},
}

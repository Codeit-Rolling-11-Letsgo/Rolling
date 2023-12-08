module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		// 'import/resolver': 'vite',
	},
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
};

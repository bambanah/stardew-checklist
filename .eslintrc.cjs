module.exports = {
	root: true,
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:solid/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
	},
};

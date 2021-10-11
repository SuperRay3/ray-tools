module.exports = {
  root: true,
	parser: '@typescript-eslint/parser',  // 指定ESLint要使用的解析器
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
		'plugin:@typescript-eslint/recommended'
  ],
	plugins: [
    'jest',
  ],
  rules: {
  }
}

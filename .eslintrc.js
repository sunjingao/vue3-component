module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    'Popper': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    "plugin:prettier/recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 驼峰规则校验：关闭
    'camelcase': 0,
    // 不允许使用tabs：关闭
    'no-tabs': 0,
    // 缩进，两个空格2
    'indent': ['error', 2],
    // 结尾分号
    'semi': [
      2,
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // 函数括号前要有一个空格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // 块语句内行首行尾是否要有空格
    'padded-blocks': 0,
    // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
    'no-mixed-operators': 0,
    // 禁止使用RegExp构造函数，而使用正则表达式文字
    'prefer-regex-literals': 0,
  }
}

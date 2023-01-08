module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入polyfill
        corejs: 3
      }
    ]
  ],
  plugins: []
}

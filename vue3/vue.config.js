const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd'
    },
  },
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
})

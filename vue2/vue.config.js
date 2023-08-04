const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name
const path = require('path')

module.exports = defineConfig({
  publicPath: '/main/vue2/',
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd'
    },
  },
  devServer: {
    port: 8001,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
  outputDir: path.join('../server/vue2')
})

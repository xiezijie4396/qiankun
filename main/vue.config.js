const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000
  },
  outputDir: path.join('../server/main'),
  publicPath: '/main/'
})

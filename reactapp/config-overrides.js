const { name } = require('./package');
const { overrideDevServer } = require('customize-cra');
const path = require('path')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';
    config.output.path = path.join(__dirname, '../server/child/react')
    config.output.publicPath = process.env.BASEURL
    
    return config;
  },

  devServer: overrideDevServer((config) => {

    config.headers = {
      'Access-Control-Allow-Origin': '*'
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.liveReload = false;

    return config;
  }),
};
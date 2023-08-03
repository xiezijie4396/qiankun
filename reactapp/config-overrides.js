const { name } = require('./package');
const { overrideDevServer } = require('customize-cra');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';

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
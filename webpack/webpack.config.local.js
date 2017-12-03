const base = require('./webpack.config');
const webpack = require('webpack');
const BASE_DIR = __dirname;
const entry = base.entry;
const config = Object.assign(base, {
  entry: [...entry,
    'webpack-dev-server/client?http://localhost:3000/',
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3000,
    historyApiFallback: true,
    }
  });

module.exports = config;

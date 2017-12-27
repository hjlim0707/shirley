const base = require('./webpack.config');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const BASE_DIR = __dirname;
const plugins = base.plugins;
const config = Object.assign(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({compress: {
        warnings: false
    }}),
    ...plugins
  ]
});

module.exports = base;

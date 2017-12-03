var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BASE_DIR = __dirname;

module.exports = {
  entry: [
    __dirname + '/../src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: "bundle-[hash].js",
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "../src/"),
        exclude: /node_modules/,
      }, {
        test: /\.(sass|scss)?$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader',
        use: [
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]})
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new CleanPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),
    verbose: true,
  }), new ExtractTextPlugin('[name]-[hash].css'), new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
  }), new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/public',
      to: 'public'
    }])
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  }
};

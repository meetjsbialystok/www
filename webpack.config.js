const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, './src')
const DIST_PATH = path.resolve(__dirname, './path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['./app.js'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].bundle.js',
  },
  resolve: {
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
      }],
    }, {
      test: /\.json?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'json-loader',
      }],
    }, {
      test: /\.(jpg|jpeg|png)?$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'file-loader?name=[path][name].[hash].[ext]',
      }],
    }, {
      test: /\.scss$/,
      exclude: [/node_modules/],
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader',
        ]
      })
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      template: 'index.ejs'
    }),
    new ExtractTextPlugin("styles.css"),
  ]
};

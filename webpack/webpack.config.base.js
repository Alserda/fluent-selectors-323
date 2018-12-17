const webpack = require('webpack');
const { Config } = require('webpack-config');
const { join, resolve } = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const paths = {
  source: resolve(__dirname, '../src'),
  build: resolve(__dirname, '../dist'),
  publicPath: '/',
};


module.exports = new Config().merge({
  context: paths.source,

  entry: 'index.tsx',

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.css', 'scss'],
    alias: {
      core: 'services/core',
    },
  },

  output: {
    filename: 'fluentdemo.[hash].js',
    chunkFilename: 'fluentdemo.[name].js',
    path: paths.build,
    publicPath: paths.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  },

  plugins: [
    // Generate minified HTML page from template with all CSS/JS imports.
    new HtmlWebpackPlugin({
      title: 'Fluent-demo',
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
});

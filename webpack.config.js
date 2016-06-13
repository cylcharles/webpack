var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel-loader?presets[]=es2015&presets[]=react',
     },
     {
       test: /\.css$/,
       loader: 'style-loader!css-loader'
     },
     {
       test: /\.(png|jpg)$/,
       loader: 'url-loader?limit=8192'
     },
   ]
 }
};

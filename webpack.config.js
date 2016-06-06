var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './main.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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

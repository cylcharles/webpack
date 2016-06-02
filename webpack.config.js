module.exports = {
  entry: {
    bundle: './main.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
     {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react']
       }
     },
     {
       test: /\.css$/,
       loader: 'style-loader!css-loader'
     },
   ]
 }
};

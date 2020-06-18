const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Used for live reloading.
  devServer: {
    // How the server should find the files.
    contentBase: './dist',
    hot: true
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    // Generated in memory, not physical file.
    // Has options to programmatically format filename.
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
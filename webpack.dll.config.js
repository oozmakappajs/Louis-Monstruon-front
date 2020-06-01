const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'prop-types',
      'react',
      'react-dom',
      'react-helmet',
      'react-router-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    }),
  ],
};

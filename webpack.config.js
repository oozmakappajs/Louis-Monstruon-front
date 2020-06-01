const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[hash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new WebpackPwaManifestPlugin({
      name: 'Louis Monstruon',
      short_name: 'LM',
      description: 'set a description',
      background_color: '#F2F6F5',
      theme_color: '#5BDBC3',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/images/pwa_icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/assets/images/pwa_icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/assets/images/pwa_icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons', 'android'),
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://louis-monstruon.now.sh/(assets/icons)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'assetsAndIcons',
          },
        },
        {
          urlPattern: new RegExp('http://oozmakappa-api.herokuapp.com/api/v1/(categories|products)'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'apiCategoriesProducts',
          },
        },
      ],
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require('./dist/modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dist/*.dll.js'),
    }),
  ],
};

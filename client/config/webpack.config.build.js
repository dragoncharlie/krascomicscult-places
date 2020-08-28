const webpack = require('webpack');
const path = require('path');
const resolve = require('./webpack.config.resolve');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: ['@babel/polyfill', './src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve,
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|pdf|ico)$/,
        loader: require.resolve('file-loader'),
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(process.env.VERSION),
    }),
  ],
};

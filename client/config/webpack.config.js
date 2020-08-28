const path = require('path');
const webpack = require('webpack');
const resolve = require('./webpack.config.resolve');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  resolve,
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
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(process.env.VERSION),
    }),
  ],
  devServer: {
    contentBase: './public',
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
  },
};

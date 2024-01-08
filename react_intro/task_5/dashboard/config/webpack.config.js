const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'), // replaces contentBase
    },
    compress: true,
    hot: true,
    port: 8564,
  },

  devtool: 'inline-source-map',


  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
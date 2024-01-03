const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


/* Modify the webpack config to support adding images to the CSS. */
module.exports = {

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  mode: 'development',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',

  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 8564,

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
    new CleanWebpackPlugin(),

  ],
  devtool: 'inline-source-map',
  chunks: 'all',
  optimization: {
    runtimeChunk: 'single',
  },
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
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
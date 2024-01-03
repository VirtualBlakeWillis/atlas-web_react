const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
      import: './js/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './js/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './js/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',

  },
  devServer: {
    static: {directory: path.resolve(__dirname, 'public'), },
    compress: true,
    port: 8564,

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
  ],
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
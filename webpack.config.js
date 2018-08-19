const path = require('path');
const ConfigWebpackPlugin = require('config-webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          },
        }, {
          loader: 'less-loader',
        }],
      },
    ],
  },
  plugins: [
    new ConfigWebpackPlugin(),
  ],
};

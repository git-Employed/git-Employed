const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./client/index.html",
	filename: "./index.html",
});
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: process.env.NODE_ENV || 'development',
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: { name: '/static/[name].[ext]' },
      },
    ],
  },
  devServer: {
    static: {
      publicPath: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
    // historyApiFallback: true,
  },
};

const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'public'},
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/}
    ]
  },
  mode: 'development'
}
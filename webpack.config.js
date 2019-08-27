const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'sdk.es6': './src/index.ts',
    'sdk.es6.min': './src/index.ts',
  },
  devtool: 'inline-source-map',
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'cyberuskey-sdk',
      umdNamedDefine: true
  },
  resolve: {
      extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        include:  /\.min\.js$/,
        // sourceMap: true
      })
    ]
  }
}
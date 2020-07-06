const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
    path: Path.resolve(__dirname, '../public'),
  },
  devServer: {  
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 4000,
    historyApiFallback: true
  },
  plugins: [ 
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [   
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }, 
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }  
    ]
  }
});

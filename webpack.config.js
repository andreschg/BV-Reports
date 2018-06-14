const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }, {
          test: /\.png$/,
          use: "url-loader?limit=100000"
        }, {
          test: /\.jpg$/,
          use: "file-loader"
        }, {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader? limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=application/octet-stream'
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};

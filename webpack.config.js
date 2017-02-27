var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './app.js',

  devtool: 'source-map',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs/dist')
  },

  module: {
    rules: [
      {
        test: /\.postcss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
              }
            },

            'postcss-loader',
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),

    new BrowserSyncPlugin({
      server: {
        baseDir: ['docs']
      }
    })
  ],
}
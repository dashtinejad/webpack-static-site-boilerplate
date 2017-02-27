var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs/dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
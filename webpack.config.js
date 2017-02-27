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
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // minimize: true,
              }
            },

            'postcss-loader',
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
}
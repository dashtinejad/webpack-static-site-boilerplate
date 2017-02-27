var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app.js',

  devtool: 'source-map',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs/')
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
    // save bundle css as an external file
    new ExtractTextPlugin('bundle.css'),

    // run the browsersync server
    new BrowserSyncPlugin({
      server: {
        baseDir: ['./docs/'],
        index: 'index.html'
      }
    }),

    // create favicon
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      prefix: 'favicon/',
      inject: false,
    }),

    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      xhtml: true,
      title: 'Hello World',
      inject: false,
    })
  ],
}
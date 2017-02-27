var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./config')

module.exports = {
  entry: './app.js',

  devtool: 'source-map',
  
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './docs/'),
    publicPath: '../',
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
                // minimize: true,
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
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      },
    ]
  },

  plugins: [
    // save bundle css as an external file
    new ExtractTextPlugin('css/bundle.css'),

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
      title: config.title,
    }),

    new HtmlWebpackPlugin({
      template: './src/layout/index.ejs',
      xhtml: true,
      title: config.title,
      inject: false,
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/layout/about.ejs',
      xhtml: true,
      title: config.title,
      inject: false,
      filename: 'about.html',
    }),
  ],
}
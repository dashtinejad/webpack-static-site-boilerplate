var path = require('path')

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
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
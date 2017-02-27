var cssvariables = require('postcss-css-variables')
var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    cssvariables(),
    autoprefixer(),
  ]
}
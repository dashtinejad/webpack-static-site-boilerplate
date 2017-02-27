var cssvariables = require('postcss-css-variables')
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');

module.exports = {
  plugins: [
    cssvariables(),
    autoprefixer(),
    nested(),
  ]
}
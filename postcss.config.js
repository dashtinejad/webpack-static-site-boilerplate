var cssvariables = require('postcss-css-variables')
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var partial = require('postcss-import');

module.exports = {
  plugins: [
    partial(),
    nested(),
    cssvariables(),
    autoprefixer(),
  ]
}
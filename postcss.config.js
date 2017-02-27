var cssvariables = require('postcss-css-variables')
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var partial = require('postcss-import');
var color = require('postcss-color-function');
var customProperties = require("postcss-custom-properties")

module.exports = {
  plugins: [
    partial(),
    customProperties(),
    color(),    
    nested(),
    cssvariables(),
    autoprefixer(),
  ]
}
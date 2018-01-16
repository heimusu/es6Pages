const src = __dirname + "/src";
const dist = __dirname + "/dist"

var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: src,
  entry: "./js/index.js",
  output: {
    path: dist,
    filename: "index.min.js"
  },
  devServer: {
    contentBase: dist,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader: "babel-loader",
        query: {
          presets:[
            ["env", {
              "targets": {
                "node": "current"
              }
            }]
          ]
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./html/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "another.html",
      template: "./html/another.html"
    })
  ]
};
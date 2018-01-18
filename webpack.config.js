var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  // app import chain starts here
  entry: './frontend/app/index',

  // location of written bundled files
  output: {
    path: path.resolve('./frontend/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      { test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.css$/,
        loaders: ['style', 'css']
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file',
        options: {
          publicPath: 'static/'
          }
      }
    ]
  },

  resolve: {
    modules: ['node_modules' , path.resolve(__dirname, 'frontend')],
    extensions: ['.js', '.jsx']
  },
}

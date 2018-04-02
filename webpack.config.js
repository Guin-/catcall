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
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      { test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader',
        options: {
          name: '[name]-[ext]'
        }
      },
      { test: /\.(svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
      }
    ]
  },

  resolve: {
    modules: ['node_modules' , path.resolve(__dirname, 'frontend')],
    extensions: ['.js', '.jsx']
  },
}

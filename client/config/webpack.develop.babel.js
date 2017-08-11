import path from 'path'
import webpack from 'webpack'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, '../index.html')
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false
  })
]

module.exports = require('./webpack.base.babel')({
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'client/app.jsx')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins,
  babelQuery: {
    // require.resolve solves the issue of relative presets when dealing with
    // locally linked packages. This is an issue with babel and webpack.
    // See https://github.com/babel/babel-loader/issues/149 and
    // https://github.com/webpack/webpack/issues/1866
    presets: ['babel-preset-react-hmre'].map(require.resolve)
  }
})

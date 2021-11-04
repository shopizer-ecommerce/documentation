const paths = require('./paths')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const config = require("./index.js")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const utils = require("./utils")
module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },

  // Production: Magic happen here transpiling to es5 to partly support older browser like IE11
  target: ['web', 'es5'],

  plugins: [
    new CopyPlugin(
      {
        patterns: [
          { from: path.resolve(__dirname, '../static'), to: config.build.assetsSubDirectory },
        ],
        
      }
    ),
    // service worker caching
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cacheId: 'playbook',
      // filename: 'service-worker.js',
      // staticFileGlobs: ['dist/**/*.{js,html,css}'],
      // minify: true,
      // stripPrefix: 'dist/'
    }),
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})

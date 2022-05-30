const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {isDevelopment} = require('./../config');

module.exports.optimization = isDevelopment
    ? {
          removeAvailableModules: false,
          removeEmptyChunks: true,
          runtimeChunk: true,
          splitChunks: {
              cacheGroups: {
                  main: {
                      chunks: 'all',
                      name: 'main',
                      priority: -30,
                      reuseExistingChunk: true,
                  },
                  assets: {
                      chunks: 'all',
                      name: 'assets',
                      priority: -26,
                      test: /www\/assets/,
                      reuseExistingChunk: true,
                  },
                  util: {
                      chunks: 'all',
                      name: 'util',
                      priority: -25,
                      test: /www\/util/,
                      reuseExistingChunk: true,
                  },
                  page: {
                      chunks: 'all',
                      name: 'page',
                      priority: -24,
                      test: /www\/page/,
                      reuseExistingChunk: true,
                  },
                  layout: {
                      chunks: 'all',
                      name: 'layout',
                      priority: -23,
                      test: /www\/layout/,
                      reuseExistingChunk: true,
                  },
                  provider: {
                      chunks: 'all',
                      name: 'provider',
                      priority: -22,
                      test: /www\/provider/,
                      reuseExistingChunk: true,
                  },
                  service: {
                      chunks: 'all',
                      name: 'service',
                      priority: -21,
                      test: /www\/service/,
                      reuseExistingChunk: true,
                  },

                  style: {
                      chunks: 'all',
                      name: 'style',
                      priority: -20,
                      test: /\.s?css$/,
                      reuseExistingChunk: true,
                  },
                  // files: {
                  //     chunks: 'all',
                  //     name: 'files',
                  //     priority: -15,
                  //     test: fileRegExp,
                  //     reuseExistingChunk: true,
                  // },
                  vendor: {
                      chunks: 'all',
                      name: 'vendor',
                      priority: -10,
                      test: /node_modules/,
                      reuseExistingChunk: true,
                  },
              },
          },
      }
    : {
          minimize: true,
          minimizer: [
              new TerserPlugin({
                  terserOptions: {
                      output: {
                          comments: false,
                          beautify: false,
                      },
                      compress: {
                          pure_funcs: ['console.log'], // eslint-disable-line camelcase, id-match
                          passes: 3,
                      },
                  },
              }),
              new CssMinimizerPlugin(),
          ],
      };

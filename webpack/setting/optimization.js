const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {isDevelopment, fileRegExp} = require('./../config');

module.exports.optimization = isDevelopment
    ? {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                main: {
                    chunks: 'initial',
                    name: 'main',
                    priority: -25,
                    reuseExistingChunk: true,
                },
                style: {
                    chunks: 'initial',
                    name: 'style',
                    priority: -20,
                    reuseExistingChunk: true,
                    test: /\.s?css$/,
                },
                asset: {
                    chunks: 'initial',
                    name: 'asset',
                    priority: -15,
                    test: fileRegExp,
                },
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    priority: -10,
                    test: /node_modules/,
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
                        drop_console: true, // eslint-disable-line camelcase, id-match
                        passes: 3,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    };

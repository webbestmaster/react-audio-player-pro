import {Configuration} from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// ignored const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
import TerserPlugin from 'terser-webpack-plugin';

import {isDevelopment} from '../config';

const optimizationDevelopment: Configuration['optimization'] = {
    removeAvailableModules: false,
    removeEmptyChunks: true,
    runtimeChunk: true,
    splitChunks: {
        cacheGroups: {
            // eslint-disable-next-line sort-keys
            main: {
                chunks: 'all',
                name: 'main',
                priority: -30,
                reuseExistingChunk: true,
            },
            // eslint-disable-next-line sort-keys
            assets: {
                chunks: 'all',
                name: 'assets',
                priority: -26,
                reuseExistingChunk: true,
                test: /www\/assets/u,
            },
            // eslint-disable-next-line sort-keys
            util: {
                chunks: 'all',
                name: 'util',
                priority: -25,
                reuseExistingChunk: true,
                test: /www\/util/u,
            },
            // eslint-disable-next-line sort-keys
            page: {
                chunks: 'all',
                name: 'page',
                priority: -24,
                reuseExistingChunk: true,
                test: /www\/page/u,
            },
            // eslint-disable-next-line sort-keys
            layout: {
                chunks: 'all',
                name: 'layout',
                priority: -23,
                reuseExistingChunk: true,
                test: /www\/layout/u,
            },
            // eslint-disable-next-line sort-keys
            provider: {
                chunks: 'all',
                name: 'provider',
                priority: -22,
                reuseExistingChunk: true,
                test: /www\/provider/u,
            },
            // eslint-disable-next-line sort-keys
            service: {
                chunks: 'all',
                name: 'service',
                priority: -21,
                reuseExistingChunk: true,
                test: /www\/service/u,
            },

            // eslint-disable-next-line sort-keys
            style: {
                chunks: 'all',
                name: 'style',
                priority: -20,
                reuseExistingChunk: true,
                test: /\.s?css$/u,
            },
            // eslint-disable-next-line sort-keys
            vendor: {
                chunks: 'all',
                name: 'vendor',
                priority: -10,
                reuseExistingChunk: true,
                test: /node_modules/u,
            },
        },
    },
};

const optimizationProduction: Configuration['optimization'] = {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                compress: {
                    passes: 3,
                    pure_funcs: ['console.log'], // eslint-disable-line camelcase, id-match
                },
                output: {
                    beautify: false,
                    comments: false,
                },
            },
        }),
        new CssMinimizerPlugin(),
    ],
};

export const optimization: Configuration['optimization'] = isDevelopment
    ? optimizationDevelopment
    : optimizationProduction;

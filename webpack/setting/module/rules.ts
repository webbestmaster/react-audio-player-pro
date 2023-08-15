import {cwd} from 'node:process';
import path from 'node:path';

import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {isProduction, isDevelopment, isTsTranspileOnly, fileRegExp} from '../../config';

const styleLoader = {
    loader: 'style-loader',
    options: {attributes: {'class': 'my-css-module'}},
};

const cssLoader = isProduction ? MiniCssExtractPlugin.loader : styleLoader;

export const rules: Array<RuleSetRule> = [
    {
        exclude: /node_modules/u,
        test: /\.tsx?$/u,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: 'ts-loader',
                options: {
                    configFile: isProduction
                        ? path.join(cwd(), 'tsconfig.json')
                        : path.join(cwd(), 'tsconfig.dev.json'),
                    // Disable type checker for building
                    transpileOnly: isTsTranspileOnly || isProduction,
                },
            },
        ],
    },
    {
        parser: {
            dataUrlCondition: {
                // 0 byte
                maxSize: 0,
            },
        },
        test: fileRegExp,
        type: 'asset',
    },
    {
        test: /\.scss$/u,
        use: [
            cssLoader,
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDevelopment ? '[local]----[hash:6]' : '[hash:6]',
                        /*
                         * '[local]----[path]--[name]--[hash:6]'
                         * localIdentName: '[local]', // '[local]----[path]--[name]--[hash:6]'
                         */
                    },
                    sourceMap: true,
                },
            },
            {loader: 'sass-loader', options: {sourceMap: true}},
        ],
    },
    {
        test: /\.css$/u,
        use: [
            cssLoader,
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // '[local]----[path]--[name]--[hash:6]'
                        localIdentName: '[local]',
                    },
                    sourceMap: true,
                },
            },
        ],
    },
    {
        test: /\.(txt|md)$/iu,
        use: 'raw-loader',
    },
];

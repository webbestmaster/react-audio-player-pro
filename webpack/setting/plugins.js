const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const {isProduction, isDevelopment, isBuildLibrary} = require('./../config');
const filePathPrefix = isProduction ? './../' : './';

const date = new Date();

const definePluginParameters = {
    // eslint-disable-next-line id-match
    // BUILD_DATE: JSON.stringify(date.getTime()),
    // eslint-disable-next-line id-match
    BUILD_DATE_H: JSON.stringify(date.toISOString()),
    // NODE_ENV: JSON.stringify(NODE_ENV),
    IS_PRODUCTION: JSON.stringify(isProduction),
    // PROJECT_ID: JSON.stringify('my-best-project')
    // IS_DEVELOPMENT: JSON.stringify(IS_DEVELOPMENT)
};

const staticFilesSiteList = [
    {
        from: './www/favicon.ico',
        to: filePathPrefix + 'favicon.ico',
    },
];

const pluginList = [
    new CircularDependencyPlugin({exclude: /node_modules/}),
    new DuplicatePackageCheckerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin(definePluginParameters),
    new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: isDevelopment ? '[name].css' : 'style.css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:6].css',
    }),
    new HtmlWebpackPlugin({
        minify: {
            collapseWhitespace: isProduction,
            removeComments: isProduction,
            minifyCSS: isProduction,
            minifyJS: isProduction,
            keepClosingSlash: true,
        },
        hash: true,
        filename: filePathPrefix + 'index.html',
        template: './www/index.html',
    }),
    new CopyWebpackPlugin({
        patterns: staticFilesSiteList,
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),
];

const pluginBuildLibraryList = [
    new CircularDependencyPlugin({exclude: /node_modules/}),
    new DuplicatePackageCheckerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin(definePluginParameters),
    // new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: isDevelopment ? '[name].css' : 'style.css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:6].css',
    }),
    /*
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: isProduction,
                removeComments: isProduction,
                minifyCSS: isProduction,
                minifyJS: isProduction,
                keepClosingSlash: true,
            },
            hash: true,
            filename: filePathPrefix + 'index.html',
            template: './www/index.html',
        }),
    */
    /*
        new CopyWebpackPlugin({
            patterns: staticFilesSiteList,
        }),
    */
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),
];

module.exports.plugins = isBuildLibrary ? pluginBuildLibraryList : pluginList;
